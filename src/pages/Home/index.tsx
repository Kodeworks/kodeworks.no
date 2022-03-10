import { useEffect, useState } from 'react';

import api from '../../api';
import darkMode from '../../utils/darkMode';
import { Person, Project } from '../../types';

import Button from '../../components/Button';
import PeopleList from '../../components/PeopleList';

import ImageAbout from './assets/EOSR7695.jpg';

import './home.css';

interface Prop {
  handleDarkMode(isDarkMode: boolean): any
}

function Home({ handleDarkMode }: Prop) {
  const [highlightedProject, setHighlightedProject] = useState<Project>();
  const [highlightedPeople, setHighlightedPeople] = useState<Array<Person>>([]);

  const people = api.people.getPeople();
  const highlightedProjects = api.projects.getHighlightedProjects();

  useEffect(() => {
    const project = highlightedProjects[Math.ceil(Math.random() * highlightedProjects.length) - 1];
    const people = api.people.getHighligtedPeople().slice(0, 6);

    setHighlightedProject(project);
    setHighlightedPeople(people);
  }, []);

  useEffect(() => {
    handleDarkMode(false);
  }, []);

  useEffect(() => {
    function darkModeListener() {
      darkMode(handleDarkMode, ['projects', 'about-imageContainer']);
    }

    document.addEventListener('scroll', darkModeListener);

    return function cleanupListener() {
      document.removeEventListener('scroll', darkModeListener);
    }
  }, [handleDarkMode]);

  return (
    <>
      <header id="main-header">
        <img className="logo" src="/assets/logo.svg" alt="Logo" width="280" height="59" />
      </header>

      <article id="about">
        <div>
          <h2>Who?</h2>
          <p>
            We are a pack of technologists who believe in creating value through receptiveness, expertise and dedication. We commit ourselves to delivering good solutions and value in collaboration with our clients, and strive each day to create an invigorating and giving workplace.
          </p>
        </div>
        <span id="about-imageContainer">
          <img src={ImageAbout} alt="" />
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
              <Button appearance={Button.appearances.LightNoPadding} href="/people">See all of them</Button>
            </p>
          </header>
          <PeopleList people={highlightedPeople} />
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
          <Button appearance={Button.appearances.DarkNoPadding} href={`/input/${highlightedProject && highlightedProject.urlName.toLowerCase()}`} disabled={!(highlightedProject && highlightedProject.enabled)}>Go to project page</Button>
        </div>
      </article>

      <article id="work">
        <div>
          <h2>Join the team!</h2>
          <p>
            We want to get to know you! Let's grab a cup of coffee, and feel free to have a look at our <a href="/staffmanual">Staff Manual</a> for a better grasp of what we offer.
          </p>
          <p>
            You can reach us at <strong>jobb@kodeworks.no</strong>.
          </p>
        </div>
      </article>
    </>
  );
}

export default Home;
