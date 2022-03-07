import { Person } from '../types.d';
import { projects } from './projects';

/* Highlighted stories */
const stories = [projects.Sunlitsea, projects.Vaskehjelp];

const people: Array<Person> = [
  {
    name: 'Ingrid Skar',
    email: 'ingrid@kodeworks.no',
    projects: [projects.Equinor, projects.Inatur],
    image: '/assets/people/ingrid.jpg',
    urls: [
      {
        name: 'github',
        url: 'https://github.com/ingrskar'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/ingrid-skar/'
      }
    ],
  },
  {
    name: 'Tri Nguyen',
    email: 'tri@kodeworks.no',
    projects: [projects.Vaskehjelp, projects.Inatur, projects.Flir],
    image: '/assets/people/tri.jpg',
    urls: [
      {
        name: 'github',
        url: 'https://github.com/tmn'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/trimn/'
      }
    ],
  },
  {
    name: 'Aleksander Skraastad',
    email: 'aleksander@kodeworks.no',
    projects: [projects.Statkraft, projects.Dnb],
    image: '/assets/people/aleksander.jpg',
  },
  {
    name: 'Ådne Nystuen',
    email: 'adne@kodeworks.no',
    projects: [projects.Obos],
    image: '/assets/people/adne.jpg',
  },
  {
    name: 'Eirik Larsen',
    email: 'eirik@kodeworks.no',
    projects: [projects.Politiet, projects.Sunlitsea, projects.Avinor, projects.TechnipFMC, projects.MollerIT, projects.ThomsonReuters],
    image: '/assets/people/eirik.jpg',
  },
  {
    name: 'Simen Moen Storvik',
    email: 'simen@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: '/assets/people/simen.jpg',
  },
  {
    name: 'Joachim Fasting',
    email: 'joachim@kodeworks.no',
    projects: [projects.Lilbit],
    image: '/assets/people/joachim.jpg',
  },
  {
    name: 'Peter Ringset',
    email: 'peter@kodeworks.no',
    projects: [projects.Skandiaenergi, projects.Vaskehjelp, projects.Nomono],
    image: '/assets/people/peter.jpg',
  },
  {
    name: 'Sindre Stephansen',
    email: 'sindre@kodeworks.no',
    projects: [projects.Skandiaenergi, projects.Thales],
    image: '/assets/people/sindre.jpg',
  },
  {
    name: 'Erik Kjosavik',
    email: 'erik@kodeworks.no',
    projects: [projects.Inatur, projects.Gintel, projects.Bnentreprenor],
    image: '',
  },
  {
    name: 'Vegard Stengrundet',
    email: 'vegard@kodeworks.no',
    projects: [projects.Sunlitsea, projects.Equinor, projects.Kongsberg],
    image: '/assets/people/vegard.jpg',
  },
  {
    name: 'Rune Holmgren',
    email: 'rune@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: '/assets/people/rune.jpg',
  },
  {
    name: 'Nina Aalberg Johannessen',
    email: 'nina@kodeworks.no',
    projects: [projects.Administration],
    image: '',
  },
  {
    name: 'Ørjan Bostad Vesterlid',
    email: 'orjan@kodeworks.no',
    projects: [projects.Lilbit, projects.Skandiaenergi],
    image: '/assets/people/orjan.jpg',
  },
  {
    name: 'Ole Johan Adersen',
    email: 'ole@kodeworks.no',
    projects: [projects.Inatur, projects.Equinor],
    image: '/assets/people/ole.jpg',
  },
  {
    name: 'Jan Burak',
    email: 'jan@kodeworks.no',
    projects: [projects.Sunlitsea, projects.Aize],
    image: '/assets/people/jan.jpg',
  },
  {
    name: 'Håkon Hesselberg',
    email: 'hakon@kodeworks.no',
    projects: [projects.Kongsberg],
    image: '',
  },
  {
    name: 'Ferdy Wessing',
    email: 'ferdy@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: '/assets/people/ferdy.jpg',
  },
  {
    name: 'Eivind Kristiansen Skjelmo',
    email: 'eivind@kodeworks.no',
    projects: [projects.Inatur, projects.Vaskehjelp],
    image: '/assets/people/eivind.jpg',
  },
  {
    name: 'Andreas Norstein',
    email: 'andreas@kodeworks.no',
    projects: [projects.Inatur, projects.Dnb],
    image: '/assets/people/andreas.jpg',
  },
  {
    name: 'Lars Ødegaard',
    email: 'lars@kodeworks.no',
    projects: [projects.Kongsberg, projects.Thales],
    image: '/assets/people/lars.jpg',
  },
  {
    name: 'Martin Wilhelmsen',
    email: 'martin@kodeworks.no',
    projects: [projects.Kongsberg, projects.Thales],
    image: '/assets/people/martin.jpg',
  },
  {
    name: 'John Hansen',
    email: 'john@kodeworks.no',
    projects: [projects.KLP, projects.Remarkable, projects.Equinor],
    image: '/assets/people/john.jpg',
  },
  {
    name: 'Thomas Gulbrandsrød',
    email: 'thomas@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: '/assets/people/thomas.jpg',
  },
  {
    name: 'Erik Skår',
    email: 'erik.skar@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: '',
  },
  {
    name: 'Pål Nødseth',
    email: 'pal.nodseth@kodeworks.no',
    projects: [projects.Equinor],
    image: '',
  },
  {
    name: 'Lasse Holanger',
    email: 'lasse@kodeworks.no',
    projects: [projects.Administration],
    image: '',
  },
];

function getPeople(): Array<Person> {
  return shufflePeopleWithoutImagesToBottom(shuffleArray(people));
}

function getHighligtedPeople(): Array<Person> {
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
  })

  return filteredList.filter((person) => person.image);
}

function shuffleArray(array: Array<Person>): Array<Person> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function shufflePeopleWithoutImagesToBottom(people: Array<Person>): Array<Person> {
  let _people: Array<Person> = [];

  people.forEach((person) => {
    if (person.image == undefined || person.image.length == 0) {
      _people.push(person);
    } else {
      _people.unshift(person);
    }
  });

  return _people;
}

const exportedFunctions = {
  getHighligtedPeople,
  getPeople
};

export default exportedFunctions;
