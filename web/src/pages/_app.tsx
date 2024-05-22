import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode, useContext, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import MobileNavigation from '../components/MobileNavigation';
import { ClipContentContext, ClipContentProvider } from '../context/ClipContentContext';
import dictionary from '../components/MobileNavigation/dict';

import '../styles/kw.css';
import { useTranslation } from '../utils/useTranslation';
import Footer from '../components/Footer';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function defaultLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default function App({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? defaultLayout;

  return (
    <ClipContentProvider>
      <>
        <Main />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </>
    </ClipContentProvider>
  );
}

function Main(): JSX.Element {
  const { t } = useTranslation(dictionary);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const router = useRouter();

  const { clipMode } = useContext(ClipContentContext);

  useEffect(() => {
    function onRouteChangeStart(): void {
      setIsNavigationOpen(false);
      document.documentElement.className = '';
    }

    router.events.on('routeChangeStart', onRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
    };
  }, [router]);

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
        <title>KodeWorks</title>
      </Head>
      
      <div
        className={`${clipMode} lg:visible invisible flex justify-between items-center divide-y`}
        id="menu-bar"
      >
        <Link href="/" className="leading-none pl-8">
          <div id="menu-bar-logo" />
        </Link>
        <div className="flex gap-x-8 pr-8">
          <Link
            href="/projects"
            className={`no-underline leading-none nav-link ${
              router.pathname === '/projects' ? 'active' : ''
            }`}
          >
            <span className="text-xl text-black hover:text-black">{t('projects')}</span>
          </Link>
          <Link
            href="/people"
            className={`no-underline leading-none nav-link ${
              router.pathname === '/people' ? 'active' : ''
            }`}
          >
            <span className="text-xl text-black hover:text-black">{t('our people')}</span>
          </Link>
          <Link
            href="/career"
            className={`no-underline leading-none nav-link ${
              router.pathname === '/career' ? 'active' : ''
            }`}
          >
            <span className="text-xl text-black hover:text-black">{t('career')}</span>
          </Link>
          <button className="button rounded-xl px-2.5 py-1 border-none">
            Forespørsel
          </button>
        </div>
      </div>
      <button
        onClick={handleMenuButtonClick}
        id="menu-button"
        className={`${clipMode} lg:invisible`}
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
          {isNavigationOpen ? 'Lukk' : 'Meny'}
        </label>
      </button>

      <MobileNavigation isOpened={isNavigationOpen} toggleNavigationOpened={handleMenuButtonClick} />
    </>
  );
}
