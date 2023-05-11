import Link from 'next/link';
import { ReactElement, useState } from 'react';

import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../_app';
import { usePageTitle } from '../../utils/usePageTitle';
import CareerContext from '../../context/careerContext';
import AboutPerson from '../../components/CareerComponents/AboutPerson';
import Salayr from '../../components/CareerComponents/Salary';
import Retirement from '../../components/CareerComponents/Retirement';
import Total from '../../components/CareerComponents/Total';
import Benefits from '../../components/CareerComponents/Benefits';

const Jobb: NextPageWithLayout = () => {
  usePageTitle('Career');

  const [mastersDegree, setMastersDegree] = useState(false)
  const [seniority, setSeniority] = useState(0)
  const [salary, setSalary] = useState(596345)

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
                finner du i <Link href="staffmanual">personalhåndboka</Link> vår.
              </p>
              <p>Vi ser etter både nyutdannende og erfarne utviklere i Oslo og Trondheim.</p>
              <div className={`career-opportunity`}>
                <Link href="/career/nyutdannede">
                  <h4>Nyutdannede utviklere</h4>
                </Link>
                <Link href="/career/erfarne">
                  <h4>Erfarne utviklere</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <CareerContext.Provider value={{ mastersDegree, setMastersDegree, seniority, setSeniority, salary, setSalary }}>
        <section className={`section`}>
            <div className={`section-content section-content-narrow container about-section`}>
              <Total/>
            </div>
        </section>
        
        <section className={`section about-section`}>
            <div className={`section-content section-content-narrow container about-section`}>
              <AboutPerson/>
            </div>
        </section>
        
        <section className={`section career-section`}>
          <div className={`section-content section-content-narrow container`}>
            <Salayr />
          </div>
        </section>
        <section className={`section career-section`}>
          <div className={`section-content section-content-narrow container`}>
            <Retirement />
          </div>
        </section>
        </CareerContext.Provider>
      </div>

      <section className={`section career-calculator-section`}>
        <div className={`section-content section-content-narrow container`}>
          <h2>Ansattgoder</h2>
          <br />
          <Benefits/>

          {/* <h3>Innkjøp</h3>
          <p>I Kodeworks har de ansatte sitt eget ansattbudsjett med ett beløp man får hvert år, som man enten kan bruke eller spare opp til ett visst beløp</p>
          <div className={`employee-benefits`}>
            <BudgetPost total={15000} yearly={5000} title='Telefon'/>
            <BudgetPost total={48000} yearly={12000} title='Laptop'/>
            <BudgetPost total={30000} yearly={15000} title='Diverse utstyr'/>
            <BudgetPost total={30000} yearly={15000} title='Kurs og konferanser'/>
          </div>
          <br />          

          <h3>Andre goder</h3>
          <ul>
            <li>Mobilabonnement - Inntil 500 / mnd </li>
            <li>Treningsabonnement - Inntil 500 / mnd</li>
            <li>Bredbånd - Inntil 500 / mnd</li>
            <li>Yrkesreise- og yrkesskadeforsikring</li>
            <li>Reiseforsikring for fritidsreiser som dekker deg og din nærmeste familie</li>
            <li>Dekker mellomlegget fra hva NAV betaler under foreldrepermisjon og sykefravær</li>
            <li>2 ukers betalt permisjon ved fødsel.</li>
          </ul> */}

        </div>


      </section>

      {/* <section
        className={`section section-content section-content-narrow career-section contar`}
        id="ledige-stillinger"
      >
        <h2>Ledige stillinger</h2>
        <div className={`career-opportunity`}>
          <Link href="/career/nyutdannede">
            <h4>Nyutdannede utviklere</h4>
          </Link>
          <span>Oslo eller Trondheim</span>
        </div>
        <div className={`career-opportunity`}>
          <Link href="/career/erfarne">
            <h4>Erfarne utviklere</h4>
          </Link>
          <span>Oslo eller Trondheim</span>
        </div>
      </section> */}

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
