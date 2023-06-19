import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useTranslation } from '../../utils/useTranslation';
import dictionary from './dict';

import style from './navigation.module.css';

interface Prop {
  isOpened: boolean;
  toggleNavigationOpened(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
      | KeyboardEvent,
    skip?: boolean
  ): void;
}

export default function Navigation({ isOpened, toggleNavigationOpened }: Prop): JSX.Element {
  const { t } = useTranslation(dictionary);
  const { locale, pathname } = useRouter();

  useEffect(() => {
    function escKeyListener(event: KeyboardEvent) {
      if (isOpened && event.key === 'Escape') {
        toggleNavigationOpened(event);
      }
    }

    if (isOpened) {
      document.addEventListener('keydown', escKeyListener);
    }

    return function cleanupListener() {
      document.removeEventListener('keydown', escKeyListener);
    };
  }, [isOpened]);

  function onLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const currentHref = event.currentTarget.href;

    toggleNavigationOpened(event, true);
    window.location.href = currentHref;
  }

  return (
    <menu id={style['menu']} className={isOpened ? style['menu--opened'] : ''}>
      <div className={style['menu-hero']}>
        <img className={style['menu-hero-logo']} src="/static/logo-white.svg" width="100" alt="" />
        <div className={style['menu-hero-overlay']}></div>
      </div>

      <div className={style['menu-content']}>
        <nav className={style['menu-navigation']}>
          <h4>
            <Link href="/" locale={locale}>
              KodeWorks
            </Link>
          </h4>
          <ul className="list-plain">
            <li>
              <Link href="/people" locale={locale}>
                {t('our people')}
              </Link>
            </li>
            <li>
              <Link href="/projects" locale={locale}>
                {t('projects')}
              </Link>
            </li>
            <li>
              <Link href="/career/new" locale={locale}>
                {t('career')}
              </Link>
            </li>
            <li>
              <Link href="/staffmanual" locale={locale}>
                {t('staff manual')}
              </Link>
            </li>
            <li>
              <Link href="https://blog.kodeworks.no/" locale={locale}>
                {t('blog')}
              </Link>
            </li>
          </ul>
        </nav>

        <footer className={style['menu-footer']}>
          <h4>{t('get in touch')}</h4>
          <p>
            post@kodeworks.no
            <br />
            +47 416 70 269‬
          </p>

          <h5>Oslo</h5>
          <p>Grønnegata 10, 0350 Oslo</p>

          <h5>Trondheim</h5>
          <p>Fjordgata 30, 7010 Trondheim</p>
          <div className={`${style['menu-footer-links']}`}>
            <ul className={`list-plain ${style['menu-list-booring']}`}>
              <li>
                <Link href="/legal/privacy">{t('privacy policy')}</Link>
              </li>
            </ul>

            <ul className={`list-plain ${style['menu-list-languages']}`}>
              <li>
                <Link href={pathname} locale="no">
                  <div>Norsk</div>
                </Link>
              </li>
              <li>
                <Link href={pathname} locale="en">
                  <div>English</div>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </menu>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
