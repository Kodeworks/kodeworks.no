const projects = [
  {
    name: 'Kongsberg A&D',
    description: `Kongsberg A&D er en global teknologileder innen forsvar, overvåking,
    romfart, flystrukturer og flyvedlikehold. Eksempelprosjekter er bredbånd
    til den internasjonale romstasjonen, “remote tower” for flyindustrien,
    smarte fabrikker, avansert taktisk kommunikasjonsutstyr etc. Kodeworks
    bistår Kongsberg A&D i sin virksomhet.`,
    image: 'assets/logos/kongsberg.svg',
  },
  {
    name: 'Kongsberg Digital',
    description: `Kongsberg Digital tilbyr software og digitale løsninger for kunder
    innen maritim, olje og gass og supplementerende virksomhet, med autonomi,
    smarte data, og augmented reality som fellesnevner. Kodeworks jobber
    med utvikling av maritim simulering til bruk i blant annet
    treningssystemer for kunder over hele verden.`,
    image: 'assets/logos/kongsberg.svg',
  },
  {
    name: 'TeleG',
    description: `TeleG og datterselskapet Tail it selger unike produkter og systemer
    innen smart tracking og provisjonering. Kodeworks bistår TeleG med
    produktutvikling og videreutvikling av porteføljen.`,
    image: 'assets/logos/teleg.png',
  },
  {
    name: 'Sunlit Sea',
    description: `Sunlit Sea utvikler en ny type teknologi for flytende solcelleinstallasjoner.
    Teknologien åpner et helt nytt marked for solceller på hav. Kodeworks
    utvikler sensorløsninger for solcelleinstallasjonen, samt overvåking og
    berikning av data fra sensorene for å optimalisere produksjon og vedlikehold.`,
    image: 'assets/logos/sunlitsea.png',
  },
  {
    name: 'Inatur',
    description: `Inatur er Norges største markedsplass for jakt, fiske og hytter i norsk natur.
    Kodeworks videreutvikler og vedlikeholder løsninger for Inatur.`,
    image: 'assets/logos/inatur.svg',
  },
  {
    name: 'Equinor',
    description: `Equinor supplerer 170 millioner mennesker med energi daglig, og har
    de siste årene iverksatt en strategisk satsing på bærekraftig
    energi. Dette er en prosess som krever innovasjon,
    forretningsforståelse og et stort fokus på kvalitet. Kodeworks
    støtter Equinors forsknings- og digitaliseringsaktiviteter gjennom
    analyse, design, programmering og testing.`,
    image: 'assets/logos/equinor.png',
  },
  {
    name: 'Avinor',
    description: `Samfunnsoppdraget til Avinor er å sikre hele Norge gode
    luftfartstjenester. Dette består blant annet i å opprettholde god
    informasjonsflyt til ansatte og flypassasjerer. Avinor er
    underlagt noe av landets strengeste krav til sikkerhet og
    kvalitet. Kodeworks har bistått med integrasjon av sanntids
    informasjonsprosessering samt testing og kvalitetsikring av kode.`,
    image: 'assets/logos/avinor.png',
  },
  {
    name: 'Politiet',
    description: `Politiet skal forebygge og bekjempe kriminalitet samt skape
    trygghet i samfunnet. For å klare oppdraget er de avhengig av gode
    datasystemer som understøtter den daglige driften på en smidig og
    effektiv måte. Kodeworks har vært med å utvikle to svært viktige systemer for
    Politet: Mobil- og Omvendt Voldsalarm (MOVA) og Politioperative
    tjenester i felt (PO). Begge systemene har bidratt til å bedre
    responstiden på landets operasjonssentraler, trygge hverdagen til
    voldsutsatte, og gjort politipatruljer mer effektive.`,
    image: 'assets/logos/politiet.svg',
  },
  {
    name: 'Møller Group',
    description: `Bilbransjen er i stadig endring og Møller Mobility Group jobber
    aktivt med å forbedre sine prosesser, forretningsområder og
    datasystemer. Bilparken moderniseres samtidig som transportbehovet
    øker, og i den forbindelse har Kodeworks bidratt til å utvikle et
    system for logistikk- og avvikshåndtering for brukt- og nybilsalg.
    Vi har vært involvert i alt fra UX prosesser til integrasjon med
    legacy-systemer, markedsføringskanaler, billeverandører og Statens
    Vegvesen.`,
    image: 'assets/logos/moller.png',
  },
  {
    name: 'Thomson Reuters',
    description: `Gjennom ulike digitale plattformer for energi- og råvarehandel
    leverer Thomson Reuters analyseverktøy beregnet på investorer og
    firmaer. Informasjonen som presenteres i disse løsningene er svært
    tidskritisk, datamengdene er store, kildene er mange og
    algoritmene er komplekse. Kodeworks har bistått Thomson Reuters med å prosessere og
    tilgjengeliggjøre data raskere og mer effektivt gjennom å innføre
    mer optimale tjenester, datastrukturer, infrastruktur, prosesser
    og mellomvare.`,
    image: 'assets/logos/thomsonreuters.svg',
  },
  {
    name: 'TechnipFMC',
    description: `Som et verdensomspennende energi-serviceselskap har TechnipFMC
    store kunder i Norge. Sensorer brukes til sanntids overvåking av
    flyt gjennom installasjoner, og tung matematisk datamodellering
    for å optimalisere driften. Kodeworks bistår med å øke skalerbarhet og ytelse i
    applikasjonsporteføljen, samt å modernisere systemet for
    deployment i cloud.`,
    image: 'assets/logos/technipfmc.svg',
  }
]

const projectList = document.getElementById('project-list')

console.log(shuffleArray(projects));

shuffleArray(projects).forEach(function (project) {
  const article = document.createElement('article')
  const articleContent = document.createElement('div')
  const articleImage = document.createElement('img')
  const articleDescrption = document.createElement('p')

  article.className = 'customer'
  articleContent.className = 'customer-content cf'
  articleImage.className = 'customer-logo'
  articleDescrption.className = 'customer-description'

  articleImage.setAttribute('alt', project.description)
  articleImage.setAttribute('src', project.image)

  articleDescrption.textContent = project.description

  articleContent.appendChild(articleImage)
  articleContent.appendChild(articleDescrption)
  article.appendChild(articleContent)


  projectList.appendChild(article)
})

function shuffleArray(array) {
  let _array = array.slice()

  for (let i = _array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
  }

  return _array;
}
