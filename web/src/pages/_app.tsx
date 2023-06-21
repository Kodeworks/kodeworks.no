import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode, useContext, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import { ClipContentContext, ClipContentProvider } from '../context/ClipContentContext';
import dictionary from '../components/Navigation/dict';

import '../styles/kw.css';
import { useTranslation } from '../utils/useTranslation';

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
      <div className='lg:visible invisible flex justify-between items-center' id='menu-bar'>
          <Link href="/" className='leading-none pl-8'>
            <img className="logo" src="/static/logo.svg" alt="Logo" width="240" height="30" />
          </Link>
        <div className='flex gap-x-8 pr-8'>
          <Link href="/people" className='no-underline leading-none nav-link'>
            <span className='text-xl text-[#000] hover:text-[#666]'>{t('our people')}</span>
          </Link>
          <Link href="/projects"  className='no-underline leading-none nav-link'>
            <span className='text-xl text-[#000] hover:text-[#666]'>{t('projects')}</span>
          </Link>
          <Link href="/career"  className='no-underline leading-none nav-link'>
            <span className='text-xl text-[#000] hover:text-[#666]'>{t('career')}</span>
          </Link>
          <Link href="/staffmanual"  className='no-underline leading-none nav-link'>
            <span className='text-xl text-[#000] hover:text-[#666]'>{t('staff manual')}</span>
          </Link>
        </div>
      </div>
      <button
        onClick={handleMenuButtonClick}
        id="menu-button"
        className={`${clipMode ? 'dark-mode' : ''} lg:invisible`}
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

      <Navigation isOpened={isNavigationOpen} toggleNavigationOpened={handleMenuButtonClick} />
    </>
  );
}
