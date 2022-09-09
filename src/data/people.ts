import { Person } from '../types.d';
import { projects } from './projects';

/* Highlighted stories */
const stories = [projects.inatur, projects.sunlitsea, projects.vaskehjelp];

const people: Person[] = [
  {
    name: 'Tri Nguyen',
    email: 'tri@kodeworks.no',
    projects: [projects.vaskehjelp, projects.inatur, projects.flir],
    image: '/static/photos/people/tri.jpg',
    urls: [
      {
        name: 'github',
        url: 'https://github.com/tmn',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/trimn/',
      },
    ],
  },
  {
    name: 'Aleksander Skraastad',
    email: 'aleksander@kodeworks.no',
    projects: [projects.statkraft, projects.dnb],
    image: '/static/photos/people/aleksander.jpg',
    urls: [
      {
        name: 'github',
        url: 'https://github.com/myth',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/aleksander-skraastad/',
      },
    ],
  },
  {
    name: 'Ådne Nystuen',
    email: 'adne@kodeworks.no',
    projects: [projects.obos],
    image: '/static/photos/people/adne.jpg',
    urls: [
      {
        name: 'github',
        url: 'https://github.com/nystu1',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/adne-nystuen/',
      },
    ],
  },
  {
    name: 'Eirik Larsen',
    email: 'eirik@kodeworks.no',
    projects: [
      projects.lawenforcementagency,
      projects.sunlitsea,
      projects.avinor,
      projects.technipfmc,
      projects.mollerit,
      projects.thomsonreuters,
    ],
    image: '/static/photos/people/eirik.jpg',
  },
  {
    name: 'Simen Moen Storvik',
    email: 'simen@kodeworks.no',
    projects: [projects.inatur, projects.sunlitsea, projects.sesam],
    image: '/static/photos/people/simen.jpg',
  },
  {
    name: 'Joachim Fasting',
    email: 'joachim@kodeworks.no',
    projects: [projects.lilbit],
    image: '/static/photos/people/joachim.jpg',
  },
  {
    name: 'Peter Ringset',
    email: 'peter@kodeworks.no',
    projects: [projects.skandiaenergi, projects.vaskehjelp, projects.nomono],
    image: '/static/photos/people/peter.jpg',
    urls: [
      {
        name: 'github',
        url: 'https://github.com/peterringset',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/peter-ringset-3415a719/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/PRingset',
      },
    ],
  },
  {
    name: 'Sindre Stephansen',
    email: 'sindre@kodeworks.no',
    projects: [projects.skandiaenergi, projects.thalesnorway],
    image: '/static/photos/people/sindre.jpg',
  },
  {
    name: 'Erik Kjosavik',
    email: 'erik@kodeworks.no',
    projects: [projects.inatur, projects.gintel, projects.bnentreprenor],
    image: '/static/photos/people/erik.jpg',
  },
  {
    name: 'Vegard Stengrundet',
    email: 'vegard@kodeworks.no',
    projects: [projects.sunlitsea, projects.equinor, projects.kongsberg],
    image: '/static/photos/people/vegard.jpg',
  },
  {
    name: 'Rune Holmgren',
    email: 'rune@kodeworks.no',
    projects: [projects.sunlitsea],
    image: '/static/photos/people/rune.jpg',
  },
  {
    name: 'Nina Aalberg Johannessen',
    email: 'nina@kodeworks.no',
    projects: [projects.administration],
    image: '/static/photos/people/nina.jpg',
  },
  {
    name: 'Ørjan Bostad Vesterlid',
    email: 'orjan@kodeworks.no',
    projects: [projects.lilbit, projects.skandiaenergi],
    image: '/static/photos/people/orjan.jpg',
  },
  {
    name: 'Ole Johan Adersen',
    email: 'ole@kodeworks.no',
    projects: [projects.inatur, projects.equinor],
    image: '/static/photos/people/ole.jpg',
  },
  {
    name: 'Jan Burak',
    email: 'jan@kodeworks.no',
    projects: [projects.sunlitsea, projects.aize, projects.sesam],
    image: '/static/photos/people/jan.jpg',
  },
  {
    name: 'Håkon Hesselberg',
    email: 'hakon@kodeworks.no',
    projects: [projects.kongsberg],
    image: '',
  },
  {
    name: 'Ferdy Wessing',
    email: 'ferdy@kodeworks.no',
    projects: [projects.sunlitsea],
    image: '/static/photos/people/ferdy.jpg',
  },
  {
    name: 'Eivind Kristiansen Skjelmo',
    email: 'eivind@kodeworks.no',
    projects: [projects.inatur, projects.vaskehjelp],
    image: '/static/photos/people/eivind.jpg',
  },
  {
    name: 'Andreas Norstein',
    email: 'andreas@kodeworks.no',
    projects: [projects.inatur, projects.dnb],
    image: '/static/photos/people/andreas.jpg',
  },
  {
    name: 'Lars Ødegaard',
    email: 'lars@kodeworks.no',
    projects: [projects.kongsberg, projects.thalesnorway],
    image: '/static/photos/people/lars.jpg',
  },
  {
    name: 'Martin Wilhelmsen',
    email: 'martin@kodeworks.no',
    projects: [projects.kongsberg, projects.thalesnorway],
    image: '/static/photos/people/martin.jpg',
  },
  {
    name: 'John Hansen',
    email: 'john@kodeworks.no',
    projects: [projects.klp, projects.remarkable, projects.equinor],
    image: '/static/photos/people/john.jpg',
  },
  {
    name: 'Thomas Gulbrandsrød',
    email: 'thomas@kodeworks.no',
    projects: [projects.sunlitsea],
    image: '/static/photos/people/thomas.jpg',
  },
  {
    name: 'Erik Skår',
    email: 'erik.skar@kodeworks.no',
    projects: [projects.sunlitsea],
    image: '',
  },
  {
    name: 'Pål Nødseth',
    email: 'pal.nodseth@kodeworks.no',
    projects: [projects.equinor],
    image: '/static/photos/people/pal.jpg',
  },
  {
    name: 'Lasse Holanger',
    email: 'lasse@kodeworks.no',
    projects: [projects.administration],
    image: '/static/photos/people/lasse.jpg',
  },
  {
    name: 'Jan-Marius Vatle',
    email: 'janmarius@kodeworks.no',
    projects: [projects.sunlitsea],
    image: '',
  },
  {
    name: 'Ole Marius Forbord',
    email: 'olemarius@kodeworks.no',
    projects: [projects.sunlitsea],
    image: '',
  },
  {
    name: 'Eirik Baug',
    email: 'eirik.baug@kodeworks.no',
    projects: [],
    image: '',
  },
];

function getPeople(): Person[] {
  return shufflePeopleWithoutImagesToBottom(shuffleArray(people));
}

function getHighligtedPeople(): Person[] {
  const people = getPeople();

  const filteredList = people.filter((person) => {
    let hasProject = false;
    for (let project of person.projects) {
      hasProject = stories.indexOf(project) > -1;

      if (hasProject) {
        break;
      }
    }

    return hasProject;
  });

  return filteredList.filter((person) => person.image);
}

function shuffleArray(array: Person[]): Person[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function shufflePeopleWithoutImagesToBottom(people: Person[]): Person[] {
  let _people: Person[] = [];

  people.forEach((person) => {
    if (person.image == undefined || person.image.length == 0) {
      _people.push(person);
    } else {
      _people.unshift(person);
    }
  });

  return _people;
}

const peopleApi = {
  getHighligtedPeople,
  getPeople,
};

export default peopleApi;
