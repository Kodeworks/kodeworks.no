import ProjectTile from '../../components/ProjectTile';

import api from '../../api';

import './projects.css';

function Projects() {
  return (
    <div id="page-projects" className="theme-dark">
      <header>
        <h1>Prosjektene</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet dapibus nisl, eu molestie odio. Cras egestas lorem sed mauris dapibus viverra. Praesent quis iaculis augue, sit amet porta lacus..</p>
      </header>

      { api.projects.getProjects().map((project) => <ProjectTile key={ project.name } project={ project }/>)}
    </div>
  );
}

export default Projects;
