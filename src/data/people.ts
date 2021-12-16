import { Person } from '../types.d';
import { projects } from './projects';

/*  */
const stories = [projects.Lilbit, projects.Inatur];

const people: Array<Person> = [
  {
    name: 'Ingrid Skar',
    email: 'ingrid@kodeworks.no',
    projects: [projects.Equinor, projects.Inatur],
    image: 'assets/people/1.jpg',
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
    image: 'assets/people/2.jpg',
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
    projects: [projects.Statkraft],
    image: 'assets/people/3.jpg',
  },
  {
    name: 'Eirik Larsen',
    email: 'eirik@kodeworks.no',
    projects: [projects.Politiet, projects.Sunlitsea],
    image: 'assets/people/4.jpg',
  },
  {
    name: 'Simen Moen Storvik',
    email: 'simen@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/5.jpg',
  },
  {
    name: 'Joachim Fasting',
    email: 'joachim@kodeworks.no',
    projects: [projects.Lilbit],
    image: 'assets/people/6.jpg',
  },
  {
    name: 'Peter Ringset',
    email: 'peter@kodeworks.no',
    projects: [projects.Skandiaenergi, projects.Vaskehjelp],
    image: 'assets/people/7.jpg',
  },
  {
    name: 'Sindre Stephansen',
    email: 'sindre@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/8.jpg',
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
    projects: [projects.Wtw, projects.Sunlitsea, projects.Equinor],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Rune Holmgren',
    email: 'rune@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Ørjan Bostad Vesterlid',
    email: 'orjan@kodeworks.no',
    projects: [projects.Wtw, projects.Lilbit, projects.Skandiaenergi],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Ole Johan Adersen',
    email: 'ole@kodeworks.no',
    projects: [projects.Inatur, projects.Equinor],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Jan Burak',
    email: 'jan@kodeworks.no',
    projects: [projects.Sunlitsea],
    image: 'assets/people/9.jpg',
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
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Eivind Kristiansen Skjelmo',
    email: 'eivind@kodeworks.no',
    projects: [projects.Inatur],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Andreas Norstein',
    email: 'andreas@kodeworks.no',
    projects: [projects.Inatur],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Lars Ødegaard',
    email: 'lars@kodeworks.no',
    projects: [projects.Kongsberg, projects.Thales],
    image: 'assets/people/9.jpg',
  },
  {
    name: 'Martin Wilhelmsen',
    email: 'martin@kodeworks.no',
    projects: [projects.Kongsberg, projects.Thales],
    image: 'assets/people/9.jpg',
  },
];

function getPeople(): Array<Person> {
  return people;
}

function getHighligtedPeople(): Array<Person> {
  const people = getPeople();

  const filteredList = people.filter((person) => {
    let hasProject = false;
    person.projects.forEach((project) => { hasProject = stories.indexOf(project) > -1 });
    return hasProject;
  })

  return filteredList;
}

export default {
  getHighligtedPeople,
  getPeople
};
