import './staffmanual.css';

function StaffManual() {
  return (
    <div id="container">
      <div className="handbok-container">

        <div className="handbok-column-1">
          <div className="handbok-sidebar">
            <nav className="handbok-sidebar-local-nav">
              <ul className="handbok-menu">
                <li><strong>Håndboka</strong></li>
                <li><a href="#handbok-arbeidstid">Arbeidstid</a></li>
                <li><a href="#handbok-arbeidststed">Arbeidssted</a></li>
                <li><a href="#handbok-betingelser">Betingelser</a></li>
                <li><a href="#handbok-timeforing">Timeføring</a></li>
                <li><a href="#handbok-medeier">Medeier</a></li>
                <li><a href="#handbok-other">Alt annet + kontoret</a></li>
                <li><a href="#handbok-militaer">Militærtjeneste</a></li>
                <li><a href="#handbok-kommunikasjon">Slack og epost</a></li>
              </ul>
            </nav>

            <nav className="handbok-sidebar-more">
              <ul>
                <li><a href="/handbok/ansettelse.html">&rarr; Ansettelse</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="handbok-column-2">
          <section className="handbok">
            <header className="customer-header">
              <h1>Vår personalhåndbok</h1>

              <p>Dette dokumentet er en slags personalhåndbok for ansatte i Kodeworks. Her prøver vi å beskrive hvordan vi gjør ting, og hvordan vi tenker. I dette dokumentet vil du finne informasjon om arbeidstid, feriepenger, lønn, goder og mye mer. Dette er et dokument vi ønsker at alle ansatte skal bidra til, og ha eierskap til.</p>
            </header>
          </section>

          <section className="handbok" id="handbok-arbeidstid">
            <h2>Arbeidstid</h2>

            <p>Kontraktsfestet arbeidstid er 8 timer per dag, med 30 minutter lunsjpause. I Kodeworks opererer vi med en kjernetid i tidsrommet kl 9-15, med mulighet og rom for å kunne være fleksibel på arbeidstiden. I en bedrift hvor kompetanse er hovedproduktet vårt vet vi at det å jobbe tett med våre kollegaer vil gi best resultater. Vi vet også at hverdagen kan by på andre ting som gjør at man i perioder trenger å tilpasse arbeidstiden utenfor kjernetiden.</p>

            <p>Som konsulenter må vi likevel forholde oss til at våre kunder har egen kjernetid, og eventuelle endringer her må du koordinere med prosjektet ditt og/eller din personalansvarlige.</p>

            <article>
              <h3>Ferie</h3>

              <p>Vi kjører vanlig 5-ukers betalt ferie.</p>

              <p>Ofte er det slik at prosjektet du er på ønsker at du tar ut ferien til bestemte tider, typisk fellesferien, påske, jul, høst/vinterferie overlappende med skole/barnehage, etc. Vi prøver å tilpasse oss dette, men skjønner selvfølgelig at det ikke alltid lar seg gjøre.</p>

              <p>Når du skal ta ut ferie, følger du bare denne sjekklisten:</p>

              <ol>
                <li>Meld fra til nærmeste leder</li>
                <li>Snakk med kunden for å få klarert det</li>
                <li>Legg det inn i kalenderen</li>
                <li>Legg det inn i timeføringssystemet</li>
              </ol>

              <p>Vi følger lovverket og Tekna ihht. hva som er helligdager. Dvs at julaften og nyttårsaften er vanlige dager.</p>
            </article>
          </section>

          <section className="handbok" id="handbok-arbeidssted">
            <h2>Arbeidssted</h2>
            <p>Som konsulent skjer det ofte at vi jobber der kunden holder til. Vi i Kodeworks prøver å finne oppdrag som ikke ligger for langt unna alminnelig arbeidssted.</p>

            <p>For oppdrag som medfører større kostnader og betydelig lengre reisevei enn til normalt arbeidssted vil Kodeworks dekke disse utgiftene.</p>

            <p>Eksempelvis vil dette være med lengre oppdrag utenfor sone A i Trondheim eller sone 1 i Oslo</p>
          </section>

          <section className="handbok" id="handbok-betingelser">
            <h2>Betingelser</h2>

            <p>Vi ønsker at alle våre ansatte skal ha det så fint som mulig på jobb ved å tilby den nødvendige friheten, sikkerheten og stabiliteten i hverdagen. Samtidig er det også viktig å få de verktøyene man trenger for å kunne gjøre jobben sin på best mulig måte.</p>

            <article>
              <h3>Lønn</h3>

              <p>I Kodeworks ønsker vi at lønnen ikke er en faktor du skal måtte gå og tenke på. Samtidig som det er viktig med en god lønn for å kunne ha den friheten og stabiliteten vi ønsker at alle våre ansatte skal ha. Vi har derfor ingen individuelle lønnsvurderinger. Som ansatt skal du ikke måtte be om å få det du fortjener. Det skal komme automatisk. Vi har valgt en lønnsmodell som gir alle lik lønn basert på blant annet antall års erfaring. Alle ansatte i Kodeworks har oversikt over hva de andre tjener. En oversikt over gjeldende lønnsnivå og bakgrunnstall for lønnsjustering finner du i mappen &quot;Lønn&quot; på Google Drive.</p>

              <p>Lønn utbetales senest den 22. i hver måned. Hvis den 22. er på en helligdag skal den utbetales slik at arbeidstaker mottar lønn før den 22.</p>
            </article>

            <article>
              <h3>Feriepenger</h3>

              <p>Feriepenger utbetales i juni. All ferie, 25 dager, vil bli trekt denne måneden. Juni har som regel ikke 25 arbeidsdager, så gjenværende feriedager trekkes tilsvarende fra feriepengene. Ansatte som har startet etter nyttår vil ikke ha noen opparbeidede feriepenger, og vil trekkes (ytterligere) i påfølgende juli-måned (slik at det blir 25 dager trekk til sammen). Hvis man ønsker å få utbetalt feriepengene på et annet tidspunkt, kan dette gjøres etter avtale med økonomiavdelingen. Av praktiske årsaker er det isåfall fint at man varsler om dette i god tid før man ønsker utbetaling.</p>
            </article>

            <article>
              <h3>Overtidstillegg</h3>
              <p>Fra tid til annen kan det være behov for å jobbe noen ekstra timer i uken. Dette gjelder i hovedsak i hektiske perioder der man sitter ute hos kunde. Utover dette er det ønskelig å holde overtidsarbeidet på et minimum. Vi mener at den ansattes fritid skal respekteres og at man heller vil yte bedre de timene man er på jobb om man har fått tilstrekkelig med hvile. Derfor avgjør man helt selv om man ønsker å jobbe overtid.</p>
              <p>Overtidsbetalingen kan man regne ut ved å dele årslønn på 1950 timer, for så å legge til 40%.</p>
              <p>Overtidsarbeid skal alltid avklares med personalansvarlig først med mindre annet er avtalt.</p>
            </article>

            <article>
              <h3>Pensjon og forsikring</h3>

              <p>Kodeworks setter av hele 7% i pensjonssparing. Dette gjelder fra 0 til 12G.</p>

              <p>I tillegg til vanlig yrkesreise- og yrkesskadeforsikring har vi reiseforsikring som dekker fritidsreise for deg og din familie. Vi har også behandlingsforsikring som sørger for at man får rask og god behandling om noe skulle skje. Her inngår det også fri tilgang til legetime på mobil. </p>

              <p>Vi benytter Gjensidige for både pensjon og forsikring, og hver ansatte kan selv logge seg inn hos Gjensidige og se sin profil og detaljer rundt dette. En kort guide til hvordan man får oversikt over egne forsikringer i Gjensidige ligger i mappen &quot;Forsikring&quot; på Google Drive.</p>
            </article>

            <article>
              <h3>Datamaskin og programvare</h3>

              <p>Vi dekker den datamaskinen og programvaren du trenger for å kunne gjøre jobben din. Hva man velger bestemmer man helt selv. Laptop-parken i Kodeworks består nå av blant annet Dell XPS 15, MacBook Pro og gaming-laptopen til Christian. Hvis datamaskinen på et tidspunkt ikke er god nok til å gjøre arbeidsoppgavene så effektivt som mulig, er det på tide med en ny.</p>

              <p>Trenger man programvare for å gjøre jobben sin, som f.eks IDEA, kjøper man dette direkte og fører et utlegg.</p>
            </article>

            <article>
              <h3>Litteratur og annen læringsmateriale</h3>
              <p>For å bidra til å slukke kunnskapstørsten finnes det et utall kilder. Om man ønsker å benytte seg av e-læringstilbud som f.eks Pluralsight, Coursera eller lignende er det bare å melde seg på dette. Bøker i alle former og fasonger står man også fritt til å kjøpe. Det er tross alt kunnskap vi lever av! Utgiftene fører man utlegg for.</p>
            </article>

            <article>
              <h3>Kurs og konferanse</h3>
              <p>I Kodeworks oppfordres man til å delta på kurs og konferanser. I 2018 dro vi alle på JavaZone, men det er å forvente at de ansattes interesser og ønsker om faglig påfyll best kan tilfredsstilles også andre plasser. Om man ønsker å dra på kurs eller konferanser flere ganger i året, eller å dra plasser som medfører større kostnader enn f.eks JavaZone, så trenger dette en godkjenning av personalansvarlig.</p>
              <p>Bidrar man med å holde foredrag, kurs eller lignende vil Kodeworks dekke dette innenfor rimelighetens grenser.</p>
            </article>

            <article>
              <h3>Helse</h3>
              <p>Vår yrkesgruppe er veldig utsatt for belastningsskader. Dette kan man unngå ved å tilrettelegge for et godt fysisk arbeidsmiljø. Om man sitter ute hos kunde og føler at f.eks bord, skjerm eller stol ikke er bra nok, så vil vi sørge for å bedre dette. Det skal ikke være nødvendig å la slike ting gå på bekostning av helse.</p>

              <p>
                Vi ønsker også å tilrettelegge for at man skal være fysisk aktiv. I Trondheim har Kodeworks en bedriftsavtale med 3T.
                Her spiller flere Kodeworks-ansatte ukentlig squash. Man behøver ikke benytte seg av dette dersom man ønsker å trene et annet sted.
                Vi dekker et tilsvarende abonnement hos andre tilbydere også. I Oslo finnes det ikke en egen bedriftsavtale,
                så der er det bare å finne et tilsvarende abonnement så ordner vi det.</p>
            </article>

            <article>
              <h3>Goder og ytelser</h3>

              <p>For at du som ansatt skal ha en fleksibel, trygg og forutsigbar hverdag har Kodeworks en rekke goder og ytelser.
                Med unntak av ytelser som skal føres i timeregistreringssystemet, eksempelvis foreldrepermisjon og omsorgspermisjon,
                registreres utgifter for alt annet som ansattutlegg og vil bli refundert på neste lønnsutbetaling.</p>

              <p>Periodiske utgifter som bredbånd og medlemskap hos treningssenter skal registreres månedsvis.
                Ved varierende utgifter er det ditt ansvar som ansatt å ikke overgå 12 ganger det maksimale månedsbeløpet for den aktuelle goden det inneværende året.
              </p>

              <ul>
                <li>Mobiltelefon + abonnement.</li>
                <li>Bredbånd dekkes med inntil 500 kr pr måned.</li>
                <li>Medlemskap hos 3T (Trondheim) dekkes gjennom vår bedriftsavtale, eller tilsvarende abonnement hos andre tilbydere (Oslo & Trondheim).</li>
                <li>Øvrig nødvendig elektronikk for å utføre arbeidet. Eksempelvis mobiltelefon, skjerm eller datamus. Totalt inntil 15.000 pr år.</li>
                <li>2 uker betalt omsorgspermisjon ved fødsel.</li>
                <li>Full lønn under foreldrepermisjonen.</li>
              </ul>
            </article>

            <article>
              <h3>Velferdspermisjoner</h3>
              <p>For å kunne bidra til å gjøre både forutsette og uforutsette hendelser i hverdagen litt enklere å håndtere, gir Kodeworks følgende velferdspermisjoner utover hva som er lovpålagt:</p>

              <ul>
                <li>Undersøkelse hos lege eller tannlege.</li>
                <li>Følge barn til første skoledag eller barnehage (inntil 1 dag).</li>
                <li>Permisjon ut resten av arbeidsdagen om man blir syk i løpet av dagen og må forlate arbeidsstedet.</li>
                <li>Kort permisjon ved sykdom i hjemmet.</li>
                <li>Kort permisjon når ektefelle/samboer/partner skal føde.</li>
                <li>Dødsfall og begravelser i nær familie (inntil 5 dager).</li>
                <li>For å gi blod.</li>
                <li>Flytting (inntil 1 dag i året).</li>
                <li>Bryllup (inntil 1 dag).</li>
                <li>Oppkjøring til førerkort.</li>
              </ul>
            </article>
          </section>

          <section className="handbok" id="handbok-timeforing">
            <h2>Timeføring</h2>
            <p>Timeføring er dessverre nødvendig i de fleste konsulentselskaper, og Kodeworks er intet unntak. Heldigvis har vi som de fleste andre konsulentselskap laget vårt eget timeføringsverktøy for å gjøre prosessen enklere. I timeføringsverktøyet fører man arbeidsrelatert tid, det vil si fakturerbar tid på ulike prosjekter, sykdom, ferie, permisjon etc. Timene leveres innen siste virkedag i måneden er omme.</p>
            <p>En arbeidsdag i timeføringsverktøyet utgjør 8 timer. Dette vil si at ferie, velferdspermisjoner og interne iniaitiv skal føres med 8 timer per dag. For kundeprosjekter vil det oftest være 7.5 timer, med mindre kontrakten tilsier at vi kan fakturere for tiden brukt på lunsjpausen. Dette vil du bli informert om før prosjektoppstarten.</p>
            <p>Man vil også måtte føre timer i kundes eget system. Der vil det nok være andre regler for når og hvordan dette skal gjøres.</p>
          </section>

          <section className="handbok" id="handbok-medeier">
            <h2>Medeier</h2>
            <p>Stillingen legger også til rette for at ansatte kan bli medeier. Vi tror at ansatte som har medeierskap får sterkere insentiver til å skape vekst og trivsel i selskapet, som gagner alle. Medeierskap vil bli distribuert fra en pool av aksjer som selskapet eller morselskapet besitter. Aksjene kjøpes og selges til kostpris. Ved aksjekjøp tiltrer den ansatte selskapets aksjonæravtale.</p>
            <p>Alle ansatte vil få tilbud om aksjer etter de har vært utleid som konsulenter i tre måneder. Siden dette krever en del administrasjon og signaturer av alle eksisterende aksjonærer, gjør vi dette hvert halvår (1. juni og 1. desember). Vi anbefaler alle å lese seg opp på temaet før prosessen begynner, selv om vi selvfølgelig også skal besvare alle spørsmål etter beste evne.</p>
          </section>

          <section className="handbok" id="handbok-other">
            <h2>Alt annet + kontoret</h2>
            <p>
              På kontoret vårt i Fjordgata 30 i Trondheim har du tilgang til arbeidsplass, printer, scanner, flipperspill, kaffe og andre forfriskninger.
              I Oslo har vi kontor i Grønnegata 10 på Majorstuen. Her har du også tilgang til arbeidsplass, kaffemaskin, møterom etc.
              Lokalene bruker du til egen disposisjon til daglig når du ikke har mulighet til å sitte ute hos kunde.
            </p>
          </section>

          <section className="handbok" id="handbok-militaer">
            <h2>Militærtjeneste</h2>
            <p>Innkalling til militærtjeneste, herunder førstegangstjeneste, som krever permisjon fra arbeidet varsles til personalansvarlig og legges i kalenderen. For pliktig tjeneste i Forsvaret, Heimevernet, Sivilforsvaret og Politireserven gis inntil en måned full lønn pr. år med fradrag av alle militære tillegg som lønn, dagpenger m.m. For frivillig tjeneste i Heimevernet gis permisjon uten lønn. For militær førstegangstjeneste gis permisjon uten lønn. Repetisjonsøvelser som har lengre varighet enn fire uker må avtales særskilt.</p>
          </section>

          <section className="handbok" id="handbok-kommunikasjon">
            <h2>Slack og epost</h2>
            <p>Mye av den daglige kommunikasjon foregår på Slack, noe som er å foretrekke. Her er det lav takhøyde så det er bare å slå seg løs! Skulle det være fristende med en øl, runde squash eller litt Fortnite så finner du folka her.</p>
            <p>Hvis man har behovet for å være litt mer formell, er det naturlig å sende epost.</p>
            <p>Jobbrelatert kommunikasjon bør begrenses til innenfor arbeidstiden.</p>
          </section>
        </div>

      </div>
    </div>
  );
}

export default StaffManual;
