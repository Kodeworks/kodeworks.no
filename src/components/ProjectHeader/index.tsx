import { Project } from '../../types';

import './projectheader.css';

interface Prop {
  project: Project;
  extras?: string;
}

export default function ProjectHeader({ project, extras }: Prop): JSX.Element {
  return (
    <header>
      <div className="projectHeader__content">
        <h1>{project.name}</h1>

        <ul className="projectHeader__technologies">
          {project.technologies && (
            <li>{project.technologies.join(', ')}</li>
          )}
        </ul>

        <p>{project.description}</p>
        {extras && <p>{extras}</p>}
      </div>

      <img className="projectHeader__image" src={project.image} width="1200" height="1200" alt="" />
    </header>
  );
}
