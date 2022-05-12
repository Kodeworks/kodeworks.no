import { Project } from '../../types';

import './projecttile.css';

interface Prop {
  project: Project
}

export default function ProjectTile({ project }: Prop): JSX.Element {
  return (
    <article>
      <img className="project-tile--image" src={project.image} width="1200" height="1200" alt={project.name} />
      <div className="project-ingress">
        <h3>
          {
            project.element !== null
              ? <a href={`/input/${project.urlName}`} className="project-link">{project.name}</a>
              : project.name
          }
        </h3>
        <p>{project.description}</p>
      </div>
    </article>
  )
}
