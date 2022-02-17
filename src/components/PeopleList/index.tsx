import api from '../../api';
import { Person } from '../../types';

import PersonTile from '../PersonTile';

import './peopleList.css';

interface Prop {
  people: Array<Person>
}

export default function PeopleList({ people }: Prop) {
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
