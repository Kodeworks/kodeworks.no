import { Project } from '../types';

interface ProjectObjectType {
  [key: string]: Project;
}

export const projects: ProjectObjectType = {
  vaskehjelp: {
    name: 'Vaskehjelp',
    urlName: 'vaskehjelp',
    image: '/static/photos/projects/vaskehjelp.jpg',
    technologies: ['iOS', 'Android', '.NET', 'Blazor', 'Tailwind'],
    description:
      'Vaskehjelp is a marketplace that connects cleaning personell and a customer, as well as taking care of payment and other paperwork.Kodeworks has assisted in the development of the iOS and Android application.',
    published: true,
  },
  sunlitsea: {
    name: 'Sunlit Sea',
    urlName: 'sunlitsea',
    image: '/static/photos/projects/sunlitsea.jpg',
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
    description:
      'Sunlit Sea develops technology for floating solar cell installations that opens up a completely new market for solar cells at sea. Kodeworks develops sensor solutions for solar cell installation, as well as monitoring and enrichment of data from the sensors to optimize production and maintenance.',
    published: true,
  },
  lilbit: {
    name: 'lildog with lilbit',
    urlName: 'lildog-with-lilbit',
    image: '/static/photos/projects/lilbit.jpg',
    technologies: ['Java', 'Spring', 'Android', 'iOS', 'JavaScript', 'ReactJS', 'Tailwind'],
    description:
      'lilbit delivers products for tracking and monitoring pets, pursuing their goal of expanding the communication between pet and owner. They have achieved tremendous interest in current and future products and services with this ambition.',
    published: true,
  },
  equinor: {
    name: 'Equinor',
    urlName: 'equinor',
    image: '/static/photos/projects/equinor.jpg',
    description:
      'Equinor is an international energy company, which in recent years has implemented a strategic investment in sustainable energy. This is a process that requires innovation, business understanding and a strong focus on quality. Kodeworks supports Equinor’s research and digitization activities through analysis, design, programming and testing.',
  },
  inatur: {
    name: 'Inatur',
    urlName: 'inatur',
    image: '/static/photos/projects/inatur-2.jpg',
    technologies: ['Java', 'Spring', 'MongoDB', 'JavaScript', 'React'],
    description:
      "Inatur is Norway's largest online platform for selling hunting and fishing licenses, having offered their services for more than ten years. On their website, larger municipal bodies as well as hunting associations and ground owners can put hunting and fishing licenses out for sale. In this context, Inatur also offers the ability to put cabins out for rent, both for hunting and vacationing. Today, there are more than 1200 cabins registered for renting on Inatur's website.",
    published: true,
  },
  sesam: {
    name: 'Sesam',
    urlName: 'sesam',
    image: '/static/photos/projects/Sesam-front.jpg',
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
    description:
      "Sesam is Kodeworks' own internal door lock and doorbell system, and is developed from the bottom up and maintained in full by Kodeworks.",
    published: true,
  },
  statkraft: {
    name: 'Statkraft',
    urlName: 'statkraft',
    image: '/static/photos/projects/statkraft.jpg',
    description:
      'Statkraft is Europe’s largest producer of renewable energy and a global company within power market operations. Kodeworks has assisted with coordination and development of a common platform for booking, risk evaluation and reporting of power purchase agreements.',
  },
  flir: {
    name: 'Teledyne FLIR',
    urlName: 'flir',
    image: '/static/photos/projects/flir.jpg',
    description:
      'Teledyne FLIR designs, develops, produces and distributes technologies that strive to create a more sustainable, effective and safe future by improving and extending human sensory capabilities through state-of-the-art intelligent sensorics and image processing solutions.',
  },
  skandiaenergi: {
    name: 'SkandiaEnergi',
    urlName: 'skandiaenergi',
    image: '/static/photos/projects/skandiaenergi.jpg',
    description:
      'SkandiaEnergi develops solutions for the power market of the future. They offer unique and smart energy solutions for solar power and energy saving. Kodeworks assists in developing an app that makes daily life as a customer more manageable, and that offers smart solutions for power management and electric vehicle charging.',
  },
  kongsberg: {
    name: 'Kongsberg',
    urlName: 'kongsberg',
    image: '/static/photos/projects/kongsberg.jpg',
    description:
      'Kongsberg digital offers digital solutions for customers within the maritime sector, including oil and gas, with autonomy, smart data and augmented reality as key elements. Kodeworks’ main effort is placed within development of maritime simulations used among other things in personnel training systems for customers all over the globe. Kongsberg A&D is a global technology leader within defense, surveillance, space travel, airplane structure and airplane maintenance.',
  },
  akerbp: {
    name: 'Aker BP',
    urlName: 'akerbp',
    image: '/static/photos/projects/akerbp.jpg',
    description:
      'Aker BP ASA is a Norwegian oil extraction and development company, focusing on petroleum resources on the Norwegian continental sea floor. Kodeworks’ task has been to cooperate with resources from other companies on WITSML Explorer, an open-source web solution designed to visualize WITSML-data.',
  },
  gintel: {
    name: 'Gintel',
    urlName: 'gintel',
    image: '/static/photos/projects/gintel.jpg',
    description:
      'Gintel AS is a Norwegian IT company producing software and applications within the field of telecommunication, that changes the way operatives compose and deliver services to business customers.',
  },
  bnentreprenor: {
    name: 'BN Entreprenør',
    urlName: 'bnentreprenor',
    image: '/static/photos/projects/bnentreprenor-2.jpg',
    description:
      'BN Entreprenør AS is a machine contractor company that was established in 1973. With a modern machine park, they are able to carry out assignments in a cost-effective way.',
  },
  lawenforcementagency: {
    name: 'Law Enforcement Agency',
    urlName: 'lawenforcementagency',
    image: '/static/photos/projects/lawenforcementagency.jpg',
    description:
      'A law enforcement agency should prevent crime and maintain our safety as citizens. Kodeworks has been part of the development of two instrumental systems for a prominent Nordic law enforcement agency: System for Safety Alarm and Electronic Control; and System for Operative Law Enforcement.',
    published: true,
  },
  avinor: {
    name: 'Avinor',
    urlName: 'avinor',
    image: '/static/photos/projects/avinor.jpg',
    description:
      'Avinor’s social mission is to ensure good aviation services throughout Norway. This includes maintaining a good information flow to employees and air passengers. Avinor is subject to some of the country’s strictest requirements for safety and quality. Kodeworks has assisted with the integration of real-time information processing as well as testing and quality assurance of code.',
  },
  klp: {
    name: 'KLP',
    urlName: 'klp',
    image: '/static/photos/projects/klp.jpg',
    description:
      'Kommunal Landspensjonskasse Gjensidig Forsikringsselskap is an Oslo-based pension company that manages the pensions of municipal employees in Norway.',
  },
  thalesnorway: {
    name: 'THALES Norway',
    urlName: 'thalesnorway',
    image: '/static/photos/projects/thales.jpg',
    description:
      'Thales Group is a French, multi-national company that designs and builds electronic systems and delivers services for aviation, defense, transport and security.',
  },
  technipfmc: {
    name: 'TechnipFMC',
    urlName: 'technipfmc',
    image: '/static/photos/projects/technipfmc.jpg',
    description:
      'As a worldwide energy service company, TechnipFMC has large customers in Norway. Sensors are used for real-time monitoring of flow through installations, and heavy mathematical data modeling to optimize operations. Kodeworks assists in increasing the scalability and performance of the application portfolio, as well as modernizing the deployment system in the cloud.',
  },
  dnb: {
    name: 'DNB',
    urlName: 'dnb',
    image: '/static/photos/projects/dnb.jpg',
    description:
      'DNB as a company has worked for what is soon to be 200 years to find the best solutions for their customers, and is today one of the largest technology companies within the banking and financial sector. Kodeworks assists in this adaptation by establishing a central system for managing master- and reference data in DNB. In using a holistic end-to-end mindset and utilizing modern cloud services, Kodeworks helps DNB establish a robust solution for both operational and analytical usage.',
  },
  obos: {
    name: 'Obos',
    urlName: 'obos',
    image: '/static/photos/projects/obos.jpg',
    description:
      'OBOS plays a big role in the Norwegian housing and property market, and offers customers - among other services - an easier path to the housing market through partial housing ownership. OBOS is also behind Nabohjelp, an app that makes it easier to ask your neighbors for assistance. Kodeworks assists in both maintenance and development of the app, which is written in native iOS and Android.',
  },
  remarkable: {
    name: 'Remarkable',
    urlName: 'remarkable',
    image: '/static/photos/projects/remarkable-2.jpg',
    description:
      'reMarkable is a Norwegian startup developing a tablet for writing and drawing, and aiming to give the user a sensation of writing on paper. The unique tablet is designed for use in academia as well as in professional settings. Kodeworks assists in development of reMarkable’s complex and international web platform.',
  },
  aize: {
    name: 'Aize',
    urlName: 'aize',
    image: '/static/photos/projects/aize.jpg',
    description:
      'Aize is a project specialist that offers engineering, procurement and construction services, as well as the delivery of advanced offshore platforms, onshore facilities, floating production units and renewable energy solutions.',
  },
  nomono: {
    name: 'Nomono',
    urlName: 'nomono',
    image: '/static/photos/projects/nomono.jpg',
    description:
      'Cloud-based audio collaboration and processing built specifically for podcasters, broadcast journalists, and audio storytellers.',
  },
  pexip: {
    name: 'Pexip',
    urlName: 'viode-conferencing-with-pexip',
    image: '/static/photos/projects/pexip.jpg',
    description:
      'The start of 2020 was a world-changing era with the covid-19 pandemic. Relationships were maintained through strict official guidelines, which revolutionized the business. Less travel and fewer face-to-face meetings were a new reality, and video communication was the new standard. Pexip is a company with extensive experience in simplifying and optimizing video conferencing.',
  },
  mollerit: {
    name: 'Møller IT',
    urlName: 'mollerit',
    image: '/static/photos/projects/mollerit.jpg',
    description:
      'Møller IT, part of the Møller Mobility Group, is the leading car group in the Nordic and Baltic countries with over 60 dealers and 750,000 customers. The company has traditionally operated within new car sales, leasing, financing, used car sales, and now more recently other types of mobility services.',
  },
  thomsonreuters: {
    name: 'Thomson Reuters',
    urlName: 'thomsonreuters',
    image: '/static/photos/projects/thomasonreuters.jpg',
    description:
      'Through various digital platforms for energy and commodity trading, Thomson Reuters delivers analysis tools intended for investors and companies. The information presented in these solutions is time-critical, the amounts of data are large, the sources are many and the algorithms are complex.',
  },
  administration: {
    name: 'Administration',
    urlName: 'administration',
    image: '/static/photos/projects/thomasonreuters.jpg',
    description: '',
  },
};

function getProjects(): Project[] {
  return Object.values(projects).filter((project) => project.name !== 'Administration');
}

async function getProject(project: string): Promise<Project> {
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
