import { Project } from "../types";

interface ProjectObjectType {
  [key: string]: Project;
}

export const projects: ProjectObjectType = {
  Vaskehjelp: {
    name: "Vaskehjelp",
    urlName: "Vaskehjelp",
    image: "/assets/projects/vaskehjelp.jpg",
    description:
      "Vaskehjelp is a marketplace that connects a cleaner and customer, as well as taking care of payment and other paperwork. Kodeworks has assisted in the development of the iOS and Android application.",
    enabled: true,
    highlighted: true,
  },
  Sunlitsea: {
    name: "Sunlit Sea",
    urlName: "Sunlitsea",
    image: "/assets/projects/sunlitsea.jpg",
    description:
      "Sunlit Sea develops technology for floating solar cell installations that opens up a completely new market for solar cells at sea. Kodeworks develops sensor solutions for solar cell installation, as well as monitoring and enrichment of data from the sensors to optimize production and maintenance.",
    enabled: true,
    highlighted: true,
  },
  Lilbit: {
    name: "lilbit",
    urlName: "Lilbit",
    image: "/assets/projects/lilbit.jpg",
    description:
      "lilbit delivers products for tracking and monitoring of pets, pursuing their goal of expanding the communication between pet and owner. With this ambition, they have achieved huge interest for current and future products and services.",
    highlighted: true,
    enabled: true,
  },
  Equinor: {
    name: "Equinor",
    urlName: "Equinor",
    image: "/assets/projects/equinor.jpg",
    description:
      "Equinor is an international energy company, which in recent years has implemented a strategic investment in sustainable energy. This is a process that requires innovation, business understanding and a strong focus on quality. Kodeworks supports Equinor’s research and digitization activities through analysis, design, programming and testing.",
  },
  Inatur: {
    name: "Inatur",
    urlName: "Inatur",
    image: "/assets/projects/inatur.jpg",
    description:
      "Inatur is Norway’s largest marketplace for hunting, fishing and cabins. Kodeworks contributes to the development of applications adapted to providers of hunting, fishing and cabins so that it can easily be offered to potential customers and dealers.",
    enabled: true,
    highlighted: true,
  },
  Statkraft: {
    name: "Statkraft",
    urlName: "Statkraft",
    image: "/assets/projects/statkraft.jpg",
    description:
      "Statkraft is Europe’s largest producer of renewable energy and a global company within power market operations. Kodeworks has assisted with coordination and development of a common platform for booking, risk evaluation and reporting of power purchase agreements.",
  },
  Flir: {
    name: "Teledyne FLIR",
    urlName: "Flir",
    image: "/assets/projects/flir.jpg",
    description:
      "Teledyne FLIR designs, develops, produces and distributes technologies that strive to create a more sustainable, effective and safe future by improving and extending human sensory capabilities through state-of-the-art intelligent sensorics and image processing solutions.",
  },
  Skandiaenergi: {
    name: "SkandiaEnergi",
    urlName: "Skandiaenergi",
    image: "/assets/projects/skandiaenergi.jpg",
    description:
      "SkandiaEnergi develops solutions for the power market of the future. They offer unique and smart energy solutions for solar power and energy saving. Kodeworks assists in developing an app that makes daily life as a customer more manageable, and that offers smart solutions for power management and electric vehicle charging.",
  },
  Kongsberg: {
    name: "Kongsberg",
    urlName: "Kongsberg",
    image: "/assets/projects/kongsberg.jpg",
    description:
      "Kongsberg digital offers digital solutions for customers within the maritime sector, including oil and gas, with autonomy, smart data and augmented reality as key elements. Kodeworks’ main effort is placed within development of maritime simulations used among other things in personnel training systems for customers all over the globe. Kongsberg A&D is a global technology leader within defense, surveillance, space travel, airplane structure and airplane maintenance.",
  },
  Akerbp: {
    name: "Aker BP",
    urlName: "Akerbp",
    image: "/assets/projects/akerbp.jpg",
    description:
      "Aker BP ASA is a Norwegian oil extraction and development company, focusing on petroleum resources on the Norwegian continental sea floor. Kodeworks’ task has been to cooperate with resources from other companies on WITSML Explorer, an open-source web solution designed to visualize WITSML-data.",
  },
  Gintel: {
    name: "Gintel",
    urlName: "Gintel",
    image: "/assets/projects/gintel.jpg",
    description:
      "Gintel AS is a Norwegian IT company producing software and applications within the field of telecommunication, that changes the way operatives compose and deliver services to business customers.",
  },
  Bnentreprenor: {
    name: "BN Entreprenør",
    urlName: "Bnentreprenor",
    image: "/assets/projects/bnentreprenor-2.jpg",
    description:
      "BN Entreprenør AS is a machine contractor company that was established in 1973. With a modern machine park, they are able to carry out assignments in a cost-effective way.",
  },
  Lawenforcementagency: {
    name: "Law Enforcement Agency",
    urlName: "Lawenforcementagency",
    image: "/assets/projects/lawenforcementagency.jpg",
    description:
      "A law enforcement agency should prevent crime and maintain our safety as citizens. Kodeworks has been part of the development of two instrumental systems for a prominent Nordic law enforcement agency: System for Safety Alarm and Electronic Control; and System for Operative Law Enforcement.",
    highlighted: true,
    enabled: true,
  },
  Avinor: {
    name: "Avinor",
    urlName: "Avinor",
    image: "/assets/projects/avinor.jpg",
    description:
      "Avinor’s social mission is to ensure good aviation services throughout Norway. This includes maintaining a good information flow to employees and air passengers. Avinor is subject to some of the country’s strictest requirements for safety and quality. Kodeworks has assisted with the integration of real-time information processing as well as testing and quality assurance of code.",
  },
  KLP: {
    name: "KLP",
    urlName: "KLP",
    image: "/assets/projects/klp.jpg",
    description:
      "Kommunal Landspensjonskasse Gjensidig Forsikringsselskap is an Oslo-based pension company that manages the pensions of municipal employees in Norway.",
  },
  Thales: {
    name: "THALES Norway",
    urlName: "Thales",
    image: "/assets/projects/thales.jpg",
    description:
      "Thales Group is a French, multi-national company that designs and builds electronic systems and delivers services for aviation, defense, transport and security.",
  },
  TechnipFMC: {
    name: "TechnipFMC",
    urlName: "TechnipFMC",
    image: "/assets/projects/technipfmc.jpg",
    description:
      "As a worldwide energy service company, TechnipFMC has large customers in Norway. Sensors are used for real-time monitoring of flow through installations, and heavy mathematical data modeling to optimize operations. Kodeworks assists in increasing the scalability and performance of the application portfolio, as well as modernizing the deployment system in the cloud.",
  },
  Dnb: {
    name: "DNB",
    urlName: "Dnb",
    image: "/assets/projects/dnb.jpg",
    description:
      "DNB as a company has worked for what is soon to be 200 years to find the best solutions for their customers, and is today one of the largest technology companies within the banking and financial sector. Kodeworks assists in this adaptation by establishing a central system for managing master- and reference data in DNB. In using a holistic end-to-end mindset and utilizing modern cloud services, Kodeworks helps DNB establish a robust solution for both operational and analytical usage.",
  },
  Obos: {
    name: "Obos",
    urlName: "Obos",
    image: "/assets/projects/obos.jpg",
    description:
      "OBOS plays a big role in the Norwegian housing and property market, and offers customers - among other services - an easier path to the housing market through partial housing ownership. OBOS is also behind Nabohjelp, an app that makes it easier to ask your neighbors for assistance. Kodeworks assists in both maintenance and development of the app, which is written in native iOS and Android.",
  },
  Remarkable: {
    name: "Remarkable",
    urlName: "Remarkable",
    image: "/assets/projects/remarkable-2.jpg",
    description:
      "reMarkable is a Norwegian startup developing a tablet for writing and drawing, and aiming to give the user a sensation of writing on paper. The unique tablet is designed for use in academia as well as in professional settings. Kodeworks assists in development of reMarkable’s complex and international web platform.",
  },
  Aize: {
    name: "Aize",
    urlName: "aize",
    image: "/assets/projects/aize.jpg",
    description:
      "Aize is a project specialist that offers engineering, procurement and construction services, as well as the delivery of advanced offshore platforms, onshore facilities, floating production units and renewable energy solutions.",
  },
  Nomono: {
    name: "Nomono",
    urlName: "nomono",
    image: "/assets/projects/nomono.jpg",
    description:
      "Cloud-based audio collaboration and processing built specifically for podcasters, broadcast journalists, and audio storytellers.",
  },
  MollerIT: {
    name: "Møller IT",
    urlName: "mollerit",
    image: "/assets/projects/mollerit.jpg",
    description:
      "Møller IT, part of the Møller Mobility Group, is the leading car group in the Nordic and Baltic countries with over 60 dealers and 750,000 customers. The company has traditionally operated within new car sales, leasing, financing, used car sales, and now more recently other types of mobility services.",
  },
  ThomsonReuters: {
    name: "Thomson Reuters",
    urlName: "thomsonreuters",
    image: "/assets/projects/thomasonreuters.jpg",
    description:
      "Through various digital platforms for energy and commodity trading, Thomson Reuters delivers analysis tools intended for investors and companies. The information presented in these solutions is time-critical, the amounts of data are large, the sources are many and the algorithms are complex.",
  },
  Administration: {
    name: "Administration",
    urlName: "thomsonreuters",
    image: "/assets/projects/thomasonreuters.jpg",
    description: "",
  },
};

function getProjects(): Array<Project> {
  return Object.values(projects).filter(
    (project) => project.name !== "Administration"
  );
}

function getHighlightedProjects(): Array<Project> {
  return Object.values(projects).filter((project) => project.highlighted);
}

const projectsApi = {
  getHighlightedProjects,
  getProjects,
};

export default projectsApi;
