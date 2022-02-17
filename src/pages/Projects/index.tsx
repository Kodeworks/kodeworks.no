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
        <h1>Our Projects</h1>

        <p>By adopting our value oriented approach we have carried out projects with and for clients of varying size, and across a wide spectrum of domains. Below you can find the types of solutions we have developed for our customers.</p>
      </header>

      { api.projects.getProjects().map((project) => <ProjectTile key={ project.name } project={ project }/>)}
    </div>
  );
}

export default Projects;
