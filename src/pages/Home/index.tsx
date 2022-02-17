import { useEffect, useState } from 'react';

import api from '../../api';
import darkMode from '../../utils/darkMode';
import { Project } from '../../types';

import PeopleList from '../../components/PeopleList';

import './home.css';

interface Prop {
  handleDarkMode(isDarkMode: boolean): any
}

function Home({ handleDarkMode }: Prop) {
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
      darkMode(handleDarkMode, ['projects', 'about-image']);
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
            We are a pack of technologists who believe in creating value through receptiveness, expertise and dedication. We commit ourselves to delivering good solutions and value in collaboration with our clients, and strive each day to create an invigorating and giving workplace.
          </p>
        </div>
        <span id="about-image">
          <img src="../assets/office.jpg" alt="" />
        </span>
      </article>

      <article id="people">
        <div>
          <header className="people-header">
            <h2>Our Developers</h2>
            <p>
              Today Kodeworks consists of {people.length} accomplished developers, who endeavor to develop solutions realizing our clients vision.
            </p>
            <p>
              <a href="people">See all of them</a>{" "}
              <img
                src="../assets/icons/chevron-right.svg"
                alt=""
                width="8"
                height="11"
              />
            </p>
          </header>

          <PeopleList people={api.people.getHighligtedPeople().slice(0, 6)} />
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
          <a href={`/input/${highlightedProject && highlightedProject.name.toLowerCase()}`} className="btn btn-light">Les mer om prosjektet</a>
        </div>
      </article>

      <article id="work">
        <div>
          <h2>We want to get to get to know you!</h2>
          <p>
            Let's grab a cup of coffee, and feel free to have a look at our staff manual for a better grasp of what we offer.
          </p>
          <p>
            <a href="/staffmanual">Staff Manual</a>
          </p>
        </div>
      </article>
    </>
  );
}

export default Home;