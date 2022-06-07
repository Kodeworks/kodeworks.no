import React, { ReactElement, ReactNode, useContext, useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ClipContentContext } from '../context/ClipContentContext';
import { ClipContentProvider } from '../context/ClipContentContext';
import Navigation from '../components/Navigation';

import '../styles/kw.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Prop = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: Prop): JSX.Element {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <ClipContentProvider>
      <>
        <Main />
        {getLayout(<Component {...pageProps} />)}
      </>
    </ClipContentProvider>
  );
}

function Main(): JSX.Element {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const router = useRouter();
  const { clipMode } = useContext(ClipContentContext);

  const scrollPositions = useRef<{ [url: string]: number }>({});
  const isBack = useRef(false);

  useEffect(() => {
    function onRouteChangeStart(): void {
      setIsNavigationOpen(false);
      document.documentElement.className = '';
    }

    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);

  // useEffect(() => {
  //   function handleRouteChangeStart() {
  //     document.documentElement.className = '';
  //     document.documentElement.scrollTop = scrollTop;
  //     console.log(1234);
  //   }

  //   function handleRouteChangeComplete() {
  //     // setIsNavigationOpen(false);
  //     // window.scroll({
  //     //   top: 0,
  //     //   left: 0,
  //     // });
  //     // setScrollTop(0);
  //     // console.log(document.documentElement.scrollTop);
  //     setIsNavigationOpen(false);
  //   }

  //   router.events.on('routeChangeStart', handleRouteChangeStart);
  //   router.events.on('routeChangeComplete', handleRouteChangeComplete);
  // });

  function handleMenuButtonClick(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
      | KeyboardEvent
      | null,
    skip?: boolean
  ): void {
    event?.stopPropagation();

    if (skip) {
      document.documentElement.className = '';
      document.documentElement.scrollTop = scrollTop;

      return;
    }

    setIsNavigationOpen(!isNavigationOpen);

    if (!isNavigationOpen) {
      setTimeout(() => {
        setScrollTop(document.documentElement.scrollTop);
        document.documentElement.className = 'no-scroll';
      }, 250);
    } else {
      document.documentElement.className = '';
      document.documentElement.scrollTop = scrollTop;
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kodeworks" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We commit ourselves to delivering good solutions and value in collaboration with our clients, and strive each day to create an invigorating and giving workplace."
        />
        <meta property="og:url" content="https://kodeworks.no" />
        <meta property="og:image" content="https://kodeworks.no/images/og-image-logo.jpg" />
        <title>Kodeworks</title>
      </Head>
      <button
        onClick={handleMenuButtonClick}
        id="menu-button"
        className={clipMode ? 'dark-mode' : ''}
      >
        <label className="menuicon-label">
          <span
            className={`menuicon-line-container menuicon-line-container-top${
              isNavigationOpen ? '--active' : ''
            }`}
          >
            <span className="menuicon-line menuicon-line-top"></span>
          </span>

          <span
            className={`menuicon-line-container menuicon-line-container-bottom${
              isNavigationOpen ? '--active' : ''
            }`}
          >
            <span className="menuicon-line menuicon-line-bottom"></span>
          </span>
        </label>
        <label className={`menubutton-label ${isNavigationOpen ? 'menubutton-label-close' : ''}`}>
          {isNavigationOpen ? 'Close' : 'Menu'}
        </label>
      </button>

      <Navigation isOpened={isNavigationOpen} toggleNavigationOpened={handleMenuButtonClick} />
    </>
  );
}
