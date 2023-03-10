import projects from './data/projects';
import { client } from './lib/client';
import { Person } from './types';

// TODO: refactor to multiple interfaces & types. Use ts-utils to build IPeople
export interface IPerson {
  email: string;
  firstName: string;
  imageUrl: string;
  lastName: string;
  projects: {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    description: {
      en: string;
      nb: string;
    };
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    name: string;
    slug: { _type: string; current: string };
    technologies: string[];
  };
  socials: {
    _key: string;
    _type: string;
    type: string;
    url: string;
  }[];
}

interface FetchPeopleProps {
  limit?: number;
  includeDrafts?: boolean;
}
const fetchPeople = async ({ limit = 0, includeDrafts = false }: FetchPeopleProps) => {
  // TODO: add limit as props
  // const firstXPeople = limit ? `[0..${limit--}]` : '';
  const firstXPeople = limit ? `[0...${limit}]` : '';
  const showDrafts = includeDrafts ? '' : "&& !(_id in path('drafts.**'))";
  const people = await client.fetch<Person[]>(
    `*[_type == "people" ${showDrafts}]${firstXPeople}{firstName, lastName, email, projects[] ->, socials, "imageUrl": image.asset->url}`
  );
  // console.log('PEOPLE: ');
  // console.log(JSON.stringify(people, null, 2));
  return people;
};

const api = {
  projects,
  people: {
    get: fetchPeople,
  },
};

export default api;
