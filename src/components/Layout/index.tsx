import Head from 'next/head';
import { SocialProps } from '../../types';

interface Prop {
  children: React.ReactNode;
  socialProps?: SocialProps;
}

export default function Layout({ socialProps, children }: Prop): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:title" content={socialProps?.title ?? 'KodeWorks'} />
        <meta property="og:type" content={socialProps?.type ?? 'website'} />
        <meta
          property="og:description"
          content={
            socialProps?.description ??
            'We commit ourselves to delivering good solutions and value in collaboration with our clients, and strive each day to create an invigorating and giving workplace.'
          }
        />
        <meta property="og:url" content={socialProps?.url ?? 'https://kodeworks.no'} />
        <meta
          property="og:image"
          content={
            socialProps?.image
              ? `https://kodeworks.no${socialProps?.image}`
              : 'https://kodeworks.no/images/og-image-logo.jpg'
          }
        />
      </Head>

      {children}
    </>
  );
}
