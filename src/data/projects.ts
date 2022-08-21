import { Project } from '../types';

interface ProjectObjectType {
  [key: string]: Project;
}

export const projects: ProjectObjectType = {
  vaskehjelp: {
    name: 'Vaskehjelp',
    description: "Vaskehjelp is a marketplace that connects cleaning personell and a customer, as well as taking care of payment and other paperwork.KodeWorks has assisted in the development of the iOS and Android application.",
    image: 'vaskehjelp1.jpg',
    urlName: 'vaskehjelp',
    technologies: ['iOS', 'Android', '.NET', 'Blazor', 'Tailwind'],
    content: [
      {
        type: 'texts',
        value: [
          "Peter Ringset in KodeWorks joined us last year, but we already knew him well from the time at Vaskehjelp, where we worked on a project together. Vaskehjelp is a marketplace that connects professional cleaners and customers. They offer a unique approach to digitizing cleaning services, and Peter is here to tell us a bit about what it was like working on this project.",
          "After trying different solutions for their web application, KodeWorks were brought onboard during the summer of 2018. At this point in time, Vaskehjelp was already underway with the development of the web app, and had great ambitions of bringing their solution on the market in the not too distant future."
        ]
      },
      {
        type: 'quote',
        value: {
          content: "Some of the best parts of working with the Vaskehjelp application was seeing just how much we achieved in a short amount of time, and that feeling of accomplishment that emerged from collaboration. Especially in that time where we worked towards the release date, it was satisfying to see how the pieces fell into place one by one.",
          author: "Peter Ringset"
        }
      },
      {
        type: 'texts',
        value: [
          "In Vaskehjelp, have been central in both Android and iOS development. Peter has for the most part worked with iOS, while Tri from KodeWorks worked with Android development."
        ]
      },
      {
        type: 'output',
        value: "Together with developers in Vaskehjelp, the developers then entered an intense period, where well-thought priorities ended in release of the application before Christmas the same year."
      },
      {
        type: 'quote',
        value: {
          content: "The biggest challenge we faced was the amount of time we had to deliver. We wanted to get a lot done in a relatively short amount of time, with only a few months from starting fresh with a full crew, until the first version was to be released. Like most projects with intense final days, the intensity of the work increased as we moved towards the release date. Luckily, the team was communicating excellently, and we were able to make agile prioritizations, enabling us to emerge at the release date with a well-functioning application.",
          author: "Peter Ringset"
        }
      },
      {
        type: 'texts',
        value: [
          "After the release of the first version, KodeWorks continued the work with Vaskehjelp, and became a source of continuity regarding the improvement and expansion of the app. The combination of Vaskehjelp setting high goals and providing market analysis, with the developers’ competence, became the key to create and further develop the product."
        ]
      },
      {
        type: 'quote',
        value: {
          content: "The people in Vaskehjelp were experienced in analytics and looking at usage data extracted from the app. By looking at how it was being done, I learned a lot about it myself in terms of using the insight from data in order to improve both the app and the service itself.",
          author: "Peter Ringset"
        }
      },
      {
        type: 'texts',
        value: [
          "Over time, Vaskehjelp has utilized the .NET platform for their whole solution. By using Xamarin for app development and Blazor for web development, Vaskehjelp achieves reuse of business logic while at the same time using core competence in C# for development and maintenance of the whole solution.",
          "Vaskehjelp continues to be a central player as a cleaning service platform, and KodeWorks says thanks for the opportunity to be a part of the commercialization of a very exciting startup."
        ]
      },
      {
        type: 'image',
        value: {
          alt: "Developer Team at Vaskehjelp",
          src: 'vaskehjelp2.jpg'
        }
      }
    ],
    published: true,
  },
  sunlitsea: {
    name: 'Sunlit Sea',
    description: "Sunlit Sea develops technology for floating solar cell installations that opens up a completely new market for solar cells at sea. KodeWorks develops sensor solutions for solar cell installation, as well as monitoring and enrichment of data from the sensors to optimize production and maintenance.",
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
    content: [
      {
        type: 'texts',
        value: [
          "With their extensive ambitions, Sunlit Sea is a central player in the field of floating solar power. A glance at the evolution they have undergone across their entire technology stack supports this.",
          "A team from KodeWorks has been central to this development, and is today working on segments like hardware design and software development for monitoring, maintenance and optimization of power production. Rune in KodeWorks has worked on the electronics and sensorics of the float modules, and shares his experience in Sunlit Sea"
        ]
      },
      {
        type: 'quote',
        value: {
          content: "In Sunlit Sea, I’ve gotten the chance to discover solutions to problems. I’m not just implementing a function to satisfy a unit test, but instead I get to solve real problems, which requires me to utilize my full professional knowledge. I’m quite simply an inventor, producing real stuff. Here, I’m free to explore possible solutions and together with my colleagues, we find out how to e. g. establish a data stream of moisture measurements from the inside of a metal construction.",
        }
      },
      {
        type: 'texts',
        value: [
          "As co-founder of Sunlit Sea, KodeWorks has been part of the picture from the very beginning, in 2019. As a startup with huge ambitions, and in a demanding, interdisciplinary field that has yet to mature, there are a number of challenges that need to be overcome in order to write a success story."
        ]
      },
      {
        type: 'output',
        value: "As co-founder of Sunlit Sea, KodeWorks has been part of the picture from the very beginning, in 2019."
      },
      {
        type: 'texts',
        value: [
          "Sunlit Sea has on several occasions worked with KodeWorks on this, and we have contributed in a broad range of areas. From 3D renderings of production and deployment, and a website with Sunlit Sea’s Smart Quoter service, down to the sensor- and communication electronics put on every module, KodeWorks has designed and implemented necessary solutions from the ground up.",
          "Through a collaborative partnership and mutual knowledge sharing, KodeWorks has been essential for Sunlit Sea’s technological edge."
        ]
      },
      {
        type: 'quote',
        value: {
          content: "In Sunlit Sea, I am solely accountable for the quality of the solutions I develop, and there is a lot of responsibility on the shoulders of each developer. There is no relying on other team members to catch weaknesses in my solutions, unless I specifically ask for a peer review of the systems. We all simply have to identify possible weaknesses in the systems and procedures that we develop, and ensure that more than one set of eyes are scanning it all for flaws."
        }
      },
      {
        type: 'texts',
        value: [
          "The engineering solutions that make up the base for the solar module, must meet requirements that evolve as the product moves towards the commercialization stage. That also applies for the processing and presentation of collected sensor data, and the use of data for further prediction of performance and behavior in various environments. This goes on in parallel with how Sunlit Sea pushes forward in competitiveness and scaling of production."
        ]
      },
      {
        type: 'quote',
        value: {
          content: "Before Sunlit Sea, I had little experience with how to define systems and procedures for getting the production of an actual product up and running. It has been very interesting to learn what works when designing a handful of prototypes, and what needs to be changed when moving towards mass production of the same product. An extremely important tool I keep in my mental toolbox is the ability to design a product in a way that allows a factory to produce it, without me being involved in the actual production."
        }
      },
      {
        type: 'texts',
        value: [
          "Broad and documentable domain expertise is important in a relatively young industry. For the purpose of extending specific domain knowledge, Sunlit Sea today works towards identifying the performance ratio of the solar panels in different sea states given a set of waves, in a collaboration between KodeWorks and IFE to combine historical weather data with bespoke sensorics and processing technology. This work is part of state-of-the-art research within the field, and is laying the foundation for speveral scientific publications from IFE.",
          "KodeWorks continues to develop solutions for Sunlit Sea, and looks forward to collaborating on solving many exciting challenges in the future."
        ]
      },
      {
        type: 'image',
        value: {
          src: 'sunlitsea2.jpg'
        }
      }

    ],
    published: true,
  },
  lilbit: {
    name: 'lildog with lilbit',
    description: "lilbit delivers products for tracking and monitoring pets, pursuing their goal of expanding the communication between pet and owner. They have achieved tremendous interest in current and future products and services with this ambition.",
    image: 'lilbit1.jpg',
    urlName: 'lildog-with-lilbit',
    technologies: ['Java', 'Spring', 'Android', 'iOS', 'JavaScript', 'ReactJS', 'Tailwind'],
    content: [
      {
        type: 'texts',
        value: [
          "Through long-lasting collaboration, KodeWorks has yielded consultancy and knowledge boosting and development. Joachim Fasting in KodeWorks has been a central figure in this collaboration, especially within backend development and reducing complexity and costs in the technology stack."
        ]
      },
      {
        type: 'quote',
        value: {
          content: "I have appreciated the trust I have gotten from our clients in choosing between different technical solutions. I have had the opportunity to work with many other technologies, from high-level to low-level."
        }
      },
      {
        type: 'texts',
        value: ["lilbit is today a specialized company with ownership of its entire technology portfolio. An essential part of the process to achieve this has been cloud rationalization. Today, lilbit cloud services are built on the principle of infrastructure as code. Setup and configurations, resource usage and costs are thus transparent, modular and easy to test, develop and hand over. Another part has been moving the production chain to local environments, as opposed to most manufacturers."]
      },
      {
        type: 'quote',
        value: {
          content: "The biggest challenge was keeping several parallel tasks. Upholding a structured approach to the work at hand has therefore been instrumental."
        }
      },
      {
        type: 'output',
        value: "\"I have worked on several segments of the technology portfolio, and I hope to bring experience from all of it into further work.\""
      },
      {
        type: 'image',
        value: {
          src: 'lilbit2.jpg',
          alt: "lildog with lilbit"
        }
      },
      {
        type: 'texts',
        value: [
          "KodeWorks has also been part of cross-functional teams, with fluent communication between the developer and business sides - a property that in and by itself accelerates development and growth. On the business side of lilbit, the interest shown in products and services may best be described by a spread sale conducted on the public finance platform Folkeinvest. Lilbit collected 28 million NOK, thus marking a new record in Norwegian public spread sales. KodeWorks has further provided knowledge sharing on specific domains involved in the development of lilbit. This includes taking part in the hiring process of lilbit employees.",
          "lilbit CEO Morten Sæthre describes Joachim from KodeWorks as the first truly autonomous developer he met who sees weaknesses and corresponding solutions in a system and implements these as they emerge. Today, Joachim works on developing the backend. lilbit develops and maintains backend solutions for both the IoT units and the cloud services. This is important since lilbit units contain sensors to facilitate expanded communication between a dog and its owner.",
          "We at KodeWorks are thankful to be collaborating with lilbit on this and look forward to being part of the development in the time to come."
        ]
      }
    ],
    published: true,
  },
  equinor: {
    name: 'Equinor',
    description: "Equinor is an international energy company, which in recent years has implemented a strategic investment in sustainable energy. This is a process that requires innovation, business understanding and a strong focus on quality. KodeWorks supports Equinor’s research and digitization activities through analysis, design, programming and testing.",
    image: 'equinor.jpg',
    urlName: 'equinor',
  },
  inatur: {
    name: 'Inatur',
    description: "Inatur is Norway's largest online platform for selling hunting and fishing licenses, having offered their services for more than ten years. On their website, larger municipal bodies as well as hunting associations and ground owners can put hunting and fishing licenses out for sale. In this context, Inatur also offers the ability to put cabins out for rent, both for hunting and vacationing. Today, there are more than 1200 cabins registered for renting on Inatur's website.",
    image: 'inatur-2.jpg',
    urlName: 'inatur',
    technologies: ['Java', 'Spring', 'MongoDB', 'JavaScript', 'React'],
    content: [
      {
        type: 'texts',
        value: [
          "Inatur has built a solid platform for delivering their services, and since 2019, KodeWorks has been a part of their modernizing process. Here, KodeWorks has further developed and modernized their already existing Java Spring backend. Using tools like React and Storybook, the frontend has been modularized, removing a lot of the strong couplings in the code base. This makes further development quicker, as well as easier to document and maintain.",
          "Technical consultancy is often a major part of our input to the projects we run. As consultants and developers, the people at KodeWorks have a good understanding of how to meet the expectations and needs of the end user, while still keeping the technical integrity of the code base and technical solutions in general at a high standard. Communicating the link between customer needs and technical integrity is key in enabling our clients to set goals that are ambitious, achievable and that serve a purpose. This is an important contribution in creating an environment where the business part and the technical part of Inatur builds on and strengthens each other - a requirement for furthering the process and accelerating development."
        ]
      },
      {
        type: 'wideimage',
        value: {
          src: 'inatur-3.jpg'
        }
      },
      {
        type: 'texts',
        value: [
          "Today, KodeWorks drives the process of further modernization within Inatur's technological portfolio. In this process, there is a balance in the usage of resources, between renewing existing solutions, and developing entirely new features. KodeWorks has been central in a comprehensive renewal across Inatur's tech stack, and laid a robust base for both the current operation and further development of Inatur's services. We wish to thank Inatur for a great collaboration, and look forward to continuing the process."
        ]
      }
    ],
    published: true,
  },
  sesam: {
    name: 'Sesam',
    description: "Sesam is KodeWorks' own internal door lock and doorbell system, and is developed from the bottom up and maintained in full by KodeWorks.",
    image: 'Sesam-front.jpg',
    extras: "When between customer assignments in KodeWorks, the focus is on professional and academic development. At the same time, some real value creation can also be achieved. At the KodeWorks office in Oslo, Jan and Simen received an interesting task in modernizing the existing door lock system.",
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
    content: [
      {
        type: 'texts',
        value: [
          "Using conventional keys in an office setting has multiple downsides. Someone needs to be in control over which physical keys are in whose possession, renewing these if they are somehow lost. Loss of keys also makes it difficult for individuals to get access to the office, and could potentially constitute a serious security risk. Today’s existing solutions for door lock control offer code locks, key cards, alarm control via apps and related functionality, but also require that one physically intervenes with the doors in the building. Since our goal was a solution tailored to our needs, while also doing as little physical changes as possible to the existing door lock system, the most promising alternative turned out to be creating the solution from the bottom up ourselves.",
          "Jan and Simen thus started the project with the goal of creating a solution that could allow for office door lock control using only a web app. It then became necessary to build a product from sketch, that on one end could join the circuits to two door locks, while also registering someone ringing the doorbell, and on the other end could offer the end user an intuitive user interface for this specific action. And so our own door lock system, Sesam, saw the light of day."
        ]
      },
      {
        type: 'image',
        value: {
          src: 'sesam-2.jpg'
        }
      },
      {
        type: 'texts',
        value: [
          "In the existing physical implementation, the locks for the inner and outer door were deactivated momentarily by joining two different electrical circuits. The circuit for the inner door was already exposed through an existing relay, and the outer door circuit could be accessed through the office calling system. After some consultation with Thomas at KodeWorks, three soldering points to the calling system PCB were identified. One for grounding, one for joining the door lock circuit and one that would receive voltage when the doorbell was rung. It was then decided that these circuits would be joined using relays controlled by microcontrollers, such as an Arduino model. The Arduino controlling the outer door, whose close proximity to the calling system allowed for listening to the doorbell signal, was also set up to register when this signal was active, communicating this to the Sesam backend.",
          "And so the solution for controlling the door locks and registering the doorbell was in place. On the local office network, three components were communicating - the Sesam server and two Arduinos. For this communication, the MQTT protocol was chosen. MQTT is typically preferred in IoT solutions with lots of units and large volumes of data, due to it being a relatively lightweight protocol, and since the MQTT pub/sub routine of a single unit runs independent of what other units are simultaneously connected. At the same time, MQTT offers high adjustability for parameters that increase the integrity of the message transmission, or keeps messages stored upon loss of connection. This lowers the performance in bigger systems, but is useful in small scale applications where the integrity of the message transfers must have some sort of guarantee.",
          "The backend uses Node.js with Express, and offers a RESTful HTTP API to the frontend, which is a web app written using React. NextJS is used to offer all pages in the web app, which follows the new visual profile of KodeWorks. Further on, the backend communicates messages to the microcontrollers. A local MQTT broker runs in its own Docker container, and distributes messages on doorbells, unlocking and locking, and heartbeat messages back and forth between the network components."
        ]
      },
      {
        type: 'image',
        value: {
          src: 'sesam-3.jpg'
        }
      },
      {
        type: 'texts',
        value: [
          "For authentication and authorization, Google OAuth is used, so that only users with a valid KodeWorks mail are able to login and access Sesam. This was configured in Google Cloud Console, and Google Admin SDK was then used to check whether or not a user is part of either the Trondheim or the Oslo office in KodeWorks. This makes sure that only people with an actual connection to the company gains access to unlocking the doors. CI7CD Pipelines in Gitlab was used to automatically deploy the app to the server.",
          "When a user presses the unlock button in the app, there is an expectation of getting some visual clue that the process of opening the door has begun, and has succeeded. In Sesam, this is done by the backend receiving a message from the given microcontroller that the door has been unlocked, which the backend then furthers to the frontend. The unlock button is then itself locked until the message is passed that the door is locked. This communication is done using Websockets, and a natural extension of this was making sure that the unlock button was locked for all users if one user attempted to unlock the door. One can of course make the case that this sort of real time update for an app that controls two doors in the same office isn’t highly necessary, but on the other hand, this functionality reflects user friendliness as a guiding principle, and is always worth keeping in mind. An admin view was also developed. This gives select users access to statistics on the usage of Sesam, as well as the ability to open/close the entire service.",
          "Finally, an essential part of this project has been the effort in planning and describing the product before the start of the project. At the time of project start, Jan and Simen were presented with a very well prepared project description. This contained a clear description of the product, as well as functional and non-functional requirements for both the product and the project execution. Such a collection of requirements and descriptions gives the developer an excellent basis for asking critical questions, presenting alternative possibilities and creating a coherent image of the product in an early phase of the project. This facilitates a imperative process and productive communication. In summation, Jan and Simen can therefore look back at an instructive and well executed project."
        ]
      },
      {
        type: 'image',
        value: {
          src: 'sesam-1.jpg'
        }
      },
    ],
    published: true,
  },
  statkraft: {
    name: 'Statkraft',
    description: "Statkraft is Europe’s largest producer of renewable energy and a global company within power market operations. KodeWorks has assisted with coordination and development of a common platform for booking, risk evaluation and reporting of power purchase agreements.",
    image: 'statkraft.jpg',
    urlName: 'statkraft',
  },
  flir: {
    name: 'Teledyne FLIR',
    description: "Teledyne FLIR designs, develops, produces and distributes technologies that strive to create a more sustainable, effective and safe future by improving and extending human sensory capabilities through state-of-the-art intelligent sensorics and image processing solutions.",
    image: 'flir.jpg',
    urlName: 'flir',
  },
  skandiaenergi: {
    name: 'SkandiaEnergi',
    description: "SkandiaEnergi develops solutions for the power market of the future. They offer unique and smart energy solutions for solar power and energy saving. KodeWorks assists in developing an app that makes daily life as a customer more manageable, and that offers smart solutions for power management and electric vehicle charging.",
    image: 'skandiaenergi.jpg',
    urlName: 'skandiaenergi',
  },
  kongsberg: {
    name: 'Kongsberg',
    description: "Kongsberg digital offers digital solutions for customers within the maritime sector, including oil and gas, with autonomy, smart data and augmented reality as key elements. KodeWorks’ main effort is placed within development of maritime simulations used among other things in personnel training systems for customers all over the globe. Kongsberg A&D is a global technology leader within defense, surveillance, space travel, airplane structure and airplane maintenance.",
    image: 'kongsberg.jpg',
    urlName: 'kongsberg',
  },
  akerbp: {
    name: 'Aker BP',
    description: "Aker BP ASA is a Norwegian oil extraction and development company, focusing on petroleum resources on the Norwegian continental sea floor. KodeWorks’ task has been to cooperate with resources from other companies on WITSML Explorer, an open-source web solution designed to visualize WITSML-data.",
    image: 'akerbp.jpg',
    urlName: 'akerbp',
  },
  gintel: {
    name: 'Gintel',
    description: "Gintel AS is a Norwegian IT company producing software and applications within the field of telecommunication, that changes the way operatives compose and deliver services to business customers.",
    image: 'gintel.jpg',
    urlName: 'gintel',
  },
  bnentreprenor: {
    name: 'BN Entreprenør',
    description: "BN Entreprenør AS is a machine contractor company that was established in 1973. With a modern machine park, they are able to carry out assignments in a cost-effective way.",
    image: 'bnentreprenor-2.jpg',
    urlName: 'bnentreprenor',
  },
  lawenforcementagency: {
    name: 'Law Enforcement Agency',
    description: "A law enforcement agency should prevent crime and maintain our safety as citizens. KodeWorks has been part of the development of two instrumental systems for a prominent Nordic law enforcement agency: System for Safety Alarm and Electronic Control; and System for Operative Law Enforcement.",
    image: 'lawenforcementagency.jpg',
    urlName: 'lawenforcementagency',
    content: [
      {
        type: 'texts',
        value: [
          "KodeWorks was engaged by the law enforcement agency in 2008. At this time, the agency's IT department was in the middle of modernizing their existing Safety Alarm system. In parallel, the entire IT system and interaction processes of the organization were receiving an increase in quality. The Safety Alarm had already in 2005 been proposed with an extension, with a corresponding legislation, by the name of Electronic Control. A general lack of technical solutions in the market, of the sort that could easily be integrated into existing operative systems, made it necessary for KodeWorks to assist in the integration of Safety Alarm and Electronic Control with the operative systems of the agency. This also necessitated a consideration of the case management system, as well as systems belonging to third party suppliers of equipment, as part of the development process.",
          "KodeWorks then developed the next generation of the Safety Alarm for the law enforcement agency. This was done by modifying the Android operative system, so that all peripherals were disabled, and all external communication was routed through an end-to-end encrypted communication protocol connecting to the agency's services. These modifications touched on firmware as well, so that even hardware buttons with existing functionality were reprogrammed. The adjustments enabled the agency to run a dedicated Safety Alarm-app on standard phones, while at the same time utilizing state-of-the-art positioning technology and programming environment. Today, all Safety Alarm units within the agency's jurisdiction are standard mobile phones running on software that is a continuation of the work that KodeWorks, together with the law enforcement agency, laid down during 2008-2016."
        ]
      },
      {
        type: 'wideimage',
        value: {
          src: 'lawenforcementagency2.jpg'
        }
      },
      {
        type: 'texts',
        value: [
          "The Safety Alarm and Electronic Control project went on for several years. Some of the time was also put in similar projects, specifically within the agency’s operative portfolio. Operative Law Enforcement is the most central of the agency’s operative systems, and was developed already in 1994. Before KodeWorks entered the picture, the agency had begun the task of mapping parts of the Operative Law Enforcement to separate modules, and KodeWorks extended this work by describing how data flow and consistency between the modules were to be ensured. Deep integration with distributed databases for each of the agency’s organizational units enabled an event-driven architecture, where the modules were modeled as microservices. This was the beginning of the modernization of the law enforcement agency’s operative portfolio that is used today."
        ]
      }
    ],
    published: true,
  },
  avinor: {
    name: 'Avinor',
    description: "Avinor’s social mission is to ensure good aviation services throughout Norway. This includes maintaining a good information flow to employees and air passengers. Avinor is subject to some of the country’s strictest requirements for safety and quality. KodeWorks has assisted with the integration of real-time information processing as well as testing and quality assurance of code.",
    image: 'avinor.jpg',
    urlName: 'avinor',
  },
  klp: {
    name: 'KLP',
    description: "Kommunal Landspensjonskasse Gjensidig Forsikringsselskap is an Oslo-based pension company that manages the pensions of municipal employees in Norway.",
    image: 'klp.jpg',
    urlName: 'klp',
  },
  thalesnorway: {
    name: 'THALES Norway',
    description: "Thales Group is a French, multi-national company that designs and builds electronic systems and delivers services for aviation, defense, transport and security.",
    image: 'thales.jpg',
    urlName: 'thalesnorway',
  },
  technipfmc: {
    name: 'TechnipFMC',
    description: "As a worldwide energy service company, TechnipFMC has large customers in Norway. Sensors are used for real-time monitoring of flow through installations, and heavy mathematical data modeling to optimize operations. KodeWorks assists in increasing the scalability and performance of the application portfolio, as well as modernizing the deployment system in the cloud.",
    image: 'technipfmc.jpg',
    urlName: 'technipfmc',
  },
  dnb: {
    name: 'DNB',
    description: "DNB as a company has worked for what is soon to be 200 years to find the best solutions for their customers, and is today one of the largest technology companies within the banking and financial sector. KodeWorks assists in this adaptation by establishing a central system for managing master- and reference data in DNB. In using a holistic end-to-end mindset and utilizing modern cloud services, KodeWorks helps DNB establish a robust solution for both operational and analytical usage.",
    image: 'dnb.jpg',
    urlName: 'dnb',
  },
  obos: {
    name: 'Obos',
    description: "OBOS plays a big role in the Norwegian housing and property market, and offers customers - among other services - an easier path to the housing market through partial housing ownership. OBOS is also behind Nabohjelp, an app that makes it easier to ask your neighbors for assistance. KodeWorks assists in both maintenance and development of the app, which is written in native iOS and Android.",
    image: 'obos.jpg',
    urlName: 'obos',
  },
  remarkable: {
    name: 'Remarkable',
    description: "reMarkable is a Norwegian startup developing a tablet for writing and drawing, and aiming to give the user a sensation of writing on paper. The unique tablet is designed for use in academia as well as in professional settings. KodeWorks assists in development of reMarkable’s complex and international web platform.",
    image: 'remarkable-2.jpg',
    urlName: 'remarkable',
  },
  aize: {
    name: 'Aize',
    description: "Aize is a project specialist that offers engineering, procurement and construction services, as well as the delivery of advanced offshore platforms, onshore facilities, floating production units and renewable energy solutions.",
    image: 'aize.jpg',
    urlName: 'aize',
  },
  nomono: {
    name: 'Nomono',
    description: "Cloud-based audio collaboration and processing built specifically for podcasters, broadcast journalists, and audio storytellers.",
    image: 'nomono.jpg',
    urlName: 'nomono',
  },
  pexip: {
    name: 'Pexip',
    description: "The start of 2020 was a world-changing era with the covid-19 pandemic. Relationships were maintained through strict official guidelines, which revolutionized the business. Less travel and fewer face-to-face meetings were a new reality, and video communication was the new standard. Pexip is a company with extensive experience in simplifying and optimizing video conferencing.",
    image: 'pexip.jpg',
    urlName: 'viode-conferencing-with-pexip',
  },
  mollerit: {
    name: 'Møller IT',
    description: "Møller IT, part of the Møller Mobility Group, is the leading car group in the Nordic and Baltic countries with over 60 dealers and 750,000 customers. The company has traditionally operated within new car sales, leasing, financing, used car sales, and now more recently other types of mobility services.",
    image: 'mollerit.jpg',
    urlName: 'mollerit',
  },
  thomsonreuters: {
    name: 'Thomson Reuters',
    description: "Through various digital platforms for energy and commodity trading, Thomson Reuters delivers analysis tools intended for investors and companies. The information presented in these solutions is time-critical, the amounts of data are large, the sources are many and the algorithms are complex.",
    image: 'thomasonreuters.jpg',
    urlName: 'thomsonreuters',
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
