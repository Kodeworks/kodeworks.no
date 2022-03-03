import { Project } from '../types';

interface ProjectObjectType {
  [key: string]: Project
}

export const projects: ProjectObjectType = {
  Vaskehjelp: {
    name: 'Vaskehjelp',
    urlName: 'Vaskehjelp',
    image: '/assets/projects/vaskehjelp.jpg',
    description: 'Vaskehjelp is a marketplace that connects a cleaner and customer, as well as taking care of payment and other paperwork. Kodeworks has assisted in the development of the iOS and Android application.',
    enabled: true,
    highlighted: true,
  },
  Sunlitsea: {
    name: 'Sunlit Sea',
    urlName: 'Sunlitsea',
    image: '/assets/projects/sunlitsea.jpg',
    description: 'Sunlit Sea develops technology for floating solar cell installations that opens up a completely new market for solar cells at sea. Kodeworks develops sensor solutions for solar cell installation, as well as monitoring and enrichment of data from the sensors to optimize production and maintenance.',
    enabled: true,
    highlighted: true,
  },
  Lilbit: {
    name: 'Lilbit',
    urlName: 'Lilbit',
    image: '/assets/projects/lilbit.jpg',
    description: 'Lilbit er et selskap som leverer en platform for GPS-sporing av kjæledyr. Deres visjon er å kunne gi eiere informasjon om dyrets tilstand gjennom dens oppførsel.',
    highlighted: true,
    enabled: true,
  },
  Equinor: {
    name: 'Equinor',
    urlName: 'Equinor',
    image: '/assets/projects/equinor.jpg',
    description: 'Equinor is an international energy company, which in recent years has implemented a strategic investment in sustainable energy. This is a process that requires innovation, business understanding and a strong focus on quality. Kodeworks supports Equinor’s research and digitization activities through analysis, design, programming and testing.',
  },
  Inatur: {
    name: 'Inatur',
    urlName: 'Inatur',
    image: '/assets/projects/inatur.jpg',
    description: 'Inatur is Norway’s largest marketplace for hunting, fishing and cabins. Kodeworks contributes to the development of applications adapted to providers of hunting, fishing and cabins so that it can easily be offered to potential customers and dealers.',
  },
  Statkraft: {
    name: 'Statkraft',
    urlName: 'Statkraft',
    image: '/assets/projects/statkraft.jpg',
    description: 'Statkraft is Europe’s largest producer of renewable energy and a global company in energy market operations. Kodeworks has assisted with the coordination and development of an overall platform for booking, risk assessment and reporting of power purchase agreements.',
  },
  Flir: {
    name: 'Teledyne FLIR',
    urlName: 'Flir',
    image: '/assets/projects/flir.jpg',
    description: 'Teledyne FLIR specializes in the design and production of thermal imaging cameras and sensors. FLIR strives to create a sustainable, efficient and more secure future by improving human perception through the class’ best intelligent image processing and sensor solutions.',
  },
  Skandiaenergi: {
    name: 'Skandiaenergi',
    urlName: 'Skandiaenergi',
    image: '/assets/projects/skandiaenergi.jpg',
    description: 'SkandiaEnergi develops solutions for the electricity market. They offer unique and smart energy solutions for solar power and energy saving. Kodeworks assists in developing an app that simplifies everyday life for the customer, offering smart solutions for power management and charging of electric cars.',
  },
  Kongsberg: {
    name: 'Kongsberg',
    urlName: 'Kongsberg',
    image: '/assets/projects/kongsberg.jpg',
    description: "Kongsberg Digital offers digital solutions for customers in maritime, oil and gas. Kodeworks works with the development of maritime simulation used in, among other things, training systems for customers all over the world. Kongsberg A&D is a global technology leader in defense, surveillance, aerospace, aircraft structures and aircraft maintenance.",
  },
  Akerbp: {
    name: 'Akerbp',
    urlName: 'Akerbp',
    image: '/assets/projects/akerbp.jpg',
    description: 'Aker BP ASA er et norsk oljeutvinning- og utviklingsselskap som fokuserer petroleumsressurser på norsk kontinentalsokkel.',
  },
  Gintel: {
    name: 'Gintel',
    urlName: 'Gintel',
    image: '/assets/projects/gintel.jpg',
    description: 'Gintel AS is a Norwegian IT company that develops software and applications within telecommunications, which changes the way operators compose and deliver services to corporate customers.',
  },
  Bnentreprenor: {
    name: 'Bnentreprenor',
    urlName: 'Bnentreprenor',
    image: '/assets/projects/bnentreprenor-2.jpg',
    description: 'BN Entreprenør AS is a machine contractor company that was established in 1973. With a modern machine park, they are able to carry out assignments in a cost-effective way.',
  },
  Politiet: {
    name: 'Politiet',
    urlName: 'Politiet',
    image: '/assets/projects/politiet.jpg',
    description: 'The police must prevent and fight crime and create security in society. To accomplish the task, they rely on good computer systems that support day-to-day operations in a smooth and efficient manner. Kodeworks has been involved in developing two very important systems for the Police: Mobile and Reverse Violence Alarm (MOVA) and Police Operational Services in the Field (PO). Both systems have helped to improve the response time at the country’s operations centers, secure the everyday lives of victims of violence, and made police patrols more efficient.',
  },
  Avinor: {
    name: 'Avinor',
    urlName: 'Avinor',
    image: '/assets/projects/avinor.jpg',
    description: 'Avinor’s social mission is to ensure good aviation services throughout Norway. This includes maintaining a good information flow to employees and air passengers. Avinor is subject to some of the country’s strictest requirements for safety and quality. Kodeworks has assisted with the integration of real-time information processing as well as testing and quality assurance of code.',
  },
  KLP: {
    name: 'KLP',
    urlName: 'KLP',
    image: '/assets/projects/klp.jpg',
    description: 'Kommunal Landspensjonskasse Gjensidig Forsikringsselskap is an Oslo-based pension company that manages the pensions of municipal employees in Norway.',
  },
  Thales: {
    name: 'THALES',
    urlName: 'Thales',
    image: '/assets/projects/thales.jpg',
    description: 'Thales Group is a French multinational company that designs and builds electrical systems and provides services for aviation, defense, transport and security.',
  },
  TechnipFMC: {
    name: 'TechnipFMC',
    urlName: 'TechnipFMC',
    image: '/assets/projects/technipfmc.jpg',
    description: 'As a worldwide energy service company, TechnipFMC has large customers in Norway. Sensors are used for real-time monitoring of flow through installations, and heavy mathematical data modeling to optimize operations. Kodeworks assists in increasing the scalability and performance of the application portfolio, as well as modernizing the deployment system in the cloud.'
  },
  Dnb: {
    name: 'DNB',
    urlName: 'Dnb',
    image: '/assets/projects/dnb.jpg',
    description: '',
  },
  Obos: {
    name: 'Obos',
    urlName: 'Obos',
    image: '/assets/projects/obos.jpg',
    description: '',
  },
  Remarkable: {
    name: 'Remarkable',
    urlName: 'Remarkable',
    image: '/assets/projects/remarkable-2.jpg',
    description: '',
  },
  Kvaerner: {
    name: 'Kværner',
    urlName: 'kvaerner',
    image: '/assets/projects/.jpg',
    description: '',
  },
  Nomono: {
    name: 'Nomono',
    urlName: 'nomono',
    image: '/assets/projects/nomono.jpg',
    description: '',
  },
  MollerIT: {
    name: 'Møller IT',
    urlName: 'mollerit',
    image: '/assets/projects/.jpg',
    description: '',
  },
  ThomsonReuters: {
    name: 'Thomson Reuters',
    urlName: 'thomsonreuters',
    image: '/assets/projects/.jpg',
    description: '',
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
