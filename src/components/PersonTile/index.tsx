import { Person } from '../../types';

import Button from '../Button';

import './persontile.css';

interface Prop {
  person: Person
}

function PersonTile({ person }: Prop) {

  function getImage(person: Person) {
    if (person.name === 'Nina Aalberg Johannessen') {
      return '/assets/people/placeholder-1.jpg'
    }

    return person.image || '/assets/people/placeholder-2.jpg';
  }
  return (
    <>
      <header className="person">
        <img className="person-image" alt="" src={getImage(person)} width="450" height="550" />
        <div className="person-overlay">
          <div className="person-information">
            <strong>{person.name}</strong>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
          <ul className="person-actions">
            {person.urls && person.urls.map((url) => (
              <li key={url.name}>
                <a href={url.url}>
                  <img src={`assets/icons/${url.name}.svg`} alt="" width="26" height="26" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <ul className="list-plain person-projects">
        {person.projects.map((project) => (
          <li key={project.name}>
            <Button href={`/input/${project.urlName.toLowerCase().replace(/ /i, '-')}`} disabled={!project.enabled}>{ project.name }</Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PersonTile;
