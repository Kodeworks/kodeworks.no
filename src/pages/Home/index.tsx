import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../api';
import darkMode from '../../utils/darkMode';

import PeopleList from '../../components/PeopleList';

import './home.css';
import { Project } from '../../types';

interface Prop {
  handleDarkMode(isDarkMode: boolean): any
}

function Home({ handleDarkMode } : Prop) {
  const [highlightedProject, setHighlightedProject] = useState<Project>();

  const people = api.people.getPeople();
  const highlightedProjects = api.projects.getHighlightedProjects();

  useEffect(() => {
    const project = highlightedProjects[Math.ceil(Math.random() * highlightedProjects.length) - 1];
    setHighlightedProject(project);
  }, []);

  useEffect(() => {
    handleDarkMode(false);
  }, []);

  useEffect(() => {
    function darkModeListener() {
      darkMode('projects', handleDarkMode);
    }

    document.addEventListener('scroll', darkModeListener);

    return function cleanupListener() {
      document.removeEventListener('scroll', darkModeListener);
    }
  }, [handleDarkMode]);

  return (
    <>
      <header id="main-header">
        <img className="logo" src="../assets/logo.svg" alt="Logo" width="280" height="59" />
      </header>

      <article id="about">
        <div>
          <h2>Who?</h2>
          <p>
            We are a pack of technologists that believe in creating value through openness, expertise and dedication. We commit ourselves to delivering good solutions and value in collaboration with our client. Meanwhile, we strive each day to create an invigorating and giving workplace.
          </p>
        </div>

        <img src="../assets/office.jpg" alt="" />
      </article>

      <article id="people">
        <div>
          <header className="people-header">
            <h2>Møt Menneskene</h2>
            <p>
              I Kodeworks har vi {people.length} teknologer som brenner for faget. Her er
              et lite tilfeldig utvalg av dem.
            </p>
            <p>
              <Link to="people">Se alle menneskene</Link>{" "}
              <img
                src="../assets/icons/chevron-right.svg"
                alt=""
                width="8"
                height="11"
              />
            </p>
          </header>

          <PeopleList />
        </div>
      </article>

      <article id="projects">
        <img
          src={highlightedProject && highlightedProject.image}
          alt={highlightedProject && highlightedProject.name}
          width="400"
          height="400"
        />

        <div>
          <h2>{highlightedProject && highlightedProject.name}</h2>
          <p>
            {highlightedProject && highlightedProject.description}
          </p>
          <Link to={`/input/${highlightedProject && highlightedProject.name.toLowerCase()}`} className="btn btn-light">Les mer om prosjektet</Link>
        </div>
      </article>

      <article id="work">
        <div>
          <h2>Vil du jobbe med oss?</h2>
          <p>
            Vi vil bli bedre kjent med deg! Ta gjerne kontakt for en uformell
            prat over en kaffe, og titt innom håndboka vår og se hva vi kan
            tilby.
          </p>
          <p>
            <Link to="/staffmanual">Personalhåndboken</Link>
          </p>
        </div>
      </article>
    </>
  );
}

export default Home;
