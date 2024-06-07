import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode, useContext, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import MobileNavigation from '../components/MobileNavigation';
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
      <>
        <Main />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </>
  );
}

function Main(): JSX.Element {
  const { t } = useTranslation(dictionary);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const router = useRouter();

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
        className="lg:visible invisible flex justify-between items-center pt-8 pb-8"
        id="menu-bar"
      >
        <Link href="/" className="xl:pl-16 pl-8">
          <div id="menu-bar-logo" />
        </Link>
        <div className="flex xl:gap-x-12 lg:gap-x-6 gap-x-4 xl:pr-16 pr-8">
          <Link
            href="/people"
            className={`no-underline leading-none nav-link ${
              router.pathname === '/people' ? 'active' : ''
            }`}
          >
            <span className="lg:text-2xl text-lg text-black hover:text-black">Våre eksperter</span>
          </Link>
          
          <Link
            href="/projects"
            className={`no-underline leading-none nav-link ${
              router.pathname === '/projects' ? 'active' : ''
            }`}
          >
            <span className="lg:text-2xl text-lg text-black hover:text-black">Våre prosjekter</span>
          </Link>

          <Link
            href="/career"
            className={`no-underline leading-none nav-link ${
              router.pathname === '/career' ? 'active' : ''
            }`}
          >
            <span className="lg:text-2xl text-lg text-black hover:text-black">Jobbe i KodeWorks</span>
          </Link>
          
          <Link
            href="/staffmanual"
            className={`no-underline leading-none nav-link ${
              router.pathname === '/staffmanual' ? 'active' : ''
            }`}
          >
            <span className="lg:text-2xl text-lg text-black hover:text-black">Håndboka</span>
          </Link>
          <Link href="/#kontaktoss">
            <button className="button xl:px-8 px-4 py-2 border-none">
                Kontakt oss
            </button>
          </Link>
        </div>
      </div>
      <button
        onClick={handleMenuButtonClick}
        id="menu-button"
        className="lg:invisible"
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
