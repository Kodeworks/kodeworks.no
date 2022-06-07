export default function Privacy(): JSX.Element {
  return (
    <div className="privacy">
      <section className={`section section-hero section-text-center`}>
        <div className={`section-content`}>
          <h1>Personvernerklæring for Kodeworks AS</h1>
          <h3>Sist endret 14. mars 2022</h3>
          <p>Kodeworks AS vil i forbindelse med vår virksomhet behandle personopplysninger.</p>
          <p>
            Informasjon om vår behandling av personopplysninger er nærmere beskrevet i denne
            personvernerklæringen.
          </p>

          <p>
            <a href="/legal/privacy/pdf/kodeworks-personvernerklaering-ekstern.pdf">
              Last ned en kopi av Personvernerklæringen(PDF)
            </a>
            .
          </p>
        </div>
      </section>
      <section className={`section`}>
        <ul className="list-plain privacy-list">
          <li>
            <h2>Ansvarlig for behandling av personopplysninger</h2>
            <p>
              Kodeworks AS er behandlingsansvarlig, dvs. bestemmer hvorfor og hvordan
              personopplysningene som omtalt i denne personvernerklæringen skal behandles.
            </p>
            <p>Kontaktopplysninger for behandlingsansvarlig:</p>
            <ul>
              <li>Kodeworks AS v/ Eirik Larsen </li>
              <li>Organisasjonsnr.: 820 478 452</li>
              <li>E-post: eirik.larsen@kodeworks.no</li>
            </ul>
          </li>
          <li>
            <h2>Hvem vi behandler personopplysninger om </h2>
            <p>Kodeworks AS behandler personopplysninger om: </p>
            <ul className={`list-alphabet`}>
              <li>Kontaktpersoner hos kunder</li>
              <li>Kontaktpersoner hos våre leverandører og samarbeidspartnere </li>
            </ul>
          </li>
          <li>
            <h2>Formål, type personopplysning og rettslig grunnlag</h2>
            <p>
              Nedenfor følger en oversikt over hvilke formål vi behandler personopplysninger for,
              hvilke type personopplysninger vi behandler og det rettslige grunnlaget for
              behandlingen.
            </p>

            <p>Vi samler inn følgende personopplysninger til formålene angitt her:</p>
            <ul>
              <li>
                For å inngå og administrere avtaler med våre kunder, leverandører eller
                samarbeidspartnere, håndtere faktura og for øvrig ha korrespondanse med kunden,
                samarbeidspartneren og leverandøren. Personopplysninger som behandles er navn,
                telefonnummer, e-postadresse, yrkestittel, rolle og øvrig informasjon som fremgår i
                korrespondansen med den registrerte. Behandlingen av personopplysninger skjer for at
                vi skal kunne oppfylle våre avtaler, eller for å gjennomføre tiltak på den
                registrerte sin anmodning før en avtaleinngåelse (se GDPR art. 6 (1) b).
              </li>
              <li>
                For å besvare henvendelser som kommer inn til oss. Personopplysninger som behandles
                kan bla. være navn, telefonnummer, e-postadresse og eventuelle personopplysninger
                som måtte følge av henvendelsen. Behandlingen av personopplysninger skjer på
                grunnlag av en interesseavveining (se GDPR art. 6 (1) f). Vi har vurdert det slik at
                dette ofte er nødvendig for å hjelpe deg med det du lurer på.
              </li>
            </ul>
          </li>
          <li>
            <h2>Hvem vi deler personopplysninger med</h2>
            <p>
              Vi gir ikke personopplysningene dine videre til andre med mindre det foreligger et
              lovlig grunnlag for slik utlevering. Eksempler på slikt grunnlag vil typisk være en
              avtale med deg eller et lovgrunnlag som pålegger oss å gi ut informasjonen.
            </p>
            <p>
              Vi bruker databehandlere til å samle inn, lagre eller på annen måte behandle
              personopplysninger på våre vegne. I slike tilfeller har vi inngått avtaler for å
              ivareta informasjonssikkerheten i alle ledd av behandlingen. Vi benytter oss av
              følgende databehandlere per i dag:
            </p>
            <ul>
              <li>Tripletex (regnskapsprogram)</li>
            </ul>
          </li>
          <li>
            <h2>Lagring av personopplysninger</h2>
            <p>
              Vi lagrer dine personopplysninger hos oss så lenge det er nødvendig for det formål
              personopplysningene ble samlet inn for.
            </p>
            <p>
              Personopplysninger vi behandler for å oppfylle en avtale med deg slettes når avtalen
              er oppfylt og alle plikter som følger av avtaleforholdet er oppfylt.
            </p>
          </li>
          <li>
            <h2>Dine rettigheter</h2>
            <p>
              Du har rett til å kreve innsyn i, retting eller sletting av personopplysningene vi
              behandler om deg. Du har videre rett til å kreve begrenset behandling, rette
              innsigelse mot behandlingen og kreve rett til dataportabilitet. Du kan lese mer om
              innholdet i disse rettighetene på Datatilsynets nettside:{' '}
              <a href="https://www.datatilsynet.no">www.datatilsynet.no</a>.
            </p>

            <p>
              For å ta i bruk dine rettigheter må du sende din henvendelse til Kodeworks AS v/ Eirik
              Larsen. Vi vil svare på din henvendelse til oss så fort som mulig, og senest innen 30
              dager.
            </p>
          </li>
          <li>
            <h2>Klager</h2>
            <p>
              Opplever du at vår behandling av personopplysninger ikke er i overensstemmelse med det
              vi har beskrevet her eller at vi på andre måter bryter personvernlovgivningen, kan du
              klage til Datatilsynet.
            </p>
            <p>
              Du finner informasjon om dine rettigheter og hvordan kontakte Datatilsynet på
              Datatilsynets nettsider: <a href="https://www.datatilsynet.no">www.datatilsynet.no</a>
              .
            </p>
          </li>
          <li>
            <h2>Endringer</h2>
            <p>
              Hvis det skulle skje endring av våre tjenester eller endringer i regelverket om
              behandling av personopplysninger, kan det medføre endringer i denne
              personvernerklæringen. Du vil alltid finne siste versjon på vår nettside.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
