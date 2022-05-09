import { useContext, useEffect, useState } from 'react';

import api from '../../api';
import { useClipText } from '../../utils/useClipText';
import { Person, Project } from '../../types';

import { ClipContentContext } from '../../context/ClipContentContext';

import Button from '../../components/Button';
import PeopleList from '../../components/PeopleList';

import ImageAbout from './assets/EOSR7695.jpg';

import './home.css';

function Home(): JSX.Element {
  const [highlightedProject, setHighlightedProject] = useState<Project>();
  const [highlightedPeople, setHighlightedPeople] = useState<Array<Person>>([]);

  const { changeClipMode } = useContext(ClipContentContext);

  const people = api.people.getPeople();
  const highlightedProjects = api.projects.getHighlightedProjects();

  useEffect(() => {
    const project = highlightedProjects[Math.ceil(Math.random() * highlightedProjects.length) - 1];
    const people = api.people.getHighligtedPeople().slice(0, 6);

    setHighlightedProject(project);
    setHighlightedPeople(people);
  }, []);

  const shouldClipText = useClipText(['projects', 'about-image-container']);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText]);

  return (
    <>
      <header id="main-header">
        <img className="logo" src="/assets/logo.svg" alt="Logo" width="280" height="59" />
      </header>

      <article id="about">
        <div>
          <h2 className="section-header-headline">Who?</h2>
          <p>
            We are a pack of technologists who believe in creating value through receptiveness, expertise and dedication. We commit ourselves to delivering good solutions and value in collaboration with our clients, and strive each day to create an invigorating and giving workplace.
          </p>
        </div>
        <span id="about-image-container">
          <img src={ImageAbout} alt="" />
        </span>
      </article>

      <article id="people">
        <div>
          <header className="people-header">
            <h2 className="section-header-headline">Our Developers</h2>
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
          <h2 className="section-header-headline">{highlightedProject && highlightedProject.name}</h2>
          <p>
            {highlightedProject && highlightedProject.description}
          </p>
          <Button appearance={Button.appearances.DarkNoPadding} href={`/input/${highlightedProject && highlightedProject.urlName.toLowerCase()}`} disabled={!(highlightedProject && (highlightedProject.element !== null))}>Go to project page</Button>
        </div>
      </article>

      <article id="work">
        <div>
          <h2 className="section-header-headline">Join the team!</h2>
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
