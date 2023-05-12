import { Person } from '../../types';

import PersonTile from '../PersonTile';

import style from './peopleList.module.css';

interface Prop {
  people: Person[];
}

export default function PeopleList({ people }: Prop): JSX.Element {
  return (
    <ul className={style['people-list']}>
      {people.map((person) => (
        <li key={person.firstName}>
          <PersonTile person={person} />
        </li>
      ))}
    </ul>
  );
}
