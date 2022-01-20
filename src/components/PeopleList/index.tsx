import api from '../../api';

import PersonTile from '../PersonTile';

import './peopleList.css';

export default function PeopleList() {
  return (
    <ul className="people-list">
      {api.people.getHighligtedPeople().slice(0, 6).map((person) => (
        <li key={person.name}>
          <PersonTile person={person} />
        </li>
      ))}
    </ul>
  );
}
