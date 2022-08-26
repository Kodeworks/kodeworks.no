import Link from 'next/link';
import Calculator from './Calculator';

import style from './career.module.css';

export default function Jobb(): JSX.Element {
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
                finner i{' '}
                <Link href="staffmanual">
                  <a>personalhådboka</a>
                </Link>{' '}
                vår.
              </p>
              <p>
                Ta gjerne kontakt for en prat. Du kan nå oss på <strong>jobb@kodeworks.no</strong>.
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

      <section className={`section section-content section-content-narrow`}></section>
    </>
  );
}
