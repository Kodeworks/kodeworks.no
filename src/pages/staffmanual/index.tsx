import Link from 'next/link';
import { useClipContent } from '../../context/ClipContentContext';

export default function StaffManual(): JSX.Element {
  useClipContent(false);

  return (
    <>
      <header className="handbook-mainheader">
        <div className="section-content section-content-narrow handbook-mainheader-content">
          <h1 className="section-header-headline">Personalhåndboka</h1>
          <p>
            Velkommen til håndboken vår! Vi ønsker i dette dokumentet å beskrive hvordan vi tenker
            og hvordan vi gjør ting i praksis. Her vil du finne informasjon om alt fra arbeidstid,
            lønn, utstyr, goder, prosesser og mye mer. Dette er et dokument vi ønsker at alle våre
            ansatte skal bidra til og føle eierskap til.
          </p>
        </div>
      </header>

      <section className="section-content section-content-narrow handbook-wrapper">
        <nav className="handbook-sidebar">
          <h4>Generelt</h4>
          <ul className="list-plain handbook-sidebar-list">
            <li>
              <a href="#handbok-arbeidstid">Arbeidstid</a>
            </li>
            <li>
              <a href="#handbok-arbeidssted">Arbeidssted</a>
            </li>
            <li>
              <a href="#handbok-betingelser">Vilkår</a>
            </li>
            <li>
              <a href="#handbok-timeforing">Timeføring</a>
            </li>
            <li>
              <a href="#handbok-medeier">Medeier</a>
            </li>
            <li>
              <a href="#handbok-other">Alt annet + Kontoret</a>
            </li>
            <li>
              <a href="#handbok-militaer">Militærtjeneste</a>
            </li>
            <li>
              <a href="#handbok-kommunikasjon">Slack og E-post</a>
            </li>
          </ul>

          <h4>Ansettelse</h4>
          <ul className="list-plain handbook-sidebar-list">
            <li>
              <a href="#handbok-employment">Ansettelse</a>
            </li>
            <li>
              <a href="#handbok-process-and-onboarding">Prosess og onboarding</a>
            </li>
            <li>
              <a href="#handbok-probation">Prøvetid</a>
            </li>
            <li>
              <a href="#handbok-job-types">Stillingstyper og roller</a>
            </li>
            <li>
              <a href="#handbok-expectations">Forventninger</a>
            </li>
            <li>
              <a href="#handbok-one-on-ones">Medarbeidersamtaler og fagsamtaler</a>
            </li>
            <li>
              <a href="#handbok-resignation">Oppsigelse</a>
            </li>
          </ul>
        </nav>

        <section className="handbook-content">
          <article id="handbok-arbeidstid">
            <h2>Arbeidstid</h2>

            <p>
              Arbeidstid er 8 timer per dag, med en 30 minutters lunsjpause. I KodeWorks opererer vi
              med en kjernetid mellom 9-15, med mulighet og rom til å kunne være fleksibel under
              arbeidstiden. I et selskap der mennesker med kompetanse er hovedproduktet, vet vi at å
              jobbe tett med kollegaene våre gir det beste resultatet. Vi vet og at hverdagslivet
              kan by på utfordringer der man av og til må tilpasse arbeidstiden litt utenom
              kjernetiden.
            </p>
            <p>
              Som konsulenter må vi uansett ta høyde for at kundene våre har sin egen kjernetid, og
              eventuelle endringer vil kunne forekomme. Det viktigste er at man avklarer eventuelle
              endringer med prosjektet man er på.
            </p>

            <h4>Ferie</h4>

            <p>Vi har vanlig 5-ukers betalt ferie.</p>
            <p>
              Det er ofte tilfellet at prosjektet man er på ønsker at man tar ut ferie i enkelte
              tidsrom, som for eksempel fellesferien, påske, julen, høst-/vinterferie som overlapper
              med skole og barnehage osv. Vi prøver å tilpasse oss dette, men forstår at det ikke
              alltid er mulig.
            </p>
            <p>Når du ønsker å ta ferie, følger du bare denne sjekklisten:</p>

            <ol>
              <li>Si i fra til din nærmeste leder</li>
              <li>Snakk med kunden/prosjektet og få det godkjent</li>
              <li>Putt det i kalenderen</li>
              <li>Før det inn i timeføringssystemet</li>
            </ol>

            <p>
              Vi følger arbeidsmiljølovens og Tekna sin definisjon av høytider. Det vil si at
              julaften og nyttårsaften anses som vanlige arbeidsdager.
            </p>
          </article>

          <article id="handbok-arbeidssted">
            <h2>Arbeidssted</h2>

            <p>
              Som konsulent hender det ofte at man vil arbeide fra kundens lokaler. Vi ønsker i
              hovedsak å finne oppdrag som ikke er for langt fra våre egne kontorer.
            </p>
            <p>
              KodeWorks vil dekke eventuelle reiseutgifter for oppdrag som påløper ytterligere
              kostnader og betydelig lengre reisevei enn det normalt ville vært til et av våre
              kontorer.
            </p>
            <p>
              For eksempel vil det bety for oppdrag som faller utenfor Sone A i Trondheim eller Sone
              1 i Oslo.
            </p>
          </article>

          <article id="handbok-betingelser">
            <h2>Vilkår</h2>

            <p>
              Vi ønsker at alle våre ansatte skal ha det godt på jobb, gjennom å tilby den
              nødvendige friheten, tryggheten og stabiliteten i hverdagen. Samtidig er det også
              viktig å tilrettelegge med de nødvendige verktøyene for at du skal kunne gjøre jobben
              på best mulig måte.
            </p>

            <h4>Lønn</h4>

            <p>
              I KodeWorks har vi som mål at lønn ikke skal være noe du trenger å bekymre deg for. Vi
              har derfor ingen individuelle lønnsjusteringer der man må forhandle seg frem til bedre
              vilkår. Som ansatt skal du ikke behøve å be om å få det du fortjener. Det skal komme
              automatisk. Vi har derfor valgt en lønnsmodell som gir alle våre ansatte lik lønn for
              likt grunnlag, som baseres på den ansattes erfaring, i hovedsak antall års erfaring.
              Alle KodeWorks-ansatte har innsikt i hva andre i selskapet tjener. En oversikt over
              lønnstabellen for inneværende og tidligere år finnes under “Lønn” i fellesmappen på
              Google Drive.
            </p>
            <p>
              Lønn skal som hovedregel utbetales innen den 22. hver måned, eller siste virkedag før
              22. dersom det ikke er en vanlig virkedag.
            </p>
            <p>
              Nysgjerrig på hva du kan tjene? Sjekk ut{' '}
              <Link href="/career">
                <a>kalkulatoren vår</a>
              </Link>
              .
            </p>

            <h4>Lønnstrinn og lønnsjustering</h4>

            <p>
              KodeWorks har en felles lønnsmodell som gir forutsigbarhet og trygghet for de ansatte.
              Når man får et jobbtilbud fra KodeWorks vil man få presentert en årlig fastlønn som er
              gjeldende ved oppstartsdato. Lønnsnivået bestemmes ut i fra lønnstrinnet ditt i
              inneværende års lønnstabell.
            </p>
            <p>
              Lønnstabellen består av 21 trinn, fra lønnstrinn 0 til og med lønnstrinn 20.
              Lønnstabellen justeres ved årsskiftet hvert år, og beregnes ut i fra siste års
              lønnsutvikling basert på Tekna IKT Privat Sektor. Nyutdannede uten relevant mastergrad
              starter på lønnstrinn 0, og med relevant mastergrad på lønnstrinn 1. Den til enhver
              tid gjeldende lønnstabellen finner du i fellesmappen på Google Drive innunder “Lønn”.
            </p>
            <p>
              Lønnstrinnet ditt fastsettes basert på det totale antallet måneder fulltids relevant
              arbeidserfaring, i tillegg til ansiennitet opparbeidet i KodeWorks. Lønnstrinnet ditt
              heves med ett trinn hvert hele år med arbeidserfaring du opparbeider deg. Dette
              medfører at du i tillegg kan oppleve en lønnsjustering også utenfor den felles
              lønnsjusteringen som skjer i januar. Du vil få fastsatt hvilken måned dette faller på
              ved oppstart, og det vil være den samme måneden for resten av arbeidsforholdet.
            </p>

            <h4>Feriepenger</h4>

            <p>
              Feriepenger utbetales i juni. Alle 25 feriedagene vil bli trukket denne måneden. Juni
              har vanligvis ikke 25 arbeidsdager, så de resterende feriedagene blir trukket fra de
              utbetalte feriepengene. Ansatte som har startet i inneværende år vil ikke ha noen
              oppsparte feriepenger, så da vil de resterende dagene bli trukket fra neste
              månedslønn. Dersom man ønsker en alternativ utbetaling av feriepenger, kan dette
              tilrettelegges av regnskapsavdelingen ved behov. Av praktiske årsaker er det lurt å
              informere om dette i god tid før utbetalingen skal skje.
            </p>

            <h4>Overtid og overtidslønn</h4>

            <p>
              Fra tid til annen kan det hende at man må jobbe noen timer ekstra i uken. Dette
              sammenfaller ofte med hektiske perioder på kundeprosjekt. Utover dette, ønsker vi å
              holde overtid til et absolutt minimum. Vi setter den ansattes fritid høyt, og ønsker
              at denne respekteres. Vi tror og at man arbeider mer effektivt dersom man får
              tilstrekkelig hvile. Derfor bestemmer du selv om du ønsker å jobbe overtid.
            </p>
            <p>
              Overtidsbetaling beregnes time for time, og kan regnes ut ved å dele brutto årslønn på
              1950 timer og legge på 40%.
            </p>
            <p>
              Forespørsler om overtid skal alltid godkjennes av nærmeste leder først, med mindre
              annet er avklart på forhånd.
            </p>

            <h4>Pensjon og forsikring</h4>

            <p>
              KodeWorks setter av 7% til pensjonssparing. Dette gjelder allerede fra 0G og opp til
              12G, der G er folketrygdens grunnbeløp.
            </p>
            <p>
              I tillegg til vanlig yrkesreise- og yrkesskadeforsikring, har vi og reiseforsikring
              for fritidsreiser som dekker deg og din nærmeste familie. Vi har og
              behandlingsforsikring som sikrer at du får rask og god behandling dersom noe skulle
              oppstå. Dette inkluderer gratis tilgang til legekonsultasjoner på mobil.
            </p>
            <p>
              Vi benytter Gjensidige for både pensjon og forsikring, slik at alle ansatte kan logge
              inn i Gjensidige og se forsikringsvilkår og justere risikoplan for pensjonssparing. En
              guide for hvordan man skaffer seg oversikt over forsikringer i Gjensidige finner man
              under “Forsikringer” i fellesmappen på Google Drive.
            </p>

            <h4>Datamaskin og programvare</h4>

            <p>
              Vi dekker arbeidsmaskin og programvare du behøver for å gjøre jobben din. Hva du
              velger er opp til deg. Vi sitter på alt fra gamingmaskiner til Dell XPS og MacBook
              Pro. Dersom maskinen din på et tidspunkt begynner å bli for dårlig til at du kan gjøre
              jobben effektivt er det på tide med en ny.
            </p>
            <p>
              Dersom du trenger tilrettelagt programvare for å gjøre jobben din så skal du få dette.
              Husk å sjekke med nærmeste leder om vi har en gruppeavtale på det du trenger før du 
              bestiller, hvis ikke bare bestiller du selv og fører utlegg for dette.
            </p>

            <h4>Litteratur og læringsmateriale</h4>

            <p>
              Det finnes endeløse ressurser for å slukke læringstørsten. Hvis du ønsker å benytte
              e-læringsverktøy som Pluralsight, Coursera eller lignende, er det bare å registrere
              seg for dette. Du står også fritt til å bestille bøker i alle former og formater. Vi
              er et kunnskapsbasert selskap, så det er en viktig del av levebrødet vårt! Registrer
              utgiften i regnskapssystemet, så vil du få det tilbakeført.
            </p>

            <h4>Kurs og konferanse</h4>

            <p>
              KodeWorks oppfordrer deg til å delta på kurs og konferanser. Tidligere har vi alle
              dratt samlet på for eksempel JavaZone, men det er forventet at de ansattes interesser
              og preferanser for faglig forfriskning kan tilfredsstille best på andre steder også.
              Dersom du ønsker å delta på kurs eller konferanser flere ganger i året kan du gjerne
              det, såfremt du holder deg innenfor ditt tilegnede kurs- og konferansebudsjett.
            </p>
            <p>
              Dersom du bidrar til fellesskapet gjennom å holde kurs, foredrag og liknende vil
              KodeWorks også dekke utgifter til dette innen rimelighetens grenser.
            </p>

            <h4>Helse</h4>

            <p>
              Vår yrkesgruppe er utsatt for belastningsskader knyttet til å sitte for mye i ro foran
              datamaskinen. Dette kan motvirkes gjennom å tilrettelegge for et godt fysisk
              arbeidsmiljø. Dersom du arbeider fra kundes kontor, og ikke finner at for eksempel
              bord, stol eller skjerm ikke er tilfredsstillende, vil vi ta tak i dette. Det skal
              ikke ikke gå utover helsen.
            </p>
            <p>
              Vi legger også til rette for at du skal kunne være fysisk aktiv. I Trondheim har vi en
              bedriftsavtale med 3T. Her har flere KodeWorks-ansatte for eksempel ukentlig
              Squash-trening. Du trenger ikke benytte deg av dette dersom det er mer praktisk for
              deg å trene andre steder. Vi dekker et tilsvarende beløp med andre tilbydere i
              tillegg. I Oslo er det ingen spesiell bedriftsavtale, så her står man fritt til å
              velge treningssenter, så vil man få dekket et beløp i henhold til ansattbudsjettet.
            </p>

            <h4>Sykedager</h4>

            <p>
              Vi har et utvidet egenmeldingssystem, som er mer fleksibelt enn det normale systemet i
              Norge (4x3 dager hver 12. måned). Egenmeldingsdager kan tas ut individuelt, for å gi
              deg som ansatt mer fleksibilitet for kort tids sykdom uten å måtte kontakte lege.
            </p>

            <ul>
              <li>
                Du har 12 enkeltvis egenmeldingsdager du kan bruke én og én eller etter hverandre.
                Vi bruker et 12-måneders glidende vindu for å holde dette ajour. Dette betyr at vi
                ser 12 måneder tilbake i tid for å se hvor mange egenmeldingsdager du har
                tilgjengelig.
              </li>
              <li>
                Meld fra til nærmeste leder hvis du må ta en sykedag. Husk også å melde i fra til
                kunden eller prosjektledelsen så snart som mulig.
              </li>
              <li>
                Dersom du blir syk underveis i arbeidsdagen, vil du kunne benytte velferdspermisjon
                til dette. Dette vil ikke telle som en sykedag. Dette er en ekstra fleksibilitet til
                deg som ansatt i KodeWorks.
              </li>
              <li>
                Sykemelding fra lege kreves dersom du er syk i mer enn 3 sammenhengende dager. Du
                kan få dette fra fastlegen din, eller annet kvalifisert helsepersonell som kan
                utstede sykemelding.
              </li>
              <li>Sykedager som er brukt før utstedt sykemelding telles som egenmeldingsdager.</li>
              <li>Egenmeldingsdager kan ikke benyttes dersom du har en delvis sykemelding.</li>
              <li>
                Å være hjemme med sykt barn klassifiseres som velferdspermisjon og trekkes ikke fra
                tilgjengelige egenmeldingsdager.
              </li>
              <li>
                Vi har en svært god helseforsikring som dekker mange former for behandling. Mer
                informasjon om hva som dekkes finnes i mappen “Forsikring” på Google Drive.
              </li>
              <li>
                Egenmeldingsdager er ikke det samme som feriedager, så ubrukte egenmeldingsdager vil
                ikke overføres til neste periode.
              </li>
            </ul>

            <h4>Lønn under sykefravær</h4>

            <p>
              NAV dekker lønn for sykefravær når sykemeldingsperioden overstiger 16 dager. NAV
              dekker derimot ikke lønn over 6G (ca 640000 NOK i 2022). For å håndtere dette har vi
              en sykelønnsforsikring som dekker differansen mellom 6G og din lønn, såfremt du
              oppfyller krave NAV har satt for{' '}
              <a href="https://www.nav.no/no/person/arbeid/sykmeldt-arbeidsavklaringspenger-og-yrkesskade/sykepenger/sykepenger-til-arbeidstakere">
                Sykepenger til arbeidstakere
              </a>{' '}
              og vilkårene i forsikringen. Forsikringsvilkårene finnes ved å logge inn hos vårt
              forsikringsselskap. Mer informasjon om dette finner du i mappen “Forsikring” på Google
              Drive.
            </p>

            <h4>Ansattgoder</h4>

            <p>
              KodeWorks har en rekke goder som gjør at du som ansatt kan ha en fleksibel, trygg og
              forutsigbar hverdag. Noen av disse godene må registreres i timeføringssystemet, slik
              som foreldrepermisjon og velferdspermisjon. Eventuelle utlegg man har, for eksempel
              knyttet til ansattbudsjettet, skal registreres i regnskapssystemet og vil utbetales
              ved neste lønning.
            </p>
            <p>
              Periodiske utgifter som bredbånd og treningsmedlemsskap skal registreres månedlig.
              Dersom det er variable kostnader, er det ditt ansvar som ansatt å sørge for at den
              totale kostnaden for inneværende år ikke overstiger maksbeløpet for den aktuelle
              utgiften. Vi vil ikke dekke utgifter som overskrider grensen i ansattbudsjettet.
            </p>

            <ul>
              <li>Mobiltelefon og abonnement</li>
              <li>Bredbånd dekkes inntil 500kr / mnd.</li>
              <li>
                Treningsmedlemsskap dekkes med inntil 500kr / mnd eller gjennom 3T abonnement i
                Trondheim.
              </li>
              <li>
                Andre nødvendige utgifter for å utføre arbeidet, slik som datamaskin, skjerm, mus,
                tastatur og lignende dekkes i henhold til satsene i ansattbudsjettet.
              </li>
              <li>
                Årlig budsjett for kurs-, konferanse og litteratur i henhold til gjeldende satser i
                ansattbudsjettet.
              </li>
              <li>2 ukers betalt permisjon ved fødsel.</li>
              <li>Full lønn under foreldrepermisjon.</li>
            </ul>

            <h4>Velferdspermisjon</h4>

            <p>
              For å hjelpe til med å gjøre både planlagte og uforutsette hendelser i livet litt
              lettere å håndtere, har KodeWorks en rekke velferdspermisjoner i tillegg til det som
              er påkrevd av loven.
            </p>

            <ul>
              <li>Undersøkelse av lege eller tannlege.</li>
              <li>Følge barn til første dag på skole eller barnehage (opp til 1 dag).</li>
              <li>Permisjon resten av dagen dersom man blir syk i løpet av arbeidsdagen.</li>
              <li>Kort permisjon ifm. sykdom i eget hjem.</li>
              <li>Kort permisjon ifm. ektefelles/samboers/partners fødsel.</li>
              <li>Dødsfall og/eller begravelse for nær familie (opp til 5 dager).</li>
              <li>Donering av blod.</li>
              <li>Flyttedag (opp til 1 dag per år).</li>
              <li>Bryllup (opp til 1 dag per år).</li>
              <li>Oppkjøring til førerkort.</li>
            </ul>
          </article>

          <article id="handbok-timeforing">
            <h2>Timeføring</h2>

            <p>
              Timeføring er noe som kreves i de fleste konsulentselskaper, og KodeWorks er intet
              unntak. Derimot har vi, i likhet med mange andre IT-konsulentselskaper, utviklet vårt
              eget timeføringssystem tilpasset oss for å gjøre prosessen enklere.
            </p>
            <p>
              Du skal føre arbeidsrelatert tid, for eksempel fakturerbare timer på ulike prosjekter,
              sykdom, ferie, velferdspermisjon og så videre. Timelisten må være levert innen siste
              virkedag hver måned.
            </p>
            <p>
              En arbeidsdag er definert som 8 timer i timeføringssystemet. Dette betyr at ferie,
              velferdspermisjon og interntid skal føres som 8 timer hver dag. For kundeprosjekter
              vil det i de fleste tilfeller være 7,5 timer som skal faktureres, med mindre
              kontrakten tilsier at vi kan fakturere lunsjpausen i tillegg. Dette vil du bli
              informert om før prosjektoppstart.
            </p>
            <p>
              Du vil også potensielt måtte føre timer i kunden sitt timeføringssystem. Her kan det
              være andre regler som gjelder for når og hvordan det skal føres.
            </p>
          </article>

          <article id="handbok-medeier">
            <h2>Medeier</h2>

            <p>
              Som ansatt kan man også bli medeier i avdelingen man jobber i. Vi tror på at ansatte
              som har medeierskap får sterkere insentiver for å skape vekst og trivsel i selskapet,
              som kommer alle til gode. Medeierskap i form av aksjer vil bli distribuert fra et sett
              av aksjer som er eid av selskapet, eller morselskapet. Når man tiltrer som aksjonær i
              selskapet, blir man underlagt selskapets aksjonæravtale.
            </p>
            <p>
              Alle ansatte vil bli tilbudt aksjer ved neste oppdatering av aksjeeierboken, etter at
              prøveperioden er passert. Siden dette krever litt administrasjon og signatur fra
              eksisterende eiere, gjør vi dette normalt hvert halvår (1. juni og 1. desember),
              alternativt hvert år (1. desember). Vi anbefaler alle å lese seg opp om det å være
              aksjonær i forkant av denne prosessen, og vi står behjelpelig til å svare så godt vi
              kan på eventuelle spørsmål.
            </p>
          </article>

          <article id="handbok-other">
            <h2>Alt annet + kontoret</h2>

            <p>
              På kontorene våre har du tilgang til arbeidsplass, samt kaffe og andre forfriskninger.
              Du kan bruke lokalene når det passer deg, som for eksempel når du ikke har anledning
              til å jobbe fra kundens kontorlokaler. Det er og helt i orden å bruke kontoret på
              fritiden, enten det er for å arrangere LAN-party eller spise pizza. Bare sørg for å
              forlate kontoret i samme (helst litt bedre) stand enn da du ankom!
            </p>
          </article>

          <article id="handbok-militaer">
            <h2>Militærtjeneste</h2>

            <p>
              Innkalling til militærtjeneste som krever at man er borte fra arbeidsplassen,
              inkludert førstegangstjeneste, meldes fra til nærmeste leder og legges inn i
              kalenderen.
            </p>
            <p>
              Ansatte med fullført forutgående prøvetid vil få utbetalt lønn for inntil 1 måned i
              kalenderåret ved tvungen militær-tjeneste, sivil tjenesteplikt, plikttjeneste i
              sivilforsvaret, i politireserven og i heimevernet. Eventuelle tjenestetillegg utbetalt
              i forbindelse med plikttjenesten vil bli trukket fra lønnsutbetalingen.
            </p>
            <p>
              Innkallelse til førstegangstjeneste medfører permisjon uten lønn. Frivillig verv som
              medfører plikttjeneste utover ovennevnte 1 måned vanlig trening vil bli tilrettelagt
              av arbeidsgiver iht. gjeldende lovverk og gis permisjon uten lønn.
            </p>
          </article>

          <article id="handbok-kommunikasjon">
            <h2>Slack og E-post</h2>

            <p>
              Mesteparten av vår daglige kommunikasjon skjer på Slack, som er vår foretrukne
              plattform. Her finner du en avslappet stemning. Dette er stedet du får tak i alle
              dersom du for eksempel vil invitere til en sosial samling, som en after-work, å spille
              squash, eller litt Fortnite.
            </p>
            <p>Dersom man behøver å være litt mer formell anbefaler vi å benytte e-post.</p>
            <p>Vi forsøker å holde all arbeidsrelatert kommunikasjon innenfor normal arbeidstid.</p>
          </article>

          <article id="handbok-employment">
            <h2>Ansettelse</h2>

            <p>
              En ansettelse er en svært viktig investering for KodeWorks. De ansatte er ikke bare
              personer som vil bidra til et godt arbeidsmiljø, men de er og det produktet KodeWorks
              leverer. Det er derfor et stort fokus på å ansatte dyktige medarbeidere som søker og
              mestrer utfordringer. Det er de ansatte som utgjør KodeWorks.
            </p>
          </article>

          <article id="handbok-process-and-onboarding">
            <h2>Prosess og onboarding</h2>

            <p>
              I KodeWorks vil vi at du som nyansatt skal føle at prosessen fra tiden du har tatt
              kontakt med oss, til kontrakten er signert du har begynt å jobbe, har vært en god
              opplevelse.
            </p>
            <p>
              Til vanlig vil du som nyansatt bli fulgt opp av daglig leder under ansettelsen og
              påfølgende onboarding, som i hovedsak består av følgende tema:
            </p>

            <ul>
              <li>Jobbtilbud og signering av arbeidskontrakt.</li>
              <li>
                Bestilling av nødvendig utstyr, slik som arbeidsmaskin, mobiltelefon med tilhørende
                abonnement, samt annet tilleggsutstyr.
              </li>
              <li>
                Oppretting av nødvendige brukere i Google Workspace, Tripletex (regnskapssystem), og
                Werkz (timeføringssystem).
              </li>
              <li>Innmelding i selskapets pensjon- og forsikringsavtaler.</li>
              <li>
                Invitasjon til samhandlingsplattformer:
                <ul>
                  <li>Slack</li>
                  <li>GitHub</li>
                  <li>Discord</li>
                  <li>GitLab</li>
                </ul>
              </li>
              <li>
                Oppstart:
                <ul>
                  <li>Første arbeidsdag med hilserunde på kontoret.</li>
                  <li>Innføring i kontorrutiner, nøkler, alarmsystem, lunsjordning, timeføring.</li>
                  <li>Innføring i hvordan å være en konsulent.</li>
                  <li>
                    Forberedelse til kundeprosjekt, herunder kartlegging av kompetanse og
                    interesser, forberede CV osv.
                  </li>
                  <li>Tilegning av arbeidsoppgaver før oppstart i kundeprosjekt.</li>
                  <li>Invitasjon til faglige og sosiale arrangementer.</li>
                </ul>
              </li>
            </ul>
          </article>

          <article id="handbok-probation">
            <h2>Prøvetid</h2>

            <p>
              Som ny fulltidsansatt har du en prøvetid på 6 måneder fra kontraktsfestet
              oppstartsdato. Prøvetiden er gjensidig. Med dette menes at den er til både for deg som
              nyansatt og KodeWorks som selskap for å eventuelt avslutte arbeidsforholdet dersom
              omstendighetene ikke var som forventet. Under prøveperioden har man oppsigelsestid på
              1 måned.
            </p>
            <p>
              Prøvetiden kan bli utvidet dersom du har vært borte under prøveperioden, som for
              eksempel grunnet sykdom eller foreldrepermisjon. Hovedregelen er at prøvetiden kan
              forlenges dersom det skyldes forhold som oppstår fra den ansattes side, ikke dersom
              arbeidsgiver har forhindret den ansatte fra å kunne arbeide. En slik forlengelse vil
              meddeles skriftlig innen utgangen av prøvetiden.
            </p>
          </article>

          <article id="handbok-job-types">
            <h2>Stillingstyper og roller</h2>

            <p>
              De aller fleste ansatte i KodeWorks er utviklere og har stilling som konsulent. I
              tillegg finnes det noen stillinger under ledelse og administrasjon, mer spesifikt
              daglig leder, økonomimedarbeider og selger. Enkelte ansatte er i tillegg
              styremedlemmer i de ulike avdelingene. Hver avdeling har en ledergruppe, som normalt
              sett består av daglig leder og andre styremedlemmer.
            </p>
            <p>
              I motsetning til andre konsulentselskaper har vi ikke en egen stillingstype for
              seniorkonsulent. Du vil derimot kunne bli presentert ovenfor en potensiell kunde som
              seniorkonsulent på bakgrunn av kompetanse og erfaring, men dette vil ofte variere
              basert på hver enkelt kundes definisjon av senior.
            </p>
            <p>
              Det finnes ulike roller man kan påta seg i hver avdeling, litt avhengig av hva
              gjeldende ønsker og behov er blant de ansatte. Noen er faggruppeledere eller
              -medlemmer, noen er sosialansvarlig, og noen er tillitsvalgte. Det er bare å snakke
              med avdelingslederen din dersom du ønsker å bidra til å skape et enda bedre
              arbeidsmiljø, sosialt, eller faglig tilbud.
            </p>
          </article>

          <article id="handbok-expectations">
            <h2>Forventninger</h2>

            <p>
              Som konsulent vil du tilbringe mye av tiden ute på oppdrag hos kundene våre. For oss
              er det viktig at alle våre konsulenter er gode ambassadører for KodeWorks. Dette
              gjelder både i form av å levere resultater med høy kvalitet, utfordre kunden når det
              passer seg for å skape de beste løsningene, men også forsøke å forstå kunden og deres
              prosesser utover prosjektet. Ofte viser det seg at det er andre utfordringer kunden
              også trenger hjelp til, som kan resultere i nye oppdrag for KodeWorks.
            </p>
            <p>
              En av hovedkarakteristikkene til konsulentene i KodeWorks er at de er brenner for
              faget. Vi tilrettelegger for faglig utvikling gjennom blant annet fagdager,
              fagsamtaler, men håper også at du følger med og holder deg oppdatert på nye trender og
              teknologier utover dette.
            </p>
            <p>
              For å kunne ha et bredt tilbud er vi avhengige av innspill fra de ansatte. Vi
              oppfordrer deg derfor til enten å komme med idéer eller ta ansvar for å arrangere det
              du måtte ønske av sosiale eller faglige arrangementer. Vi har et solid sosial- og
              fagbudsjett til disposisjon, så her er det bare kreativiteten det går på!
            </p>
          </article>

          <article id="handbok-one-on-ones">
            <h2>Medarbeidersamtaler og fagsamtaler</h2>

            <p>
              Du vil som ansatt gjennomgå 1-2 offisielle medarbeidersamtaler i året. Selvfølgelig er
              det alltid rom for slå av en prat dersom det er noe du ønsker å snakke om, så det er
              bare å ta kontakt med nærmeste leder når du har noe på hjertet. Noe av det vi setter
              høyest er at alle ansatte trives på arbeidsplassen, så vi vil forsøke å hjelpe deg så
              godt vi kan med oppfølging og tilrettelegging av dine ønsker og behov.
            </p>
            <p>
              Faggruppa vil og holde fagsamtaler med deg. Her forsøker vi å kartlegge dine faglige
              ønsker og behov, og hjelpe deg til å finne relevante målsetninger eller fokusområder
              som drar deg i riktig retning. Dette kan være alt fra ønsker om type prosjektoppdrag,
              kurs, og konferanser, til spesifikk kompetansebygging på teknologier og annen
              domenekunnskap mm. Fagsamtaler kommer i tillegg til medarbeidersamtaler.
            </p>
          </article>

          <article id="handbok-resignation">
            <h2>Oppsigelse</h2>

            <p>
              En oppsigelse skal sendes skriftlig. Oppsigelsestiden er gjensidig for både deg som
              ansatt og arbeidsgiver. Oppsigelsestiden er normalt 3 måneder, med unntak av
              prøveperioden da den er 1 måned. Oppsigelsestiden starter fra første dag måneden etter
              oppsigelsen ble sendt, med mindre annet er eksplisitt avtalt.
            </p>
            <p>
              Dersom du skal forlate KodeWorks vil du måtte returnere utstyr du har fått utlevert.
              Avhengig av hvor gammelt utstyret er og hvilken nytteverdi det har for KodeWorks vil
              du kunne kjøpe det ut etter gjeldende avskrivningsregler. Dette kan for eksempel være
              arbeidsmaskinen din eller en mobiltelefon. KodeWorks ønsker i utgangspunktet ikke å
              kreve tilbake utstyr som ikke enkelt kan benyttes av andre ansatte eller omgjøres til
              kapital.
            </p>
            <p>
              Dersom du er medeier i selskapet, må også aksjene dine selges tilbake til selskapet i
              henhold til aksjonæravtalen.
            </p>
          </article>
        </section>
      </section>
    </>
  );
}
