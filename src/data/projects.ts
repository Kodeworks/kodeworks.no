import { Project } from '../types';

interface ProjectObjectType {
  [key: string]: Project
}

export const projects: ProjectObjectType = {
  Equinor: {
    name: 'Equinor',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Inatur: {
    name: 'Inatur',
    image: '/assets/projects/project2.jpg',
    description: 'Lorem ipsum dolor sit amet',
    highlighted: true,
  },
  Statkraft: {
    name: 'Statkraft',
    image: '/assets/projects/project3.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Flir: {
    name: 'Teledynename:  FLIR',
    image: '/assets/projects/project4.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Vaskehjelp: {
    name: 'Vaskehjelp',
    image: '/assets/projects/project4.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Sunlitsea: {
    name: 'Sunlitname:  Sea',
    image: '/assets/projects/project4.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Lilbit: {
    name: 'Lilbit',
    image: '/assets/projects/project5.jpg',
    description: 'Lorem ipsum dolor sit amet',
    highlighted: true,
  },
  Skandiaenergi: {
    name: 'Skandiaenergi',
    image: '/assets/projects/project5s.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Kongsberg: {
    name: 'Kongsberg',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Akerbp: {
    name: 'Akerbp',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Gintel: {
    name: 'Gintel',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Bnentreprenor: {
    name: 'Bnentreprenor',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Politiet: {
    name: 'Politiet',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Avinor: {
    name: 'Avinor',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Wtw: {
    name: 'Wtw',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  KLP: {
    name: 'KLP',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
  },
  Thales: {
    name: 'THALES',
    image: '/assets/projects/project1.jpg',
    description: 'Lorem ipsum dolor sit amet',
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
