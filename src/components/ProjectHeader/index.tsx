import { Project } from '../../types';

import './projectheader.css';

interface Prop {
  project: Project;
  extras?: string;
}

export default function ProjectHeader({ project, extras }: Prop): JSX.Element {
  return (
    <header>
      <h1>{project.name}</h1>
      {project.technologies && (
        <div className="project__technologies">{project.technologies.join(', ')}</div>
      )}

      <p>{project.description}</p>
      { extras && <p>{ extras }</p> }
    </header>
  );
}
