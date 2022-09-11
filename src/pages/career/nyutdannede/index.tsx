import style from '../career.module.css';

export default function Nyutdannede(): JSX.Element {
  return (
    <>
      <header className="section-hero section-content section-content-narrow container">
        <div className={`${style['career-mainheader']}`}>
          <h1>Nyutdannede Utviklere</h1>
          <span>i Oslo eller Trondheim</span>
        </div>
      </header>
      <section className="section section-content section-content-narrow container">
        <article className="article">
          <p>Vi søker nyutdannede utviklere til våre kontorer i Oslo og Trondheim.</p>
        </article>
        <article className="article">
          <h3>Send søknad</h3>
          <p>
            Send søknadstekst med CV og karakterutskrift til{' '}
            <strong>
              <a href="mailto:jobb@kodeworks.no">jobb@kodeworks.no</a>
            </strong>
            .
          </p>
        </article>

        <article className="article">
          <h3>Vår ansettelsesprosess:</h3>

          <ul>
            <li>Du kommer over vår jobbannonse.</li>
            <li>Du leser annonsen.</li>
            <li>Annonsen pirrer interessen din, og du vil vite mer.</li>
            <li>Du forteller oss at du er interessert.</li>
            <li>Vi svarer deg og sier; “Wow, du er magisk, la oss ta en prat!”</li>
            <li>
              Vi inviterer deg til en samtale for å bli kjent med oss, og du får bekreftet/avkreftet
              alt vi skryter av på hjemmesiden
            </li>
            <li>Du blir overbevist at Kodeworks er den riktige plassen å jobbe</li>
            <li>
              Vi gratulerer deg med jobb, du er superhappy over å ha tatt den beste beslutningen i
              ditt liv, og eventyret kan starte!
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
