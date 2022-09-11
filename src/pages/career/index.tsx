import Link from 'next/link';
import { ReactElement } from 'react';

import Calculator from './Calculator';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../_app';
import { usePageTitle } from '../../utils/usePageTitle';

import style from './career.module.css';

const Jobb: NextPageWithLayout = () => {
  usePageTitle('Career');

  return (
    <>
      <header className="section-hero section-content section-content-narrow container">
        <div className={`${style['career-mainheader']}`}>
          <h1>
            Jobbe
            <br />i Kodeworks?
          </h1>

          <div className={`${style['career-mainheader-content']}`}>
            <img src="/static/photos/EOSR7759.jpg" width="320" height="240" alt="" />
            <div className={`${style['career-mainheader-content-text']}`}>
              <p>
                Er du nyutdannet? I jobb? I Kodeworks ser vi etter deg som brenner for faget, er
                nysgjerrig, og har lyst til å gjøre en forskjell!
              </p>
              <p>
                Vi tror på det å ha en åpen kultur. Skulle det være salgsarbeid, bestemmelser eller
                lønn. Alle våre betingelser, rutiner og tanker om hvordan ting i Kodeworks fungerer
                finner du i{' '}
                <Link href="staffmanual">
                  <a>personalhåndboka</a>
                </Link>{' '}
                vår.
              </p>
              <p>Vi ser etter både erfarne og nyutdannende utviklere i Oslo og Trondheim.</p>
              <p>
                <a className="btn btn-black" href="#ledige-stillinger">
                  Se Ledige Stillinger
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className={`section ${style['career-calculator-section']}`}>
        <div className={`section-content section-content-narrow container`}>
          <Calculator />
        </div>
      </section>

      <section
        className={`section section-content section-content-narrow ${style['career-section']} container`}
        id="ledige-stillinger"
      >
        <h2>Ledige stillinger</h2>
        <div className={`${style['career-opportunity']}`}>
          <Link href="/career/nyutdannede">
            <a>
              <h4>Nyutdannede utviklere</h4>
            </a>
          </Link>
          <span>Oslo eller Trondheim</span>
        </div>
        <div className={style['career-opportunity']}>
          <Link href="/career/erfarne">
            <a>
              <h4>Erfarne utviklere</h4>
            </a>
          </Link>
          <span>Oslo eller Trondheim</span>
        </div>
      </section>

      <section className={`section ${style['career-footer']}`}>
        <div
          className={`section-content section-content-narrow container ${style['career-footer-content']}`}
        >
          <img
            src="/static/photos/people/lasse.jpg"
            alt="Lasse Holanger"
            width="100"
            height="200"
          />
          <div>
            <h2>Kontakt</h2>
            <p>Har du spørsmål om hvordan det er å jobbe i KodeWorks?</p>
            <p>
              Lasse Holanger,{' '}
              <span className={`${style['career-footer-position']}`}>Daglig leder i Trondheim</span>
            </p>
            <p className={`${style['career-footer-position']}`}>
              405 45 500
              <br />
              <a href="mailto:lasse.holanger@kodeworks.no">lasse.holanger@kodeworks.no</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

Jobb.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout socialProps={{ title: 'Career', image: '/static/photos/EOSR7759.jpg' }}>{page}</Layout>
  );
};

export default Jobb;
