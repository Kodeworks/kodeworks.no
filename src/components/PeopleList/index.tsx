import { Person } from '../../types';

import PersonTile from '../PersonTile';

import './peopleList.css';

interface Prop {
  people: Person[]
}

export default function PeopleList({ people }: Prop): JSX.Element {
  return (
    <ul className="people-list">
      {people.map((person) => (
        <li key={person.name}>
          <PersonTile person={person} />
        </li>
      ))}
    </ul>
  );
}
