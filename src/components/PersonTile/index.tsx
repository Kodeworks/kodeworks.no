import { Person } from '../../types';

import './persontile.css';

interface Prop {
  person: Person
}

function PersonTile({ person }: Prop) {

   return (
    <>
      <header>
        <img className="person-image" alt="" src={person.image} width="150" height="220" />
        <div className="person-overlay">
          <div className="person-information">
            <strong>{person.name}</strong>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
          <div className="person-actions">
            {person.urls && person.urls.map((url) => (
              <a key={url.name} href={url.url}>
                <img src={`assets/icons/${url.name}.svg`} alt="" width="26" height="26" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <ul className="projects">
        {person.projects.map((project) => (
          <li key={project.name}>
            <a href={`/input/${project.name.toLowerCase().replace(/ /g, '-')}`} className="btn btn-dark">{project.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PersonTile;
