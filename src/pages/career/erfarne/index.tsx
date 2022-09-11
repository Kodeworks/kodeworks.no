import style from '../career.module.css';

export default function Nyutdannede(): JSX.Element {
  return (
    <>
      <header className="section-hero section-content section-content-narrow container">
        <div className={`${style['career-mainheader']}`}>
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
            prosjekter vi jobber med. Som erfaren utvikler i Kodeworks er du med på å utforme både
            kundeprosjekter og interne prosjekter. Nedenfor finner du lister med noen teknologier
            som er sentralt på prosjektene våre i dag. Ingen kan alt, men kanskje du kjenner deg
            igjen i flere av dem?
          </p>

          <ul>
            <li>
              JavaScript og TypeScript (av alle slag, om det er React eller Angular, eller noe
              annet)
            </li>
            <li>HTML og CSS</li>
            <li>C og C++</li>
            <li>Mobil (Swift og Java/Kotlin)</li>
            <li>Skytjenester (AWS, Azure, GCP og Vercel mm.)</li>
            <li>Plattform og infrastruktur (Kubernetes og Docker)</li>
            <li>CI/CD (GitLab CI, GitHub Action, Jenkins og Circle mm.)</li>
          </ul>

          <p>Noen av våre prosjekter har også sterkt fokus på</p>

          <ul>
            <li>Linux kernel-moduler</li>
            <li>MQTT og SNMP</li>
            <li>Visuelle fremstillinger (Unity og Unreal)</li>
          </ul>
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
