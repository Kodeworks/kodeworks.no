import { Person } from '../types.d';
import { projects } from './projects';

/*  */
const stories = [projects.Lilbit, projects.Inatur, projects.Vaskehjelp];

const people: Array<Person> = [
  {
    name: 'Ingrid Skar',
    email: 'ingrid@kodeworks.no',
    projects: [projects.Equinor, projects.Inatur],
    image: 'assets/people/ingrid-3.jpg',
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
    image: 'assets/people/tri-1.jpg',
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
    image: 'assets/people/aleksander-1.jpg',
  },
  {
    name: 'Ådne Nystuen',
    email: 'adne@kodeworks.no',
    projects: [projects.Obos],
    image: 'assets/people/adne-2.jpg',
  },
  {
    name: 'Eirik Larsen',
    email: 'eirik@kodeworks.no',
    projects: [projects.Politiet, projects.Sunlitsea],
    image: 'assets/people/eirik-2.jpg',
  },
  {
    name: 'Simen Moen Storvik',
    email: 'simen@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/simen-1.jpg',
  },
  {
    name: 'Joachim Fasting',
    email: 'joachim@kodeworks.no',
    projects: [projects.Lilbit],
    image: 'assets/people/joachim-2.jpg',
  },
  {
    name: 'Peter Ringset',
    email: 'peter@kodeworks.no',
    projects: [projects.Skandiaenergi, projects.Vaskehjelp],
    image: 'assets/people/peter-1.jpg',
  },
  {
    name: 'Sindre Stephansen',
    email: 'sindre@kodeworks.no',
    projects: [projects.Sunlitsea, projects.Thales],
    image: 'assets/people/sindre-1.jpg',
  },
  {
    name: 'Erik Kjosavik',
    email: 'erik@kodeworks.no',
    projects: [projects.Inatur, projects.Gintel, projects.Bnentreprenor],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Vegard Stengrundet',
    email: 'vegard@kodeworks.no',
    projects: [projects.Wtw, projects.Sunlitsea, projects.Equinor, projects.Kongsberg],
    image: 'assets/people/vegard-2.jpg',
  },
  {
    name: 'Rune Holmgren',
    email: 'rune@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/rune-1.jpg',
  },
  {
    name: 'Ørjan Bostad Vesterlid',
    email: 'orjan@kodeworks.no',
    projects: [projects.Wtw, projects.Lilbit, projects.Skandiaenergi],
    image: 'assets/people/orjan-1.jpg',
  },
  {
    name: 'Ole Johan Adersen',
    email: 'ole@kodeworks.no',
    projects: [projects.Inatur, projects.Equinor],
    image: 'assets/people/ole-1.jpg',
  },
  {
    name: 'Jan Burak',
    email: 'jan@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/jan-2.jpg',
  },
  {
    name: 'Håkon Hesselberg',
    email: 'hakon@kodeworks.no',
    projects: [projects.Kongsberg],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Ferdy Wessing',
    email: 'ferdy@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/ferdy-1.jpg',
  },
  {
    name: 'Eivind Kristiansen Skjelmo',
    email: 'eivind@kodeworks.no',
    projects: [projects.Inatur, projects.Vaskehjelp],
    image: 'assets/people/eivind-1.jpg',
  },
  {
    name: 'Andreas Norstein',
    email: 'andreas@kodeworks.no',
    projects: [projects.Inatur, projects.Dnb],
    image: 'assets/people/andreas-1.jpg',
  },
  {
    name: 'Lars Ødegaard',
    email: 'lars@kodeworks.no',
    projects: [projects.Kongsberg, projects.Thales],
    image: 'assets/people/lars-1.jpg',
  },
  {
    name: 'Martin Wilhelmsen',
    email: 'martin@kodeworks.no',
    projects: [projects.Kongsberg, projects.Thales],
    image: 'assets/people/martin-1.jpg',
  },
];

function getPeople(): Array<Person> {
  return people;
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

  return shuffleArray(filteredList);
}

function shuffleArray(array: Array<Person>): Array<Person> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const exportedFunctions = {
  getHighligtedPeople,
  getPeople
};

export default exportedFunctions;
