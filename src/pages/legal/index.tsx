import Link from 'next/link';

export default function Legal(): JSX.Element {
  return (
    <>
      <section className={`section section-legal`}>
        <header className="section-hero">
          <div className="section-content section-content-narrow">
            <h1>Juridisk informasjon fra KodeWorks</h1>
            <p>Her finner du juridisk informasjon og ressurser.</p>
          </div>
        </header>

        <div className="section-content section-content-narrow">
          <h2>Personvernerklæring</h2>
          <p>
            KodeWorks AS vil i forbindelse med vår virksomhet behandle personopplysninger. Vår
            personvernerklæring beskriver hvordan vi innhenter og behandler informasjon, og hvordan
            du kan forholde deg til det.
          </p>
          <p>
            <Link href="/legal/privacy">
              <a>Les KodeWorks&apos; Personvernerklæring</a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
