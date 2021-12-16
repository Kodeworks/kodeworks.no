import { Project } from '../../types';

import './projecttile.css';

interface Prop {
  project: Project
}

function ProjectTile({ project }: Prop) {
  return (
    <article>
      <img src={ project.image } width="1200" height="1200" alt="" />
      <div className="project-ingress">
        <h3>{ project.name }</h3>
        <p>{ project.description }</p>
      </div>
    </article>
  )
}

export default ProjectTile
