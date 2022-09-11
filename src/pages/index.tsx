import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getLocale, fmt } from '../utils/useTranslation';
import api from '../api';
import { useClipText } from '../utils/useClipText';
import { useTranslation } from '../utils/useTranslation';
import { Person, Project } from '../types';
import { ClipContentContext } from '../context/ClipContentContext';
import dictionary from './dict';

import Button from '../components/Button';
import PeopleList from '../components/PeopleList';

function Home(): JSX.Element {
  const [highlightedProject, setHighlightedProject] = useState<Project>();
  const [highlightedPeople, setHighlightedPeople] = useState<Person[]>([]);

  const { changeClipMode } = useContext(ClipContentContext);
  const { t } = useTranslation(dictionary);
  const locale = getLocale(useRouter());

  const people = api.people.getPeople();
  const highlightedProjects = api.projects.getPublishedProjects();

  useEffect(() => {
    const project = highlightedProjects[Math.ceil(Math.random() * highlightedProjects.length) - 1];
    const people = api.people.getHighligtedPeople().slice(0, 6);

    setHighlightedProject(project);
    setHighlightedPeople(people);
  }, []);

  const shouldClipText = useClipText(['projects']);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText]);

  return (
    <>
      <header id="main-header">
        <img className="logo" src="/static/logo.svg" alt="Logo" width="280" height="59" />

        <section className={`section section-content section-content-narrow main-header-content`}>
          <h2>Jobbe i KodeWorks? Vi ser etter både erfarene og nyutdannede utviklere.</h2>
          <p>
            <a className="btn btn-black btn-big" href="/career">
              Søk fast jobb
            </a>
          </p>
        </section>
      </header>

      <article id="about">
        <div>
          <h2 className="section-header-headline">{t('who')}</h2>
          <p>{t('who_description')}</p>
        </div>
        <span id="about-image-container">
          <img src="/static/photos/EOSR7695.jpg" alt="About" />
        </span>
      </article>

      <article id="people">
        <div>
          <header className="people-header">
            <h2 className="section-header-headline">{t('people')}</h2>
            <p>{t('people_description', people.length)}</p>
            <p>
              <Button appearance={Button.appearances.LightNoPadding} href="/people">
                {t('who_button')}
              </Button>
            </p>
          </header>
          <PeopleList people={highlightedPeople} />
        </div>
      </article>

      <article id="projects">
        <img
          src={highlightedProject && '/static/photos/projects/' + highlightedProject.image}
          alt={highlightedProject && fmt(highlightedProject.name, locale!)}
          width="400"
          height="400"
        />

        <div>
          <h2 className="section-header-headline">
            {highlightedProject && fmt(highlightedProject.name, locale!)}
          </h2>
          <p>{highlightedProject && fmt(highlightedProject.description, locale!)}</p>
          <Button
            appearance={Button.appearances.DarkNoPadding}
            href={`/input/${highlightedProject && highlightedProject.urlName.toLowerCase()}`}
            disabled={!(highlightedProject && highlightedProject.published)}
          >
            {t('go_to_project_page_button')}
          </Button>
        </div>
      </article>

      <article id="work">
        <div>
          <h2 className="section-header-headline">{t('career')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('career_description') }} />
          <p dangerouslySetInnerHTML={{ __html: t('career_contact') }} />
        </div>
      </article>
    </>
  );
}

export default Home;
