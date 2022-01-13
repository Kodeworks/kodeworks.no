import { Project } from '../types';

interface ProjectObjectType {
  [key: string]: Project
}

export const projects: ProjectObjectType = {
  Equinor: {
    name: 'Equinor',
    image: '/assets/projects/project1.jpg',
    description: 'Equinor er et internasjonalt energiselskap, og har de siste årene iverksatt en strategisk satsing på bærekraftig energi. Dette er en prosess som krever innovasjon, forretningsforståelse og et stort fokus på kvalitet. Kodeworks støtter Equinors forsknings- og digitaliseringsaktiviteter gjennom analyse, design, programmering og testing.',
  },
  Inatur: {
    name: 'Inatur',
    image: '/assets/projects/project2.jpg',
    description: 'Inatur er Norges største markedsplass for jakt, fiske og hytter i norsk natur.  Kodeworks bidrar til utvikling av applikasjoner tilrettelagt for tilbydere av jakt, fiske og hytter slik at det enkelt kan tilbys til potensielle kunder og forhandlere.',
    highlighted: true,
  },
  Statkraft: {
    name: 'Statkraft',
    image: '/assets/projects/project3.jpg',
    description: 'Statkraft er Europas største produsent av fornybar energi og et globalt selskap innen energimarkedsoperasjoner. Kodeworks har bistått med koordinering og utvikling av en samlet plattform for booking, risikoevaluering og rapportering av kraftkjøpsavtale.',
  },
  Flir: {
    name: 'Teledynename:  FLIR',
    image: '/assets/projects/project4.jpg',
    description: 'Teledyne FLIR designer, utvikler, produserer og distribuerer teknologier som streber etter å skape en mer bærekraftig, mer effektiv og tryggere fremtid ved å forbedre menneskelig oppfatning gjennom klassens beste intelligente bildebehandlings- og sensorløsninger.',
  },
  Vaskehjelp: {
    name: 'Vaskehjelp',
    image: '/assets/projects/project4.jpg',
    description: 'Vaskehjelp er en markedsplass som kobler rengjører og kunde sammen, samt tar av seg betaling og annet papirarbeid. Kodeworks har bistått med utvikling av iOS- og Android-applikasjon.',
  },
  Sunlitsea: {
    name: 'Sunlit Sea',
    image: '/assets/projects/project4.jpg',
    description: 'Sunlit Sea utvikler en ny type teknologi for flytende solcelleinstallasjoner som åpner et helt nytt marked for solceller på hav. Kodeworks utvikler sensorløsninger for solcelleinstallasjonen, samt overvåking og berikning av data fra sensorene for å optimalisere produksjon og vedlikehold.',
  },
  Lilbit: {
    name: 'Lilbit',
    image: '/assets/projects/project5.jpg',
    description: 'Lilbit er et selskap som leverer en platform for GPS-sporing av kjæledyr. Deres visjon er å kunne gi eiere informasjon om dyrets tilstand gjennom dens oppførsel.',
    highlighted: true,
  },
  Skandiaenergi: {
    name: 'Skandiaenergi',
    image: '/assets/projects/project5.jpg',
    description: 'SkandiaEnergi utvikler løsninger for fremtidens strømmarked. De tilbyr unike og smarte energiløsninger for solstrøm og energisparing. Kodeworks bistår til å utvikle en app som gjør hverdagen som kunde mer oversiktlig, og som tilbyr smarte løsninger for strømstyring og lading av elbil.',
  },
  Kongsberg: {
    name: 'Kongsberg',
    image: '/assets/projects/project1.jpg',
    description: "Kongsberg Digital tilbyr digitale løsninger for kunder innen maritim, olje og gass, med autonomi, smarte data, og augmented reality som fellesnevner. Kodeworks jobber med utvikling av maritim simulering brukt i blant annet treningssystemer for kunder over hele verden.\n\nKongsberg A&D er en global teknologileder innen forsvar, overvåking, romfart, flystrukturer og flyvedlikehold.",
  },
  Akerbp: {
    name: 'Akerbp',
    image: '/assets/projects/project1.jpg',
    description: 'Aker BP ASA er et norsk oljeutvinning- og utviklingsselskap som fokuserer petroleumsressurser på norsk kontinentalsokkel.',
  },
  Gintel: {
    name: 'Gintel',
    image: '/assets/projects/project1.jpg',
    description: 'Gintel AS er et norsk IT-selskap som produserer programvare og applikasjoner innenfor telekommunikasjon, som endrer måten operatører komponerer og leverer tjenester til bedriftskunder.',
  },
  Bnentreprenor: {
    name: 'Bnentreprenor',
    image: '/assets/projects/project1.jpg',
    description: 'BN Entreprenør AS er et maskinentreprenørfirma som ble etablert i 1973. Med en moderne maskinpark er de i stand til å utføre oppdrag på en kostnadseffektiv måte.',
  },
  Politiet: {
    name: 'Politiet',
    image: '/assets/projects/project1.jpg',
    description: 'Politiet skal forebygge og bekjempe kriminalitet samt skape trygghet i samfunnet. For å klare oppdraget er de avhengig av gode datasystemer som understøtter den daglige driften på en smidig og effektiv måte. Kodeworks har vært med å utvikle to svært viktige systemer for Politet: Mobil- og Omvendt Voldsalarm (MOVA) og Politioperative tjenester i felt (PO). Begge systemene har bidratt til å bedre responstiden på landets operasjonssentraler, trygge hverdagen til voldsutsatte, og gjort politipatruljer mer effektiv.',
  },
  Avinor: {
    name: 'Avinor',
    image: '/assets/projects/project1.jpg',
    description: 'Samfunnsoppdraget til Avinor er å sikre hele Norge gode luftfartstjenester. Dette består blant annet i å opprettholde god informasjonsflyt til ansatte og flypassasjerer. Avinor er underlagt noe av landets strengeste krav til sikkerhet og kvalitet. Kodeworks har bistått med integrasjon av sanntids informasjonsprosessering samt testing og kvalitetsikring av kode.',
  },
  Wtw: {
    name: 'Wtw',
    image: '/assets/projects/project1.jpg',
    description: 'WTW er en teknologibasert bedrift som jobber med markedsledende mobilbaserte tjenester innen helse, transport og fritid.',
  },
  KLP: {
    name: 'KLP',
    image: '/assets/projects/project1.jpg',
    description: 'Kommunal Landspensjonskasse Gjensidig Forsikringsselskap er et Oslo-basert pensjonselskap som forvalter pensjonene til kommunalt ansatte i Norge.',
  },
  Thales: {
    name: 'THALES',
    image: '/assets/projects/project1.jpg',
    description: 'Thales Group er et fransk multinasjonalt selskap som designer og bygger elektriske systemer og leverer tjenester for luftfart, forsvar, transport og sikkerhet.',
  },
  TechnipFMC: {
    name: 'TechnipFMC',
    image: '/assets/projects/project2.jpg',
    description: 'Som et verdensomspennende energi-serviceselskap har TechnipFMC store kunder i Norge. Sensorer brukes til sanntids overvåking av flyt gjennom installasjoner, og tung matematisk datamodellering for å optimalisere driften. Kodeworks bistår med å øke skalerbarhet og ytelse i applikasjonsporteføljen, samt å modernisere systemet for deployment i skyen.'
  },
};


function getProjects(): Array<Project> {
  return Object.values(projects);
}

function getHighlightedProjects(): Array<Project> {
  return Object.values(projects).filter((project) => project.highlighted);
}

export default {
  getHighlightedProjects,
  getProjects,
}
