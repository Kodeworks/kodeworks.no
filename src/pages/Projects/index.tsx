import { useEffect } from 'react';

import ProjectTile from '../../components/ProjectTile';

import api from '../../api';

import './projects.css';

interface Prop {
  handleDarkMode(isDarkMode: boolean): any
}

function Projects({ handleDarkMode }: Prop) {
  useEffect(() => {
    handleDarkMode(true);
  }, []);

  return (
    <div id="page-projects" className="theme-dark">
      <header>
        <h1>Prosjektene</h1>

        <p>Since 2008, we have through our value oriented approach completed great projects with clients of varying size, and across a wide spectrum of domains. Read more about the types of solutions we have developed for our client here.</p>
      </header>

      { api.projects.getProjects().map((project) => <ProjectTile key={ project.name } project={ project }/>)}
    </div>
  );
}

export default Projects;
