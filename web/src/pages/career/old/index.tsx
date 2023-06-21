import Link from 'next/link';
import { ReactElement } from 'react';

// import Calculator from '../../components/Calculator';
import Layout from '../../../components/Layout';
import { NextPageWithLayout } from '../../_app';
import { usePageTitle } from '../../../utils/usePageTitle';
import { getJobDescriptions } from '../../../lib/sanity';
import { JobDescription } from '../../../types';

interface Props {
  jobs: Array<JobDescription>;
}

const CareerPage: NextPageWithLayout = ({ jobs }: Props) => {
  usePageTitle('Career');

  return (
    <main>
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
                finner du i <Link href="staffmanual">personalhåndboka</Link> vår.
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
          {/* <Calculator /> */}
        </div>
      </section>

      <section
        className={`section section-content section-content-narrow career-section`}
        id="ledige-stillinger"
      >
        <h2>Ledige stillinger</h2>
        {jobs.map((job) => (
          <div key={job.slug.current} className={`career-opportunity`}>
            <Link href={`/career/${job.slug.current}`}>
              <h4>{job.title}</h4>
            </Link>
            <span>{job.label}</span>
          </div>
        ))}
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
    </main>
  );
};

CareerPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout socialProps={{ title: 'Career', image: '/static/photos/EOSR7759.jpg' }}>{page}</Layout>
  );
};

export async function getServerSideProps() {
  const jobs = await getJobDescriptions();

  return {
    props: { jobs },
  };
}

export default CareerPage;
