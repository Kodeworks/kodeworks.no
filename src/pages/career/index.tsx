import Link from 'next/link';
import { ReactElement } from 'react';

import Calculator from '../../components/Calculator';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../_app';
import { usePageTitle } from '../../utils/usePageTitle';

const Jobb: NextPageWithLayout = () => {
  usePageTitle('Career');

  return (
    <>
      <header className="section-hero section-content section-content-narrow container">
        <div className={`career-mainheader`}>
          <h1>
            Jobbe
            <br />i KodeWorks?
          </h1>

          <div className={`career-mainheader-content`}>
            <img src="/static/photos/EOSR7759.jpg" width="320" height="240" alt="" />
            <div className={`career-mainheader-content-text`}>
              <p>
                Er du nyutdannet? I jobb? I KodeWorks ser vi etter deg som brenner for faget, er
                nysgjerrig, og har lyst til å gjøre en forskjell!
              </p>
              <p>
                Vi tror på det å ha en åpen kultur. Skulle det være salgsarbeid, bestemmelser eller
                lønn. Alle våre betingelser, rutiner og tanker om hvordan ting i KodeWorks fungerer
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

      <section className={`section career-calculator-section`}>
        <div className={`section-content section-content-narrow container`}>
          <Calculator />
        </div>
      </section>

      <section
        className={`section section-content section-content-narrow career-section contar`}
        id="ledige-stillinger"
      >
        <h2>Ledige stillinger</h2>
        <div className={`career-opportunity`}>
          <Link href="/career/nyutdannede">
            <a>
              <h4>Nyutdannede utviklere</h4>
            </a>
          </Link>
          <span>Oslo eller Trondheim</span>
        </div>
        <div className={`career-opportunity`}>
          <Link href="/career/erfarne">
            <a>
              <h4>Erfarne utviklere</h4>
            </a>
          </Link>
          <span>Oslo eller Trondheim</span>
        </div>
      </section>

      <section className={`section career-footer`}>
        <div className={`section-content section-content-narrow container career-footer-content`}>
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
              <span className={`career-footer-position`}>Daglig leder i Trondheim</span>
            </p>
            <p className={`career-footer-position`}>
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
