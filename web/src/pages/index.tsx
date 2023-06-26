import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { fmt, getLocale, useTranslation } from '../utils/useTranslation';
import api from '../api';
import { useClipText } from '../utils/useClipText';
import { Person, Project } from '../types';
import { ClipContentContext } from '../context/ClipContentContext';
import dictionary from '../utils/dict';

import Button from '../components/Button';
import PeopleList from '../components/PeopleList';
import { getPeople } from '../lib/sanity';
import Link from 'next/link';

export async function getStaticProps() {
  const people = await getPeople();
  return {
    props: { people },
  };
}

function Home({ people }): JSX.Element {
  const [highlightedProject, setHighlightedProject] = useState<Project>();
  const [highlightedPeople, setHighlightedPeople] = useState<Person[]>([]);

  const { changeClipMode } = useContext(ClipContentContext);
  const { t } = useTranslation(dictionary);
  const locale = getLocale(useRouter());

  const highlightedProjects = api.projects.getPublishedProjects();

  useEffect(() => {
    const project = highlightedProjects[Math.ceil(Math.random() * highlightedProjects.length) - 1];
    const randomPeople = people.sort(() => 0.5 - Math.random()).slice(0, 6);

    setHighlightedProject(project);
    setHighlightedPeople(randomPeople);
  }, []);

  const shouldClipText = useClipText(['projects']);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText]);

  return (
    <>
      <header id="main-header" className="flex justify-center items-center">
        <img className="pattern" src="/static/pattern_green.svg" alt="Logo" />
        <img className="logo" src="/static/logo.svg" alt="Logo" />
      </header>
      <main className="main">
        <section className={`grid grid-cols-1 lg:grid-cols-2 `}>
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex py-24 items-center gap-10">
            <div className="full-screen-width h-full absolute bg-[#B6FF9E] -z-10"></div>
            <div className="flex justify-center lg:justify-start order-last lg:order-first">
              <img
                style={{ aspectRatio: '16/9', width: '75%', borderRadius: '5px' }}
                src="/static/photos/Kodeworks-506.jpg"
                alt="About"
              />
            </div>
            <div className=" flex flex-col items-start">
              <h2>Ønsker du å jobbe i KodeWorks?</h2>
              <p className="w-[75%]">
                I KodeWorks ser vi etter deg som brenner for faget, er nysgjerrig, og har lyst til å
                gjøre en forskjell!
              </p>
              <Link href="/career" className="mt-6">
                <div className="px-10 py-3 bg-[#E8E7E6] text-[#000] hover:text-[#666] ">
                  Søk på stilling
                </div>
              </Link>
            </div>
          </article>
        </section>
        <section className={`grid grid-cols-1 lg:grid-cols-2 `}>
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex py-24 items-center gap-10">
            <div className="full-screen-width h-full absolute bg-[#E8E7E6] -z-10"></div>
            <div>
              <h2 className="section-header-headline">{t('who')}</h2>
              <p>{t('who_description')}</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                style={{ aspectRatio: '16/9', width: '75%', borderRadius: '5px' }}
                src="/static/photos/EOSR7695.jpg"
                alt="About"
              />
            </div>
          </article>
        </section>
        <section className={`grid grid-cols-1 lg:grid-cols-2 `} id="projects">
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex py-24 items-center gap-10 text-white">
            <div className="full-screen-width h-full absolute bg-[#000] -z-10"></div>
            <div className="flex justify-center lg:justify-start order-last lg:order-first">
              <img
                style={{ aspectRatio: '16/9', width: '75%', borderRadius: '5px' }}
                src={highlightedProject && '/static/photos/projects/' + highlightedProject.image}
                alt={highlightedProject && fmt(highlightedProject.name, locale!)}
              />
            </div>

            <div>
              <h2>{highlightedProject && fmt(highlightedProject.name, locale!)}</h2>
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
        </section>
        <section className={`grid grid-cols-1 lg:grid-cols-2 `}>
          <article className="relative col-span-1 lg:col-span-2 flex py-24 ">
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
        </section>
      </main>
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