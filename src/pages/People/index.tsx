import api from '../../api';

import PersonTile from '../../components/PersonTile';

import './people.css';

function People() {
  return (
    <div id="container">
      <div>
      <h1>People</h1>
      <ul id="people-list">
          {api.people.getPeople().map((person) => (
            <li key={person.name}>
              <PersonTile person={person}/>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
};

export default People;
