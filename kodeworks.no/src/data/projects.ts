import { Project } from '../types';

interface ProjectObjectType {
  [key: string]: Project;
}

export const projects: ProjectObjectType = {
  aize: {
    name: 'Aize',
    description: {
      en: 'Aize is a project specialist that offers engineering, procurement and construction services, as well as the delivery of advanced offshore platforms, onshore facilities, floating production units and renewable energy solutions.',
      no: 'Aize er en prosjektspesialist som tilbyr ingeniør-, anskaffelses-, og konstruksjonstjenester (EPC), samt leveranse av avanserte offshore plattformer, onshore anlegg, flytende produksjonsenheter og fornybare energiløsninger.',
    },
    image: 'aize.jpg',
    urlName: 'aize',
    technologies: [
      'C#',
      '.Net',
      'Git',
      'Visual Studio',
      'Azure DevOps',
      'Confluence',
      'Structural Optimization',
    ],
  },
  akerbp: {
    name: 'Aker BP',
    description: {
      en: 'Aker BP ASA is a Norwegian oil extraction and development company, focusing on petroleum resources on the Norwegian continental sea floor. KodeWorks’ task has been to cooperate with resources from other companies on WITSML Explorer, an open-source web solution designed to visualize WITSML-data.',
      no: 'Aker BP ASA er et norsk oljeutvinning- og utviklingsselskap som fokuserer på petroleumsressurser på norsk kontinentalsokkel. KodeWorks oppgave har vært å samarbeide med ressurser fra flere andre selskaper på WITSML Explorer, en open-source nettløsning designet å visualisere WITSML-data.',
    },
    image: 'akerbp.jpg',
    urlName: 'akerbp',
    technologies: ['C#', '.Net', 'Git', 'Visual Studio', 'React', 'XML'],
  },
  avinor: {
    name: 'Avinor',
    description: {
      en: 'Avinor’s social mission is to ensure good aviation services throughout Norway. This includes maintaining a good information flow to employees and air passengers. Avinor is subject to some of the country’s strictest requirements for safety and quality. KodeWorks has assisted with the integration of real-time information processing as well as testing and quality assurance of code.',
      no: 'Avinors samfunnsoppdrag er å sikre gode luftfartstjenester i hele Norge. Dette inkluderer å opprettholde en god informasjonsflyt til ansatte og flypassasjerer. Avinor er underlagt noen av landets strengeste krav til sikkerhet og kvalitet. KodeWorks har bistått med integrering av sanntids dataprosessering samt testing og kvalitetssikring av kode.',
    },
    image: 'avinor.jpg',
    urlName: 'avinor',
    technologies: ['Java', 'Camel', 'Fuse', 'XML', 'Hazelcast', 'Scala', 'Akka', 'Nagios'],
  },
  bnentreprenor: {
    name: 'BN Entreprenør',
    description: {
      en: 'BN Entreprenør AS is a machine contractor company that was established in 1973. With a modern machine park, they are able to carry out assignments in a cost-effective way.',
      no: 'BN Entreprenør AS er et maskinentreprenørfirma som ble etablert i 1973. Med en moderne maskinpark er de i stand til å utføre oppdrag på en kostnadseffektiv måte.',
    },
    image: 'bnentreprenor-2.jpg',
    urlName: 'bnentreprenor',
    technologies: [
      'React',
      'Mob-X',
      'Styled-Components',
      'Visual Studio Code',
      'JavaScript',
      'HTML',
      'CSS',
      'Netlify',
    ],
  },
  equinor: {
    name: 'Equinor',
    description: {
      en: 'Equinor is an international energy company, which in recent years has implemented a strategic investment in sustainable energy. This is a process that requires innovation, business understanding and a strong focus on quality. KodeWorks supports Equinor’s research and digitization activities through analysis, design, programming and testing.',
      no: 'Equinor er et internasjonalt energiselskap, og har de siste årene iverksatt en strategisk og betydelig satsing på bærekraftig energi. Dette er en prosess som krever innovasjon, forretningsforståelse og et stort fokus på kvalitet. KodeWorks støtter Equinors forsknings- og digitaliseringsaktiviteter gjennom analyse, design, programmering og testing.',
    },
    image: 'equinor.jpg',
    urlName: 'equinor',
    technologies: [
      'Azure',
      '.NET',
      'C#',
      'React',
      'Typescript',
      'Python',
      'Flask',
      'JavaScript',
      'D3',
      'Java',
      'Ember',
      'Pandas',
      'Docker',
      'MongoDB',
      'CosmosDB',
      'InfluxDB',
      'Git',
      'DevOps',
      'Rider',
      'Radix',
      'Linux',
      'Figma',
    ],
  },
  dnb: {
    name: 'DNB',
    description: {
      en: 'DNB as a company has worked for what is soon to be 200 years to find the best solutions for their customers, and is today one of the largest technology companies within the banking and financial sector. KodeWorks assists in this adaptation by establishing a central system for managing master- and reference data in DNB. In using a holistic end-to-end mindset and utilizing modern cloud services, KodeWorks helps DNB establish a robust solution for both operational and analytical usage.',
      no: 'Gjennom snart 200 år har DNB jobbet for å finne de beste løsningene for kundene sine, og er i dag et ledende teknologiselskap innen bank- og finanssektoren. KodeWorks bidrar i denne utviklingen med å etablere et sentralt system for håndtering av master- og referansedata. Gjennom en helhetlig ende-til-ende tankegang og bruk av moderne skytjenester hjelper KodeWorks DNB med å etablere en robust løsning for både operasjonell og analytisk bruk.',
    },
    image: 'dnb.jpg',
    urlName: 'dnb',
    technologies: [
      'Python',
      'Oracle EDM',
      'SQL',
      'REST',
      'Kafka',
      'AWS',
      'Node',
      'TypeScript',
      'JavaScript',
      'Vue',
      'Jest',
      'Jenkins',
      'Git',
      'BitBucket',
      'Jira',
      'AuroraDB',
      'PostgreSQL',
      'DynamoDB',
      'NoSQL',
      'Lambda',
      'Swagger',
    ],
  },
  'dnb-developer-portal': {
    name: 'developer.dnb.no',
    description: {
      en: 'DNB er Norges største bank, ledende finanskonsern og et av landets mest internasjonale selskaper, med over 2 millioner personkunder, 8000 ansatte fordelt på kontorer i over 18 land. Banken jobber hver dag for at kunden skal få en enklere hverdag, og tilbyr et komplett tilbud av finansielle tjenester gjennom mobil, nettbank, bankkontoer og internasjonale kontorer.',
      no: 'DNB er Norges største bank, ledende finanskonsern og et av landets mest internasjonale selskaper, med over 2 millioner personkunder, 8000 ansatte fordelt på kontorer i over 18 land. Banken jobber hver dag for at kunden skal få en enklere hverdag, og tilbyr et komplett tilbud av finansielle tjenester gjennom mobil, nettbank, bankkontoer og internasjonale kontorer.',
    },
    image: 'dnb-developer-portal.jpg',
    urlName: 'dnb',
    technologies: [
      'Node',
      'TypeScript',
      'JavaScript',
      'Vue.js',
      'Jest',
      'Jenkins',
      'Git',
      'BitBucket',
      'Jira',
      'AuroraDB',
      'PostgreSQL',
      'DynamoDB',
      'NoSQL',
      'Lambda',
      'Swagger',
    ],
  },
  flir: {
    name: 'Teledyne FLIR',
    description: {
      en: 'Teledyne FLIR designs, develops, produces and distributes technologies that strive to create a more sustainable, effective and safe future by improving and extending human sensory capabilities through state-of-the-art intelligent sensorics and image processing solutions.',
      no: 'Teledyne FLIR designer, utvikler, produserer og distribuerer teknologier som streber etter å skape en mer bærekraftig, mer effektiv og tryggere fremtid ved å forbedre menneskelig oppfatning gjennom intelligente sensor- og bildebehandlingsløsninger i verdensklasse.',
    },
    image: 'flir.jpg',
    urlName: 'flir',
    technologies: ['Linux', 'Android', 'Unity', 'USB', 'Network'],
  },
  gintel: {
    name: 'Gintel',
    description: {
      en: 'Gintel AS is a Norwegian IT company producing software and applications within the field of telecommunication, that changes the way operatives compose and deliver services to business customers.',
      no: 'Gintel AS er et norsk IT-selskap som produserer programvare og applikasjoner innenfor telekommunikasjon, som endrer måten operatører komponerer og leverer tjenester til bedriftskunder.',
    },
    image: 'gintel.jpg',
    urlName: 'gintel',
    technologies: [
      'TypeScript',
      'Angular',
      'fxLayout',
      'Gerrit',
      'Redmine',
      'RegExp',
      'RxJS',
      'sCSS',
      'Swagger',
      'Java',
    ],
  },
  inatur: {
    name: 'Inatur',
    description: {
      en: "Inatur is Norway's largest online platform for selling hunting and fishing licenses, having offered their services for more than ten years. On their website, larger municipal bodies as well as hunting associations and ground owners can put hunting and fishing licenses out for sale. In this context, Inatur also offers the ability to put cabins out for rent, both for hunting and vacationing. Today, there are more than 1200 cabins registered for renting on Inatur's website.",
      no: 'Inatur er Norges største portal for salg av jakt og fiske, og har formidlet kjøp og salg av jakt- og fiskekort i over ti år. På nettsiden kan både større fjellstyrer, samt jegerforeninger og grunneiere legge ut jaktkort og fiskekort. I den sammenheng gis også muligheten til å leie ut hytter, både til bruk under jakt og til annen fritidsbruk. Per nå er det over 1200 hytter registrert til utleie på Inaturs nettside.',
    },
    image: 'inatur-2.jpg',
    urlName: 'inatur',
    technologies: ['Java', 'Spring', 'MongoDB', 'JavaScript', 'React'],
    content: {
      en: [
        {
          type: 'texts',
          value: [
            'Inatur has built a solid platform for delivering their services, and since 2019, KodeWorks has been a part of their modernizing process. Here, KodeWorks has further developed and modernized their already existing Java Spring backend. Using tools like React and Storybook, the frontend has been modularized, removing a lot of the strong couplings in the code base. This makes further development quicker, as well as easier to document and maintain.',
            'Technical consultancy is often a major part of our input to the projects we run. As consultants and developers, the people at KodeWorks have a good understanding of how to meet the expectations and needs of the end user, while still keeping the technical integrity of the code base and technical solutions in general at a high standard. Communicating the link between customer needs and technical integrity is key in enabling our clients to set goals that are ambitious, achievable and that serve a purpose. This is an important contribution in creating an environment where the business part and the technical part of Inatur builds on and strengthens each other - a requirement for furthering the process and accelerating development.',
          ],
        },
        {
          type: 'wideimage',
          value: {
            src: 'inatur-3.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            "Today, KodeWorks drives the process of further modernization within Inatur's technological portfolio. In this process, there is a balance in the usage of resources, between renewing existing solutions, and developing entirely new features. KodeWorks has been central in a comprehensive renewal across Inatur's tech stack, and laid a robust base for both the current operation and further development of Inatur's services. We wish to thank Inatur for a great collaboration, and look forward to continuing the process.",
          ],
        },
      ],
      no: [
        {
          type: 'texts',
          value: [
            'KodeWorks har vært med på Inaturs moderniseringsprosess siden 2019. Her har KodeWorks bidratt med å bygge videre på og modernisere deres eksisterende Java 8 Spring backend. Frontend er skrevet om fra å være strukturert med CommonJS og require()-import, til å bruke ES6-standardisert praksis, for eksempel modulhenting ved import/export. Der store deler av den eksisterende koden var bygd opp med backbone.js og mustache templates, skrives i dag frontend-koden i React, med Hooks og Storybook for bygging av standard UI-komponenter.',
            'Rådgivning på teknisk front er ofte en del av vårt arbeidsområde i prosjektene vi gjennomfører. Som konsulenter og utviklere har KodeWorks god forståelse for hvordan man imøtekommer sluttbrukerens forventninger og ønsker, og samtidig ivaretar den tekniske integriteten i kodebasen og tekniske løsninger generelt. Å kommunisere denne sammenhengen er viktig for å sikre at bedriften er i stand til å sette mål som både er ambisiøse, hensiktsmessige og gjennomførbare. Dette har bidratt til å skape en felles front på tvers av forretningsdelen og den tekniske delen av Inatur - en viktig forutsetning for videre prosess og akselerert utvikling.',
          ],
        },
        {
          type: 'wideimage',
          value: {
            src: 'inatur-3.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'I dag driver KodeWorks prosessen med modernisering av Inaturs teknologiportefølje videre. I en slik prosess finnes det en balanse mellom fornying av eksisterende løsninger og utvikling av nye features. KodeWorks har bidratt med omfattende fornying på tvers av Inaturs teknologistack, og lagt et robust grunnlag for både drift og videre utvikling av Inaturs tjenester. Vi takker for et godt samarbeid og ser frem til videre utvikling med Inatur.',
          ],
        },
      ],
    },
    published: true,
  },
  klp: {
    name: 'KLP',
    description: {
      en: 'Kommunal Landspensjonskasse Gjensidig Forsikringsselskap is an Oslo-based pension company that manages the pensions of municipal employees in Norway.',
      no: 'Kommunal Landspensjonskasse Gjensidig Forsikringsselskap er et Oslo-basert pensjonsselskap som administrerer pensjonsordningen til kommuneansatte i Norge.',
    },
    image: 'klp.jpg',
    urlName: 'klp',
    technologies: [
      'TypeScript',
      'React',
      'Enonic XP',
      'Webpack',
      'Universal Design',
      'Availability',
      'Micro Services',
    ],
  },
  kongsberg: {
    name: 'Kongsberg',
    description: {
      en: 'Kongsberg digital offers digital solutions for customers within the maritime sector, including oil and gas, with autonomy, smart data and augmented reality as key elements. KodeWorks’ main effort is placed within development of maritime simulations used among other things in personnel training systems for customers all over the globe. Kongsberg A&D is a global technology leader within defense, surveillance, space travel, airplane structure and airplane maintenance.',
      no: 'Kongsberg Digital tilbyr digitale løsninger for kunder innen maritim, olje og gass, med autonomi, smarte data, og augmented reality som fellesnevner. KodeWorks jobber med utvikling av maritim simulering brukt i blant annet treningssystemer for kunder over hele verden. Kongsberg A&D er en global teknologileder innen forsvar, overvåking, romfart, flystrukturer og flyvedlikehold.',
    },
    image: 'kongsberg.jpg',
    urlName: 'kongsberg',
    technologies: [
      'C',
      'C++',
      'C#',
      'Visual Studio',
      'Git',
      'Linux',
      'SNMP',
      'MIB',
      'Python',
      'SDL',
    ],
  },
  lawenforcementagency: {
    name: {
      en: 'Law Enforcement Agency',
      no: 'Rettshåndhevelsesbyrå',
    },
    description: {
      en: 'A law enforcement agency should prevent crime and maintain our safety as citizens. KodeWorks has been part of the development of two instrumental systems for a prominent Nordic law enforcement agency: System for Safety Alarm and Electronic Control; and System for Operative Law Enforcement.',
      no: 'Et rettshåndhevelsesbyrå skal forebygge og bekjempe kriminalitet samt skape trygghet i samfunnet. For å klare oppdraget er de avhengig av gode datasystemer som understøtter den daglige driften på en smidig og effektiv måte. KodeWorks har vært med å utvikle to svært viktige systemer for et prominent nordisk rettshåndhevelsesbyrå: System for Trygghetsalarm og Elektronisk Kontroll og System for Operativ Rettshåndhevelse. Begge systemene har bidratt til å bedre responstiden til byråets operasjonssentraler, trygge hverdagen til trygghetsalarmbærere, og gjort byråets patruljer mer effektive.',
    },
    image: 'lawenforcementagency.jpg',
    urlName: 'lawenforcementagency',
    technologies: [
      'Scala',
      'Java',
      'Akka',
      'Spring',
      'CSS',
      'JavaScript',
      'Backbone',
      'MSSQL',
      'Cassandra',
      'LDAP',
      'OpenVPN',
      'DevOps',
      'IBM WebSphere',
      'Tomcat',
      'Jetty',
    ],
    content: {
      en: [
        {
          type: 'texts',
          value: [
            "KodeWorks was engaged by the law enforcement agency in 2008. At this time, the agency's IT department was in the middle of modernizing their existing Safety Alarm system. In parallel, the entire IT system and interaction processes of the organization were receiving an increase in quality. The Safety Alarm had already in 2005 been proposed with an extension, with a corresponding legislation, by the name of Electronic Control. A general lack of technical solutions in the market, of the sort that could easily be integrated into existing operative systems, made it necessary for KodeWorks to assist in the integration of Safety Alarm and Electronic Control with the operative systems of the agency. This also necessitated a consideration of the case management system, as well as systems belonging to third party suppliers of equipment, as part of the development process.",
            "KodeWorks then developed the next generation of the Safety Alarm for the law enforcement agency. This was done by modifying the Android operative system, so that all peripherals were disabled, and all external communication was routed through an end-to-end encrypted communication protocol connecting to the agency's services. These modifications touched on firmware as well, so that even hardware buttons with existing functionality were reprogrammed. The adjustments enabled the agency to run a dedicated Safety Alarm-app on standard phones, while at the same time utilizing state-of-the-art positioning technology and programming environment. Today, all Safety Alarm units within the agency's jurisdiction are standard mobile phones running on software that is a continuation of the work that KodeWorks, together with the law enforcement agency, laid down during 2008-2016.",
          ],
        },
        {
          type: 'wideimage',
          value: {
            src: 'lawenforcementagency2.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'The Safety Alarm and Electronic Control project went on for several years. Some of the time was also put in similar projects, specifically within the agency’s operative portfolio. Operative Law Enforcement is the most central of the agency’s operative systems, and was developed already in 1994. Before KodeWorks entered the picture, the agency had begun the task of mapping parts of the Operative Law Enforcement to separate modules, and KodeWorks extended this work by describing how data flow and consistency between the modules were to be ensured. Deep integration with distributed databases for each of the agency’s organizational units enabled an event-driven architecture, where the modules were modeled as microservices. This was the beginning of the modernization of the law enforcement agency’s operative portfolio that is used today.',
          ],
        },
      ],
      no: [
        {
          type: 'texts',
          value: [
            'KodeWorks ble engasjert hos det prominente nordiske rettshåndhevelsesbyrået tilbake i 2008. På dette tidspunkt var byråets IT-avdeling midt i en omskriving av systemet Trygghetsalarm, parallelt med at et løft av hele organisasjonens IT system og samhandlingsprosesser pågikk. Trygghetsalarm hadde allerede tilbake i 2005 blitt forespeilet et tilleggsystem, og tilhørende lovgivning, i form av System for Elektronisk Kontroll. Mangel på tekniske løsninger i markedet som enkelt lot seg integrere i byråets operative systemer systemer, gjorde at KodeWorks måtte bistå i å integrere System for Trygghetsalarm og Elektronisk Kontroll de operative systemene, saksbehandlingssystemer, og systemer til tredjeparts leverandører av utstyr.',
            'KodeWorks utviklet neste generasjons Trygghetsalarm for rettshåndhevelsesbyrået. Dette ble gjort ved å modifisere Android operativsystemet slik at alle “peripherals” ble koblet ut, og all ekstern kommunikasjon ble rutet gjennom en kryptert ende-til-ende kommunikasjonsprotokoll inn til rettshåndhevelsesbyråets tjenester. Modifikasjonene gikk helt ned på firmware-nivå, slik at til og med hardware-knapper med en eksisterende betydning ble omprogrammert. Tilpasningene gjorde rettshåndhevelsesbyrået i stand til å kjøre en dedikert Trygghetsalarm-app på standard smarttelefoner, og utnytte state-of-the-art posisjoneringsteknologi og programmeringsmiljø. I dag er alle Trygghetsalarm-enheter innen rettshåndhevelsesbyråets jurisdiksjon standard smarttelefoner, med programvare som er en videreføring av arbeidet KodeWorks la ned sammen med rettshåndhevelsesbyrået i 2008 - 2016.',
          ],
        },
        {
          type: 'wideimage',
          value: {
            src: 'lawenforcementagency2.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'Prosjektet Trygghetsalarm og Elektronisk Kontroll gikk over flere år, og noe også lagt ned på nærliggende prosjekter, spesifikt innenfor den operative tjenesteporteføljen. Operativ Rettshåndhevelse er det mest sentrale operative systemet hos byrået, og ble utviklet allerede på 90-tallet. Rettshåndhevelsesbyrået hadde allerede før KodeWorks kom inn startet et kartleggingsarbeid for å splitte Operativ Rettshåndhevelse inn i moduler, og KodeWorks bygde videre på dette for å beskrive hvordan dataflyt og konsistens mellom modulene skulle sikres. Dyp integrasjon med distribuerte databaser for hver organisatoriske enhet muliggjorde en hendelsesdrevet arkitektur hvor modulene ble modellert som mikrotjenester, og dette ble starten på moderniseringen av den operative systemporteføljen som er i bruk i dag.',
          ],
        },
      ],
    },
    published: true,
  },
  'lildog-with-lilbit': {
    name: 'lildog with lilbit',
    description: {
      en: 'lilbit delivers products for tracking and monitoring pets, pursuing their goal of expanding the communication between pet and owner. They have achieved tremendous interest in current and future products and services with this ambition.',
      no: 'lilbit leverer GPS-sporing av kjæledyr med tilhørende digital plattform og app. Deres visjon er å kunne gi eiere informasjon om dyrets tilstand gjennom dets oppførsel. lilbit har oppnådd stor interesse blant hundeeiere i Norge og har ambisjoner om internasjonal ekspansjon.',
    },
    image: 'lilbit1.jpg',
    urlName: 'lildog-with-lilbit',
    technologies: ['Java', 'Spring', 'Android', 'iOS', 'JavaScript', 'ReactJS', 'Tailwind'],
    content: {
      en: [
        {
          type: 'texts',
          value: [
            'Through long-lasting collaboration, KodeWorks has yielded consultancy and knowledge boosting and development. Joachim Fasting in KodeWorks has been a central figure in this collaboration, especially within backend development and reducing complexity and costs in the technology stack.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'I have appreciated the trust I have gotten from our clients in choosing between different technical solutions. I have had the opportunity to work with many other technologies, from high-level to low-level.',
          },
        },
        {
          type: 'texts',
          value: [
            'lilbit is today a specialized company with ownership of its entire technology portfolio. An essential part of the process to achieve this has been cloud rationalization. Today, lilbit cloud services are built on the principle of infrastructure as code. Setup and configurations, resource usage and costs are thus transparent, modular and easy to test, develop and hand over. Another part has been moving the production chain to local environments, as opposed to most manufacturers.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'The biggest challenge was keeping several parallel tasks. Upholding a structured approach to the work at hand has therefore been instrumental.',
          },
        },
        {
          type: 'output',
          value:
            '"I have worked on several segments of the technology portfolio, and I hope to bring experience from all of it into further work."',
        },
        {
          type: 'image',
          value: {
            src: 'lilbit2.jpg',
            alt: 'lildog with lilbit',
          },
        },
        {
          type: 'texts',
          value: [
            'KodeWorks has also been part of cross-functional teams, with fluent communication between the developer and business sides - a property that in and by itself accelerates development and growth. On the business side of lilbit, the interest shown in products and services may best be described by a spread sale conducted on the public finance platform Folkeinvest. Lilbit collected 28 million NOK, thus marking a new record in Norwegian public spread sales. KodeWorks has further provided knowledge sharing on specific domains involved in the development of lilbit. This includes taking part in the hiring process of lilbit employees.',
            'lilbit CEO Morten Sæthre describes Joachim from KodeWorks as the first truly autonomous developer he met who sees weaknesses and corresponding solutions in a system and implements these as they emerge. Today, Joachim works on developing the backend. lilbit develops and maintains backend solutions for both the IoT units and the cloud services. This is important since lilbit units contain sensors to facilitate expanded communication between a dog and its owner.',
            'We at KodeWorks are thankful to be collaborating with lilbit on this and look forward to being part of the development in the time to come.',
          ],
        },
      ],
      no: [
        {
          type: 'texts',
          value: [
            'lilbit leverer produkter for monitorering av kjæledyr, med målsetningen om å utvide kommunikasjonen mellom kjæledyr og eier. Med denne ambisjonen har de oppnådd stor interesse for nåværende og kommende produkter og tjenester. Gjennom et langt samarbeid har KodeWorks bidratt med rådgivning og kompetansebygging, såvel som utvikling. Joachim Fasting i KodeWorks har stått sentralt i dette, og har spesielt bidratt på backend og i arbeidet med å redusere kompleksitet og kostnader i tech-stacken.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'Det jeg har satt mest pris på er tilliten fra kunden med tanke på valg av tekniske løsninger.  Jeg har hatt muligheten til å jobbe med mange ulike teknologier, fra høyt til lavt i stacken.',
            author: 'Joachim Fasting',
          },
        },
        {
          type: 'texts',
          value: [
            'lilbit er i dag en spesialisert bedrift med eierskap til hele teknologiporteføljen. En viktig del av å oppnå dette har vært en rasjonalisering av skyoppsettet. I dag bygger skyoppsettet på prinsippet om infrastruktur som kode. Oppsett og konfigurasjon, ressursbruk og kostnader er dermed transparent, modulært og lett å teste, videreutvikle og overlevere. Ellers har lilbit hatt fokus på å flytte produksjonskjeden lokalt, til forskjell fra hvordan mange leverandører gjør det.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'For min egen del har den største utfordringen vært at jeg til tider har hatt mange tråder å holde i samtidig, som et resultat av at jeg har jobbet på flere deler av stacken. Det har derfor vært viktig å opprettholde en strukturert tilnærming til arbeidet.',
            author: 'Joachim Fasting',
          },
        },
        {
          type: 'output',
          value:
            'Ettersom at jeg har jobbet med så mye forskjellig, håper jeg å ta med meg all erfaring jeg kan videre.',
        },
        {
          type: 'image',
          value: {
            src: 'lilbit2.jpg',
            alt: 'lildog with lilbit',
          },
        },
        {
          type: 'texts',
          value: [
            'KodeWorks har i lilbit også vært med på bygging av kryssfunksjonelle team, med god kommunikasjon mellom utviklings- og forretningssiden - en egenskap som akselererer utvikling og vekst. På forretningssiden lar interessen for lilbits produkter seg kanskje best gjenspeile i et spredningssalg som ble gjort gjennom folkefinansieringsplattformen Folkeinvest, der det ble hentet inn 28 millioner kroner, noe som er ny norsk rekord. Videre har KodeWorks bidratt med bygging av spesifikk kompetanse for utvikling innad i lilbit. Dette inkluderer både kunnskapsdeling og deltakelse i ansettelsesprosessen.',
            'CEO i lilbit, Morten Sæthre, beskriver Joachim som sitt første møte med en autonom utvikler; noen som ser svakheter og tilsvarende løsninger i et system, og implementerer disse på løpende bånd. I dag jobber Joachim med utvikling av backend. lilbit utvikler og drifter backend til både IoT-enhetene og til skyløsningene. Dette er viktig, da produktene fra lilbit inneholder utvidet sensorikk som vil legge til rette for en forlenget kommunikasjon mellom hund og eier.',
            'KodeWorks er takknemlige for rollen som samarbeidspartnere her, og vi ser videre frem til å være en del av utviklingen i tiden som kommer.',
          ],
        },
      ],
    },
    published: true,
  },
  mollerit: {
    name: 'Møller IT',
    description: {
      en: 'Møller IT, part of the Møller Mobility Group, is the leading car group in the Nordic and Baltic countries with over 60 dealers and 750,000 customers. The company has traditionally operated within new car sales, leasing, financing, used car sales, and now more recently other types of mobility services.',
      no: 'Møller IT, del av Møller Mobility Group, er det ledende bilkonsernet i Norden og Baltikum med over 60 forhandlere og 750 000 kunder. Foretaket har tradisjonelt drevet med nybilsalg, leasing, finansiering, bruktbilsalg, og nå i nyere tid andre typer mobilitetstjenester.',
    },
    image: 'mollerit.jpg',
    urlName: 'mollerit',
    technologies: [
      'Scala',
      'Java',
      'CQRS',
      'Kafka',
      'JavaScript',
      'React',
      'Redux',
      'Elasticsearch',
    ],
  },
  nomono: {
    name: 'Nomono',
    description: {
      en: 'Cloud-based audio collaboration and processing built specifically for podcasters, broadcast journalists, and audio storytellers.',
      no: 'Nomono er en podcastplattform som tilbyr løsninger for samarbeid rundt behandling av audio. KodeWorks utvikler en app som muliggjør dette slikt samarbeid på en intuitiv måte.',
    },
    image: 'nomono.jpg',
    urlName: 'nomono',
    technologies: [
      'iOS',
      'Swift',
      'Xcode',
      'App Store',
      'SwiftUI',
      'Combine',
      'Auth0',
      'Bluetooth',
      'BLE',
      'CoAP',
    ],
  },
  obos: {
    name: 'OBOS',
    description: {
      en: 'OBOS plays a big role in the Norwegian housing and property market, and offers customers - among other services - an easier path to the housing market through partial housing ownership. OBOS is also behind Nabohjelp, an app that makes it easier to ask your neighbors for assistance. KodeWorks assists in both maintenance and development of the app, which is written in native iOS and Android.',
      no: 'OBOS er en sentral aktør i det norske bolig- og eiendomsmarked, og tilbyr kunder blant annet lettere veier inn i boligmarkedet gjennom sin ordning for deleierskap. OBOS står bak Nabohjelp, appen som skal gjøre det enklere å spørre naboen om hjelp. KodeWorks bistår med både vedlikehold og videreutvikling av appen som er skrevet i native iOS og Android.',
    },
    image: 'obos.jpg',
    urlName: 'obos',
    technologies: [
      'iOS',
      'Swift',
      'UIKit',
      'iOS',
      'Android',
      'Java',
      'Swift',
      'Kotlin',
      'Vue',
      'Splunk',
    ],
  },
  pexip: {
    name: 'Pexip',
    description: {
      en: 'The start of 2020 was a world-changing era with the covid-19 pandemic. Relationships were maintained through strict official guidelines, which revolutionized the business. Less travel and fewer face-to-face meetings were a new reality, and video communication was the new standard. Pexip is a company with extensive experience in simplifying and optimizing video conferencing.',
      no: 'Starten på 2020 bemerket seg med covid-19-pandemien som en periode med store endringer for folk ved at mellommenneskelige relasjoner ble underlagt strenge offisielle retningslinjer. For leverandører av videoteknologi, som Pexip, resulterte dette i økende etterspørsel. Mindre reiser og færre møter ansikt til ansikt var en ny realitet, og videokommunikasjon var den nye standarden. Pexip er et selskap med lang erfaring i å forenkle og optimalisere videokonferanser, og KodeWorks assisterer i å se på forbedring av ytelse samt tilpasning til mobile flater.',
    },
    image: 'pexip.jpg',
    urlName: 'pexip',
    technologies: ['Android', 'iOS', 'Gstreamer', 'Kotlin', 'Swift', 'UIKit', 'C'],
  },
  remarkable: {
    name: 'Remarkable',
    description: {
      en: 'reMarkable is a Norwegian startup developing a tablet for writing and drawing, and aiming to give the user a sensation of writing on paper. The unique tablet is designed for use in academia as well as in professional settings. KodeWorks assists in development of reMarkable’s complex and international web platform.',
      no: 'reMarkable er en norsk startup som utvikler en tablet for skriving og tegning, og som skal gi brukeren følelsen av å skrive på papir. Den unike tableten er designet for bruk i akademia så vel som i yrkessammenheng. KodeWorks bidrar til utvikling av den komplekse og internasjonale webplattformen til reMarkable.',
    },
    image: 'remarkable-2.jpg',
    urlName: 'remarkable',
    technologies: ['React', 'Node', 'TypeScript', 'Sanity', 'Google Cloud Platform'],
  },
  sesam: {
    name: 'Sesam',
    description: {
      en: "Sesam is KodeWorks' own internal door lock and doorbell system, and is developed from the bottom up and maintained in full by KodeWorks.",
      no: 'Sesam er KodeWorks egenutviklede interne system for dørlås og ringeklokke. Både hardware og software er utviklet helt fra scratch av KodeWorks.',
    },
    image: 'Sesam-front.jpg',
    extras: {
      en: 'When between customer assignments in KodeWorks, the focus is on professional and academic development. At the same time, some real value creation can also be achieved. At the KodeWorks office in Oslo, Jan and Simen received an interesting task in modernizing the existing door lock system.',
      no: 'Når man er mellom kundeoppdrag i KodeWorks, er faglig utvikling i fokus. Samtidig kan også ekte verdiskapning være en del av det faglige opplegget. På kontoret i Oslo fikk Jan og Simen en interessant oppgave i det å modernisere dørlåssystemet på huset.',
    },
    urlName: 'sesam',
    technologies: [
      'Low voltage',
      'Arduino',
      'C++',
      'MQTT',
      'Docker',
      'Node',
      'NextJS',
      'TypeScript',
      'React',
    ],
    content: {
      en: [
        {
          type: 'texts',
          value: [
            'Using conventional keys in an office setting has multiple downsides. Someone needs to be in control over which physical keys are in whose possession, renewing these if they are somehow lost. Loss of keys also makes it difficult for individuals to get access to the office, and could potentially constitute a serious security risk. Today’s existing solutions for door lock control offer code locks, key cards, alarm control via apps and related functionality, but also require that one physically intervenes with the doors in the building. Since our goal was a solution tailored to our needs, while also doing as little physical changes as possible to the existing door lock system, the most promising alternative turned out to be creating the solution from the bottom up ourselves.',
            'Jan and Simen thus started the project with the goal of creating a solution that could allow for office door lock control using only a web app. It then became necessary to build a product from sketch, that on one end could join the circuits to two door locks, while also registering someone ringing the doorbell, and on the other end could offer the end user an intuitive user interface for this specific action. And so our own door lock system, Sesam, saw the light of day.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sesam-2.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'In the existing physical implementation, the locks for the inner and outer door were deactivated momentarily by joining two different electrical circuits. The circuit for the inner door was already exposed through an existing relay, and the outer door circuit could be accessed through the office calling system. After some consultation with Thomas at KodeWorks, three soldering points to the calling system PCB were identified. One for grounding, one for joining the door lock circuit and one that would receive voltage when the doorbell was rung. It was then decided that these circuits would be joined using relays controlled by microcontrollers, such as an Arduino model. The Arduino controlling the outer door, whose close proximity to the calling system allowed for listening to the doorbell signal, was also set up to register when this signal was active, communicating this to the Sesam backend.',
            'And so the solution for controlling the door locks and registering the doorbell was in place. On the local office network, three components were communicating - the Sesam server and two Arduinos. For this communication, the MQTT protocol was chosen. MQTT is typically preferred in IoT solutions with lots of units and large volumes of data, due to it being a relatively lightweight protocol, and since the MQTT pub/sub routine of a single unit runs independent of what other units are simultaneously connected. At the same time, MQTT offers high adjustability for parameters that increase the integrity of the message transmission, or keeps messages stored upon loss of connection. This lowers the performance in bigger systems, but is useful in small scale applications where the integrity of the message transfers must have some sort of guarantee.',
            'The backend uses Node.js with Express, and offers a RESTful HTTP API to the frontend, which is a web app written using React. NextJS is used to offer all pages in the web app, which follows the new visual profile of KodeWorks. Further on, the backend communicates messages to the microcontrollers. A local MQTT broker runs in its own Docker container, and distributes messages on doorbells, unlocking and locking, and heartbeat messages back and forth between the network components.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sesam-3.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'For authentication and authorization, Google OAuth is used, so that only users with a valid KodeWorks mail are able to login and access Sesam. This was configured in Google Cloud Console, and Google Admin SDK was then used to check whether or not a user is part of either the Trondheim or the Oslo office in KodeWorks. This makes sure that only people with an actual connection to the company gains access to unlocking the doors. CI7CD Pipelines in Gitlab was used to automatically deploy the app to the server.',
            'When a user presses the unlock button in the app, there is an expectation of getting some visual clue that the process of opening the door has begun, and has succeeded. In Sesam, this is done by the backend receiving a message from the given microcontroller that the door has been unlocked, which the backend then furthers to the frontend. The unlock button is then itself locked until the message is passed that the door is locked. This communication is done using Websockets, and a natural extension of this was making sure that the unlock button was locked for all users if one user attempted to unlock the door. One can of course make the case that this sort of real time update for an app that controls two doors in the same office isn’t highly necessary, but on the other hand, this functionality reflects user friendliness as a guiding principle, and is always worth keeping in mind. An admin view was also developed. This gives select users access to statistics on the usage of Sesam, as well as the ability to open/close the entire service.',
            'Finally, an essential part of this project has been the effort in planning and describing the product before the start of the project. At the time of project start, Jan and Simen were presented with a very well prepared project description. This contained a clear description of the product, as well as functional and non-functional requirements for both the product and the project execution. Such a collection of requirements and descriptions gives the developer an excellent basis for asking critical questions, presenting alternative possibilities and creating a coherent image of the product in an early phase of the project. This facilitates a imperative process and productive communication. In summation, Jan and Simen can therefore look back at an instructive and well executed project.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sesam-1.jpg',
          },
        },
      ],
      no: [
        {
          type: 'texts',
          value: [
            'Bruken av konvensjonelle nøkler i en kontorsammenheng medfører ulemper. Man må ha oversikt over hvilke personer som har nøkler, og fornye disse om de går tapt. Tap av nøkler gjør det vanskeligere for enkeltpersoner å få tilgang på kontoret, og kan i verste fall utgjøre en stor sikkerhetsrisiko.',
            'Dagens eksisterende løsninger for styring av dørlåser tilbyr kodelåser, adgangskort, alarmstyring via nettapp og annen funksjonalitet, men krever samtidig at man går fysisk til verks på dørene i bygget. Da vårt mål var en løsning tilpasset våre behov, og med lavest mulig grad av utvidelse av fysiske låser, dører og kretser i bygget, fremsto det å lage løsningen selv fra bunnen av som det beste alternativet.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sesam-2.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'Jan og Simen gikk dermed inn i prosjektet med mål om å lage en løsning som kunne styre dørlåsene på kontoret med en nettapplikasjon. Det ble altså nødvendig å bygge en løsning fra bunnen, som i én ende kunne slutte kretsene til to dørlåser og lese dørklokkesignalet, og på den andre enden kunne tilby sluttbrukeren et intuitivt brukergrensesnitt for nettopp dette.',
            'Dermed skulle altså Sesam, vårt eget dørlåssystem, se dagens lys.',
            'Etter daværende løsning ble dørlåsene for indre og ytre dør styrt ved å slutte to forskjellige elektriske kretser. Krets for indre dør lå eksponert i et eget eksisterende relé, og krets for ytre dør kunne aksesseres via callinganlegget på huset.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sesam-3.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'Etter litt konsultasjon med Thomas i KodeWorks ble tre loddepunkter på PCBen til callinganlegget identifisert. Ett til jording, et som slutter kretsen til dørlåsen og et som settes under spenning når dørklokka aktiveres fra utsiden. Det ble bestemt at disse kretsene skulle sluttes ved bruk av reléer, og en enkel måte å gjøre dette på er å styre disse feks med en Arduino. Dermed ble løsningen å sette opp to Arduinoer med hvert sitt relé, en til hver dør. Arduinoen for ytre dør, som med sin tilknytning til callinganlegget også kunne lytte pål dørklokkesignalet, ble også koblet opp til å registrere når dette signalet er aktivt, for å kunne melde dette videre til backend.',
            'Dermed var løsningen for å kontrollere dørlåser og registrere dørklokkesignal på plass. På lokalnettet på huset var det altså tre komponenter som nå skulle kommunisere - Sesam-serveren og to Arduinos. Til kommunikasjon mellom disse komponentene ble MQTT-protokollen valgt. MQTT blir gjerne valgt i IoT-løsninger med mange enheter og store datamengder da den i utgangspunktet er en lettvekt-protokoll der pub/sub-rutinen hos en enkeltenhet skjer uavhengig av andre enheters tilkobling til en sentral MQTT-broker. Samtidig tilbyr MQTT høy justerbarhet for parametre som øker integriteten i dataoverføringen eller tar vare på pakker ved tapt forbindelse. Dette senker ytelsen i større systemer, men er nyttig i småskala applikasjoner der integriteten i dataoverføringen må kunne garanteres.',
            'Backenden bruker Node.js med Express, og tilbyr et RESTful HTTP API til frontend, som er en nettapplikasjon skrevet med React. NextJS blir brukt til å tilby alle sider i nettappen, som følger det nye visuelle designet til KodeWorks. Videre kommuniserer backenden beskjeder til mikrokontrollere via MQTT-protokollen. En lokal MQTT-broker kjører i en egen Docker-container, og distribuerer meldinger om dørklokker, åpning og låsing av dører, og heartbeat-meldinger frem og tilbake mellom mikrokontrollere og backend.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sesam-1.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'Til autentisering og autorisering blir Google OAuth brukt, slik at kun brukere med KodeWorks-mail kan logge seg inn. Dette ble satt opp i Google Cloud Console, og Google Admin SDK ble deretter brukt til å sjekke om en bruker er en del av enten Trondheim eller Oslo-gruppa i KodeWorks. Dette er for å sikre at kun personer med faktisk tilknytning til bedriften får tilgang til å løse opp dørene. Gitlabs CI/CD Pipelines er blitt brukt til å deployere appen automatisk til serveren.',
            'Når en bruker trykker på døråpningsknappen, forventer man å få en visuell tilbakemelding på at noe skjer. I Sesam er dette gjort ved at backend mottar en melding fra den aktuelle mikrokontrolleren i dét døra åpnes, og dermed låser knappen i appen helt til backend mottar melding om at dørlåsen igjen er lukket. Denne kommunikasjonen gjøres med Websockets, og en naturlig videreføring av dette ble at knappen hos samtligere brukere låses dersom én bruker aktiverer knappen i sin klient. En kan naturligvis argumentere for at sanntidsoppdatering på en app som styrer to dører i samme lokale ikke er høyst nødvendig, men på den annen side gjenspeiler det brukervennlighet som prinsipp, og det er alltid lurt å ha i hodet. Et eget administratorvindu ble også utviklet. Dette gir enkelte brukere tilgang til statistikk på bruken av Sesam, samt å stenge/åpne hele tjenesten for bruk.',
            'Til slutt har dessuten en svært viktig del av prosjektet vært jobben som ble gjort i forkant. Ved prosjektstart ble Jan og Simen presentert en svært godt utarbeidet prosjektbeskrivelse. Denne inneholdt en klar beskrivelse av produktet, samt funksjonelle og ikke-funksjonelle krav til både produkt og gjennomføring av prosjektet. En såpass godt formulert samling av krav og rammer gir utvikleren muligheten til å stille kritiske spørsmål, presentere alternative løsninger og danne seg et helhetlig bilde av produktet i innledningsfasen, og legger til rette for en synlig prosess og produktiv kommunikasjon. Jan og Simen kan dermed se tilbake på et lærerikt prosjekt og godt gjennomført prosjekt.',
          ],
        },
      ],
    },
    published: true,
  },
  skandiaenergi: {
    name: 'SkandiaEnergi',
    description: {
      en: 'SkandiaEnergi develops solutions for the power market of the future. They offer unique and smart energy solutions for solar power and energy saving. KodeWorks assists in developing an app that makes daily life as a customer more manageable, and that offers smart solutions for power management and electric vehicle charging.',
      no: 'SkandiaEnergi utvikler løsninger for fremtidens strømmarked. De tilbyr unike og smarte energiløsninger for solstrøm og energisparing. KodeWorks bistår til å utvikle en app som gjør hverdagen som kunde mer oversiktlig, og som tilbyr smarte løsninger for strømstyring og lading av elbil.',
    },
    image: 'skandiaenergi.jpg',
    urlName: 'skandiaenergi',
    technologies: [
      'Android',
      'Kotlin',
      'iOS',
      'Swift',
      'Xcode',
      'App Store',
      'SwiftUI',
      'Lokalise',
      'Firebase',
      'Swift Package Manager',
      'Bambora',
      'UIKit',
      'Data visualization',
    ],
  },
  statkraft: {
    name: 'Statkraft',
    description: {
      en: 'Statkraft is Europe’s largest producer of renewable energy and a global company within power market operations. KodeWorks has assisted with coordination and development of a common platform for booking, risk evaluation and reporting of power purchase agreements.',
      no: 'Statkraft er Europas største produsent av fornybar energi og et globalt selskap innen energimarkedsoperasjoner. KodeWorks har bistått med koordinering og utvikling av en samlet plattform for booking, risikoevaluering og rapportering av kraftkjøpsavtaler.',
    },
    image: 'statkraft.jpg',
    urlName: 'statkraft',
    technologies: [
      'Python',
      'Pandas',
      'Beacon',
      'Azure',
      'Azure AD',
      'Azure Enterprise Applications',
      'GitLab',
      'ELK',
      'Grafana',
      'Prometheus',
      'MongoDB',
      'HashiCorp Vault',
    ],
  },
  sunlitsea: {
    name: 'Sunlit Sea',
    description: {
      en: 'Sunlit Sea develops technology for floating solar cell installations that opens up a completely new market for solar cells at sea. KodeWorks develops sensor solutions for solar cell installation, as well as monitoring and enrichment of data from the sensors to optimize production and maintenance.',
      no: 'Sunlit Sea utvikler en ny type teknologi for flytende solcelleinstallasjoner som åpner et helt nytt marked for solceller på hav. KodeWorks utvikler sensorløsninger for solcelleinstallasjonen, samt overvåking og berikning av data fra sensorene for å optimalisere produksjon og vedlikehold.',
    },
    image: 'sunlitsea1.jpg',
    urlName: 'sunlitsea',
    technologies: [
      'Embedded',
      'C',
      'Arduino',
      'Scala',
      'Akka',
      'Python',
      'AWS',
      'Influx',
      'React',
      'ThreeJS',
      'Tailwind',
    ],
    content: {
      en: [
        {
          type: 'texts',
          value: [
            'With their extensive ambitions, Sunlit Sea is a central player in the field of floating solar power. A glance at the evolution they have undergone across their entire technology stack supports this.',
            'A team from KodeWorks has been central to this development, and is today working on segments like hardware design and software development for monitoring, maintenance and optimization of power production. Rune in KodeWorks has worked on the electronics and sensorics of the float modules, and shares his experience in Sunlit Sea',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'In Sunlit Sea, I’ve gotten the chance to discover solutions to problems. I’m not just implementing a function to satisfy a unit test, but instead I get to solve real problems, which requires me to utilize my full professional knowledge. I’m quite simply an inventor, producing real stuff. Here, I’m free to explore possible solutions and together with my colleagues, we find out how to e. g. establish a data stream of moisture measurements from the inside of a metal construction.',
          },
        },
        {
          type: 'texts',
          value: [
            'As co-founder of Sunlit Sea, KodeWorks has been part of the picture from the very beginning, in 2019. As a startup with huge ambitions, and in a demanding, interdisciplinary field that has yet to mature, there are a number of challenges that need to be overcome in order to write a success story.',
          ],
        },
        {
          type: 'output',
          value:
            'As co-founder of Sunlit Sea, KodeWorks has been part of the picture from the very beginning, in 2019.',
        },
        {
          type: 'texts',
          value: [
            'Sunlit Sea has on several occasions worked with KodeWorks on this, and we have contributed in a broad range of areas. From 3D renderings of production and deployment, and a website with Sunlit Sea’s Smart Quoter service, down to the sensor- and communication electronics put on every module, KodeWorks has designed and implemented necessary solutions from the ground up.',
            'Through a collaborative partnership and mutual knowledge sharing, KodeWorks has been essential for Sunlit Sea’s technological edge.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'In Sunlit Sea, I am solely accountable for the quality of the solutions I develop, and there is a lot of responsibility on the shoulders of each developer. There is no relying on other team members to catch weaknesses in my solutions, unless I specifically ask for a peer review of the systems. We all simply have to identify possible weaknesses in the systems and procedures that we develop, and ensure that more than one set of eyes are scanning it all for flaws.',
          },
        },
        {
          type: 'texts',
          value: [
            'The engineering solutions that make up the base for the solar module, must meet requirements that evolve as the product moves towards the commercialization stage. That also applies for the processing and presentation of collected sensor data, and the use of data for further prediction of performance and behavior in various environments. This goes on in parallel with how Sunlit Sea pushes forward in competitiveness and scaling of production.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'Before Sunlit Sea, I had little experience with how to define systems and procedures for getting the production of an actual product up and running. It has been very interesting to learn what works when designing a handful of prototypes, and what needs to be changed when moving towards mass production of the same product. An extremely important tool I keep in my mental toolbox is the ability to design a product in a way that allows a factory to produce it, without me being involved in the actual production.',
          },
        },
        {
          type: 'texts',
          value: [
            'Broad and documentable domain expertise is important in a relatively young industry. For the purpose of extending specific domain knowledge, Sunlit Sea today works towards identifying the performance ratio of the solar panels in different sea states given a set of waves, in a collaboration between KodeWorks and IFE to combine historical weather data with bespoke sensorics and processing technology. This work is part of state-of-the-art research within the field, and is laying the foundation for speveral scientific publications from IFE.',
            'KodeWorks continues to develop solutions for Sunlit Sea, and looks forward to collaborating on solving many exciting challenges in the future.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sunlitsea2.jpg',
          },
        },
      ],
      no: [
        {
          type: 'texts',
          value: [
            'Med omfattende ambisjoner innen flytende solkraft er Sunlit Sea en sentral aktør innen feltet. Om man ser på utviklingen de har hatt på tvers av hele teknologi-stacken, underbygges dette ytterligere.',
            'KodeWorks har stått sentralt i denne utviklingen, og jobber i dag på fronter som hardwaredesign og softwareutvikling for monitorering, vedlikehold og optimalisering av kraftproduksjon. Rune Holmgren i KodeWorks har jobbet med elektronikk og sensorikk i flottørmodulene, og forteller om sin erfaring fra Sunlit Sea.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'I Sunlit Sea har jeg fått muligheten til å få jobbe med å finne løsninger på problemer. Jeg skal ikke bare implementere en funksjon som gir en grønn unit test, men får istedenfor ekte problemer som jeg kan bruke den fulle bredden i fagkunnskapen min til å løse. Man blir rett og slett oppfinner på jobb, og skal lage ekte ting. Jeg står da fritt til å utforske mulige løsninger og sammen med kollegaene mine finner vi ut hvordan vi f.eks. får etablert en datastrøm med fuktmålinger fra innsiden av en metallkonstruksjon.',
          },
        },
        {
          type: 'texts',
          value: [
            'KodeWorks har som medgrunnlegger av Sunlit Sea vært med fra starten i 2019. Som startup med store ambisjoner, og i et krevende, tverrfaglig felt som enda ikke har modnet, finnes mange barrierer som må overkommes for å kunne skrive en suksesshistorie.',
          ],
        },
        {
          type: 'output',
          value:
            'KodeWorks har som medgrunnlegger av Sunlit Sea vært med fra starten i 2019. Som startup med store ambisjoner, og i et krevende, tverrfaglig felt som enda ikke har modnet, finnes mange barrierer som må overkommes for å kunne skrive en suksesshistorie.',
        },
        {
          type: 'texts',
          value: [
            'Sunlit Sea har i flere omganger samarbeidet med KodeWorks om dette og vi har bidratt innen et bredt spekter av områder. Fra 3D-renderings av produksjon og deployment, og nettside med Sunlit Sea’s Smart Quoter-tjeneste, ned til sensor- og kommunikasjonselektronikken som sitter på hver modul, har KodeWorks designet og implementert nødvendig teknologi fra bunnen av.',
            'Gjennom godt samarbeid og gjensidig kompetansebygging har KodeWorks vært essensielle for Sunlit Sea’s informasjonsteknologiske fortrinn.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'I Sunlit Sea står jeg selv for kvaliteten til løsningene jeg utvikler, og det er mye ansvar på skuldrene til hver utvikler. Det er ikke mulig å støtte seg på at resten av teamet skal fange opp svakheter i løsningene mine med mindre jeg aktivt ber om hjelp til gjennomgang av systemene. Vi må alle sammen rett og slett selv identifisere mulige svakheter i systemene og prosedyrene vi utarbeider og sørge for at flere sett med øyne ser over alt som kan ha svakheter.',
          },
        },
        {
          type: 'texts',
          value: [
            'De tekniske løsningene som danner grunnlaget for solcellemodulen svarer til krav som skjerpes etterhvert som produktet går mot kommersialisering. Det samme gjelder prosessering og presentasjon av innhentet data, og bruken av denne til videre predikasjon av ytelse og oppførsel i varierende omgivelser. Dette skjer i takt med at Sunlit Sea avanserer på produksjonsskalering og konkurransedyktighet.',
          ],
        },
        {
          type: 'quote',
          value: {
            content:
              'Før Sunlit Sea hadde jeg lite erfaring med å lage systemer og prosedyrer for å få opp produksjon av et ekte produkt. Det har vært svært interessant å lære seg hva som går bra når du lager en håndfull prototyper, og hva man da må endre når man sikter seg inn mot masseproduksjon av det samme produktet. Et kjempeviktig verktøy jeg har med meg videre i min mentale verktøykasse er evnen til å designe et produkt slik at en fabrikk kan lage produktet, uten at jeg selv er involvert i noen av stegene.',
          },
        },
        {
          type: 'texts',
          value: [
            'Bred og dokumenterbar domenekunnskap er viktig i en relativt ung industri. I den hensikt jobber Sunlit Sea med å identifisere solcellepanelenes ytelsesgrad i ulike havtilstander gitt et sett bølger, i et samarbeid mellom KodeWorks og IFE for å kombinere historisk data med egen sensor- og prosesseringsteknologi. Dette arbeidet inngår i state-of-the-art forskning innen feltet og vil bli kilden til flere vitenskapelige publiseringer fra IFE.',
            'KodeWorks fortsetter å levere utviklingstjenester for Sunlit Sea og ser fram til å sammen løse mange spennende utfordringer i tiden framover.',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'sunlitsea2.jpg',
          },
        },
      ],
    },
    published: true,
  },
  technipfmc: {
    name: 'TechnipFMC',
    description: {
      en: 'As a worldwide energy service company, TechnipFMC has large customers in Norway. Sensors are used for real-time monitoring of flow through installations, and heavy mathematical data modeling to optimize operations. KodeWorks assists in increasing the scalability and performance of the application portfolio, as well as modernizing the deployment system in the cloud.',
      no: 'Som et verdensomspennende energi-serviceselskap har TechnipFMC store kunder i Norge. Sensorer brukes til sanntids overvåking av flyt gjennom installasjoner, og tung matematisk datamodellering for å optimalisere driften. KodeWorks bistår med å øke skalerbarhet og ytelse i applikasjonsporteføljen, samt å modernisere systemet for deployment i skyen.',
    },
    image: 'technipfmc.jpg',
    urlName: 'technipfmc',
    technologies: ['Java', 'Spring', 'Maven', 'Influx', 'CQRS'],
  },
  thalesnorway: {
    name: 'THALES Norway',
    description: {
      en: 'Thales Group is a French, multi-national company that designs and builds electronic systems and delivers services for aviation, defense, transport and security.',
      no: 'Thales Group er et fransk multinasjonalt selskap som designer og bygger systemer og leverer tjenester for luftfart, forsvar, transport og sikkerhet.',
    },
    image: 'thales.jpg',
    urlName: 'thalesnorway',
    technologies: [
      'Python',
      'JavaScript',
      'React',
      'FastAPI',
      'SQLAlchemy',
      'Oracle Database',
      'C++',
      'Linux',
      'Conan',
      'Rust',
    ],
  },
  thomsonreuters: {
    name: 'Thomson Reuters',
    description: {
      en: 'Through various digital platforms for energy and commodity trading, Thomson Reuters delivers analysis tools intended for investors and companies. The information presented in these solutions is time-critical, the amounts of data are large, the sources are many and the algorithms are complex.',
      no: 'Gjennom ulike digitale plattformer for energi- og råvarehandel leverer Thomson Reuters analyseverktøy beregnet på investorer og firmaer. Informasjonen som presenteres i disse løsningene er svært tidskritisk, datamengdene er store, kildene er mange og algoritmene er komplekse.',
    },
    image: 'thomsonreuters/blockchain.jpg',
    urlName: 'thomsonreuters',
    technologies: ['Java', 'Akka', 'VertX', 'Oracle SQL', 'Hbase'],
    content: {
      en: [],
      no: [
        {
          type: 'heading',
          value: 'Reuters: By the (milli)second',
        },
        {
          type: 'texts',
          value: [
            'Thomson Reuters er et kanadisk multimediaselskap med HQ i Toronto, har kontorer i hele verden og er en av verdenslederne innen informasjonsformidling. Kundene av Thomson Reuters Point Carbon inkluderer banker, tradere, porteføljeforvaltere, selskaper og myndigheter; kort sagt alle med behov for dyp innsikt på tvers av karbon-, forsynings-, olje-, gass- og industrimarkedene. Data fra mange ulike kilder innhentes, behandles og berikes ved å ses i sammenheng. Prosjektet gikk ut på å tilgjengeliggjøre utsnitt av dataene for klienter på en rask og effektiv måte.',
            'KodeWorks ble engasjert hos Reuters for å bidra i utvikling av et nytt web-grensesnitt for tidseffektive klientforespørsler om prognoser på energidata. Sammen med en prosjektleder fra Thomson og to utviklere fra et annet konsulentfirma',
          ],
        },
        {
          type: 'image',
          value: {
            src: 'thomsonreuters/buildings.jpg',
          },
        },
        {
          type: 'heading',
          value: 'Når millisekundene teller',
        },
        {
          type: 'texts',
          value: [
            'Oppgaven fra Reuters var “enkel”; make it faster! I denne bransjen kan millisekunder være forskjellen på store tap eller heftig gevinst. På tidssensitiv informasjon av ulike typer finansielle transaksjoner var målet near-realtime nivå. Stor kunde, klare instrukser og store økonomiske betydninger for det man leverer, kan slå ut høyt på stressfaktoren.',
            'Store utfordringer, kan også bety gode utfordringer. En god strategi og ledelse kan løse det meste. Eirik Larsen som var vår mann på jobben forteller at det mest positive med prosjektet var at gjengen i Reuters var mennesker med skikkelig driv og passion for faget. Dette har stor betydning for prosessen.  Om ikke man fikk løst problemene ved skrivebordet og tastaturet, kunne det komme et godt forslag ved kaffeautomaten; “Hva om vi kun bruker 8-bits integers til å lagre disse flyttallene? Hva om vi vurderer delta-lagring av tidspunkt? Hva om vi bygger indeksen basert på disse feltene i stedet?”',
            'Vi opprettholdte strikt kontroll på belastningen tjenesten var utsatt for til enhver tid, og sørget for å videre-henvise nye forespørsler dersom belastningen var for høy. Det var også svært viktig å minimere tiden fra en klientforespørsel traff webgrensesnittet til et svar ble servert. Svar bestående av et mindre antall bytes kunne serveres direkte, mens større svar skulle streames, på bakgrunn av klientens preferanser. Dette førte til at alle steg i pipeline ned til datalaget måtte optimaliseres.',
          ],
        },
        {
          type: 'output',
          value: 'Å jobbe med cutting edge tech trigget nerden i meg!',
        },
        {
          type: 'image',
          value: {
            src: 'thomsonreuters/greenhouse.jpg',
          },
        },
        {
          type: 'texts',
          value: [
            'For dette prosjektet var teknologivalget en essensiell del av prosjektet. Mesteparten av prosjektet dreide seg om å finne, analysere, tilpasse og implementere riktig teknologi for å tilfredsstille kravene og problemstillingene.',
            'Akka HTTP ble vurdert opp mot VertX i forhold til effektiv ressursbruk i JVMen. De to rammeverkene angriper problemstillingen rundt asynkronitet og parallellitet ganske ulikt. Begge rammeverkene hadde et teoretisk grunnlag for optimal ytelse. Implementasjonen med Akka HTTP gav den beste ytelsen, men VertX hadde flest synergier med kompetansen i organisasjonen som var viktig i forhold til vedlikeholdbarhet.',
            'På databasenivå ble ulike tidsseriedatabaser vurdert, og til slutt falt valget på Hbase som tilbød stor grad av kontroll på hvordan data ble lagret. Ytelsen ble dermed mulig å gjøre en del bedre enn de konkurrerende alternativene.',
            'Det var veldig enkelt å se for seg nytten sluttkunden hadde (altså vår kundes kunde). Larsen beskriver at prosjekter som dette motiverende. Den rette sluttkunden ville ganske enkelt kunne gjøre bedre handler på bakgrunn av informasjonen enn sine konkurrenter, noe som gjorde systemet essensielt for Reuters.',
          ],
        },
      ],
    },
    published: true,
  },
  vaskehjelp: {
    name: 'Vaskehjelp',
    description: {
      en: 'Vaskehjelp is a marketplace that connects cleaning personnel and customers and takes care of payment and other paperwork. With good help from KodeWorks, Vaskehjelp has created mobile applications for iOS and Android natively and an online store.',
      no: 'Vaskehjelp er en markedsplass som kobler rengjører og kunde sammen, samt tar av seg betaling og annet papirarbeid. KodeWorks har bistått med utvikling av iOS- og Android-applikasjon.',
    },
    image: 'vaskehjelp1.jpg',
    extras: {
      en: 'The know-how and method of conduct as a customer or a service provider in the cleaning industry can be challenging. There is much consideration to be aware of with a confusing market with complicated rules and a great deal of illicit workforce. Vaskehjelp had the idea of creating a platform to ease the process for both the customer and the service provider to connect, make arrangements and, at the same time, be profitable.',
      no: 'Som kunde eller tilbyder av renholdstjenester kan det være utfordrende å bete seg korrekt. Gjeldende regler er kompliserte og det er dessverre en bransje med en del svart arbeid. Vaskehjelp hadde en idé om å digitalisere disse prosessene slik at kunde og tilbyder enkelt kunne benytte seg av tjenesten og operere trygt og lønnsomt.',
    },
    urlName: 'vaskehjelp',
    technologies: ['iOS', 'Android', '.NET', 'Blazor', 'Tailwind'],
    content: [
      {
        type: 'texts',
        value: [
          {
            en: 'Peter Ringset joined KodeWorks in 2021, but we already knew him well from the time at Vaskehjelp, where we worked on a project together. Vaskehjelp is a marketplace that connects professional cleaners and customers, and they offer a unique approach to digitizing cleaning services. Peter is here to tell us a bit about what it was like working on this project.',
            no: 'Peter Ringset begynte i KodeWorks i 2021, men allerede på vei inn døra kjente vi ham godt fra før gjennom å ha jobbet sammen med KodeWorks på prosjekt hos Vaskehjelp. Vaskehjelp er en markedsplass for profesjonelle renholdere og kunder med en unik tilnærming til digitalisering av renholdstjenester. Peter skal fortelle litt om hvordan det var å jobbe med dette prosjektet.',
          },
          {
            en: 'After trying different solutions for their web application, KodeWorks was brought on board during the summer of 2018. Vaskehjelp was already underway with the web app development and had grand ambitions of getting their solution on the market in the not too distant future.',
            no: 'KodeWorks ble med inn i Vaskehjelp-teamet sommeren 2018. Utviklingen var på det tidspunkt sentrert rundt webapper, og kunden hadde store ambisjoner om å få løsningen snarlig ut i markedet.',
          },
        ],
      },
      {
        type: 'quote',
        value: {
          content: {
            en: 'The best part of working with the Vaskehjelp application was seeing how much we achieved in a short amount of time and that feeling of accomplishment that emerged from collaboration. Especially when we worked towards the release date, it was satisfying to see how the pieces fell into place.',
            no: 'Det beste med å jobbe med Vaskehjelp-applikasjonen var å se hvor mye vi oppnådde på kort tid, og den følelsen av prestasjon som kom ut av godt samarbeid. Spesielt når vi jobbet mot utgivelsesdatoen var det tilfredsstillende å se hvordan brikkene falt på plass.',
          },
          author: 'Peter Ringset',
        },
      },
      {
        type: 'texts',
        value: [
          {
            en: 'Together with the team at Vaskehjelp, the developers then entered an intense period, where well-thought priorities ended in releasing the application before Christmas the same year.',
            no: 'Teamet gikk inn en intens crunch-periode som endte med release av applikasjonen før jul samme år.',
          },
        ],
      },
      {
        type: 'output',
        value: {
          en: 'Together with the team at Vaskehjelp, the developers then entered an intense period, where well-thought priorities ended in releasing the application before Christmas the same year.',
          no: 'Teamet gikk inn en intens crunch-periode som endte med release av applikasjonen før jul samme år.',
        },
      },
      {
        type: 'quote',
        value: {
          content: {
            en: 'The biggest challenge we faced was the time we had to deliver. We wanted to get a lot done relatively quickly, with only a few months from starting fresh with an entire crew until the first version was released. Like most projects with intense final days, the intensity of the work increased as we moved toward the release date. Luckily, the team was communicating excellently. We made agile prioritizations, enabling us to arrive at the release date with a well-functioning application.',
            no: 'Kunden ønsket mange features raskt, og de få månedene vi hadde på å levere var utfordrende. Som de fleste prosjekter med intense siste dager, økte intensiteten i arbeidet etter hvert som vi gikk mot utgivelsesdatoen. Heldigvis kommuniserte teamet utmerket. Vi gjorde smidige prioriteringer, slik at vi kunne komme frem til utgivelsesdatoen med en velfungerende applikasjon.',
          },
          author: 'Peter Ringset',
        },
      },
      {
        type: 'texts',
        value: [
          {
            en: "After the release of the first version, KodeWorks continued the work with Vaskehjelp. They became a source of continuity regarding the improvement and expansion of the App. The combination of Vaskehjelp setting high goals and providing market analysis with the developers' competence became the key to creating and further developing the product.",
            no: 'Etter utgivelsen av den første versjonen fortsatte KodeWorks arbeidet med Vaskehjelp, og ble en kilde til kontinuerlig forbedring og utvidelse av appen. Kundens ambisiøse mål, backet av gode markedsanalyser, og kombinert med utviklernes høye kompetanse, ble nøkkelen til en kommersiell suksess.',
          },
        ],
      },
      {
        type: 'quote',
        value: {
          content: {
            en: 'The people in Vaskehjelp were experienced in analytics and looking at usage data extracted from the App. By looking at how it was being done, I learned a lot about it myself, using the insight from data to improve both the App and the service itself.',
            no: 'Det var imponerende å se hvordan Vaskehjelp analysere og benyttet bruksdata hentet fra appen til strategisk planlegging og prioritering av utviklingsaktivitet. Ved å se på hvordan dette ble utført lærte jeg selv mye om bruksmønsteranalyse, og brukte innsikten fra brukerdata til å forbedre både appen og selve tjenesten.',
          },
          author: 'Peter Ringset',
        },
      },
      {
        type: 'texts',
        value: [
          {
            en: "The Android and the iOS application was developed natively for their respective platforms to adopt the platforms' look and feel. Over time, Vaskehjelp has utilized the .NET platform for its complete solution. Using Xamarin for app development and Blazor for web development, Vaskehjelp achieves the reuse of business logic. At the same time, it uses core competence in C# to develop and maintain the complete solution.",
            no: 'Android- og iOS-appene ble opprinnelig utviklet native for å få benyttet plattformenes look-and-feel. Over tid har Vaskehjelp benyttet .NET-plattformen for sin komplette løsning. Ved å bruke Xamarin til apputvikling og Blazor til webutvikling oppnår Vaskehjelp gjenbruk av forretningslogikk samt god utnyttelse av sin interne kjernekompetanse i C#.',
          },
          {
            en: 'Vaskehjelp continues to be a central player as a cleaning service platform, and KodeWorks says thanks for the opportunity to be a part of the commercialization of an inspiring startup.',
            no: 'Vaskehjelp er og blir en sentral aktør innen digitale renholdstjenester, og KodeWorks takker for muligheten til å være en del av kommersialiseringen av en inspirerende startup.',
          },
        ],
      },
      {
        type: 'image',
        value: {
          alt: 'Developer Team at Vaskehjelp',
          src: 'vaskehjelp2.jpg',
        },
      },
    ],
    published: true,
  },
  administration: {
    name: 'Administration',
    description: '',
    image: 'thomasonreuters.jpg',
    urlName: 'administration',
  },
};

function getProjects(): Project[] {
  return Object.values(projects).filter((project) => project.name !== 'Administration');
}

async function getProject(project: string | string[]): Promise<Project> {
  if (Array.isArray(project)) {
    return projects[project.join('')];
  }

  return projects[project];
}

function getPublishedProjects(): Project[] {
  return Object.values(projects).filter((project) => project.published);
}

const projectsApi = {
  getPublishedProjects,
  getProjects,
  getProject,
};

export default projectsApi;
