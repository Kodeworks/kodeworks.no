export default function Nyutdannede(): JSX.Element {
  return (
    <>
      <header className="section-hero section-content section-content-narrow container">
        <div className={`career-mainheader`}>
          <h1>Erfarne Utviklere</h1>
          <span>i Oslo eller Trondheim</span>
        </div>
      </header>
      <section className="seciton section-content section-content-narrow container">
        <article className="article">
          <p>
            Vi søker erfarne utviklere til å ta del i prosjektene våre, både i Oslo og Trondheim.
          </p>
        </article>

        <article className="article">
          <h3>Hva gjør vi, og hva ser vi etter?</h3>

          <p>
            Prosjektene endrer seg stadig, og dine tanker og ønsker er med på å styre hvilke
            prosjekter vi jobber med. Som erfaren utvikler i KodeWorks er du med på å utforme både
            kundeprosjekter og interne prosjekter. Nedenfor finner du lister med noen teknologier
            som er sentralt på prosjektene våre i dag. Ingen kan alt, men kanskje du kjenner deg
            igjen i flere av dem?
          </p>

          <ul>
            <li>
              HTML, CSS, JavaScript og TypeScript (av alle slag, om det er React eller Angular eller
              TailwindCSS, eller noe annet)
            </li>
            <li>C og C++</li>
            <li>Mobil (Swift og Java/Kotlin)</li>
            <li>Skytjenester (Vercel, Heroku, AWS, Azure, GCP mm.)</li>
            <li>Plattform og infrastruktur (Kubernetes og Docker)</li>
            <li>CI/CD (GitLab CI, GitHub Action, Jenkins, CircleCI mm.)</li>
          </ul>

          <p>Noen av våre prosjekter har også sterkt fokus på</p>

          <ul>
            <li>Linux kernel-moduler</li>
            <li>MQTT og SNMP</li>
            <li>Visuelle fremstillinger (Unity og Unreal)</li>
            <li>Qt (i mobilapplikasjoner og desktop)</li>
          </ul>

          <p>Fant du ikke noen av dine teknologiske interesser? Ta kontakt med oss likevel!</p>
        </article>

        <article className="article">
          <h3>Send søknad</h3>
          <p>
            Send søknadstekst med CV til{' '}
            <strong>
              <a href="mailto:jobb@kodeworks.no">jobb@kodeworks.no</a>
            </strong>
            .
          </p>
        </article>
      </section>
    </>
  );
}
