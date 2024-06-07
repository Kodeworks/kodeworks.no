import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { fmt, getLocale, useTranslation } from '../utils/useTranslation';
import { useClipText } from '../utils/useClipText';
import { Person, Project } from '../types';
import { ClipContentContext } from '../context/ClipContentContext';
import dictionary from '../utils/dict';

import Button from '../components/Button';
import PeopleList from '../components/PeopleList';
import { getPeople, getProjects } from '../lib/sanity';
import Link from 'next/link';

export async function getStaticProps() {
  const people = await getPeople();
  const projects = await getProjects();

  return {
    props: { people, projects },
    revalidate: 10,
  };
}

function Home({ people, projects }: { people: Person[]; projects: Project[] }): JSX.Element {
  const [highlightedProject, setHighlightedProject] = useState<Project>();
  const [highlightedPeople, setHighlightedPeople] = useState<Person[]>([]);

  const { changeClipMode } = useContext(ClipContentContext);
  const { t } = useTranslation(dictionary);
  const locale = getLocale(useRouter());

  useEffect(() => {
    const projectsToSelectFrom = projects.filter(
      (project) => project.showOnFrontPage && project.content
    );
    const highlightedProject =
      projectsToSelectFrom[Math.ceil(Math.random() * projectsToSelectFrom.length) - 1];
    const randomPeople = people.sort(() => 0.5 - Math.random()).slice(0, 6);

    setHighlightedProject(highlightedProject);
    setHighlightedPeople(randomPeople);
  }, [people, projects, changeClipMode]);

  const shouldClipText = useClipText([
    { id: 'projects', colorMode: 'dark-mode' },
    { id: 'who-section', colorMode: 'grey-mode' },
    { id: 'work-section', colorMode: 'green-mode' },
  ]);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText, changeClipMode]);

  return (
    <>
      <main className="main">
        <section className={`grid grid-cols-1 lg:grid-cols-2 `} id="work-section">
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex py-24 items-center gap-10">
            <div className="full-screen-width h-full absolute bg-[var(--color-green)] -z-10"></div>
            <div className="flex justify-center lg:justify-start order-last lg:order-first">
              <img style={{ maxWidth: '100%' }} src="/static/photos/gruppe_c.jpg" alt="About" />
            </div>
            <div className=" flex flex-col items-start">
              <h2>Ønsker du å jobbe i KodeWorks?</h2>
              <p className="w-[75%]">
                I KodeWorks ser vi etter deg som brenner for faget, er nysgjerrig, og har lyst til å
                gjøre en forskjell!
              </p>
              <Link href="/career" className="mt-6">
                <div className="px-10 py-3 bg-[var(--color-grey)] text-black hover:text-[var(--color-dark-grey)] ">
                  Søk på stilling
                </div>
              </Link>
            </div>
          </article>
        </section>
        <section className={`grid grid-cols-1 lg:grid-cols-2 `} id="who-section">
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex py-24 items-center gap-10">
            <div className="full-screen-width h-full absolute bg-[var(--color-grey)] -z-10"></div>
            <div>
              <h2 className="section-header-headline">{t('who')}</h2>
              <p>{t('who_description')}</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <img style={{ maxWidth: '100%' }} src="/static/photos/gruppe_f.jpg" alt="About" />
            </div>
          </article>
        </section>
        <section className={`grid grid-cols-1 lg:grid-cols-2 `} id="projects">
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex py-24 items-center gap-10 text-white">
            <div className="full-screen-width h-full absolute bg-black -z-10"></div>
            <div className="flex justify-center lg:justify-start order-last lg:order-first">
              <img
                style={{ maxWidth: '100%' }}
                src={highlightedProject && highlightedProject.imageUrl}
                alt={highlightedProject && highlightedProject.name}
              />
            </div>

            <div>
              <h2>{highlightedProject && highlightedProject.name}</h2>
              <p>
                {highlightedProject &&
                  highlightedProject.description &&
                  fmt(highlightedProject.description, locale!)}
              </p>
              <Button
                appearance={Button.appearances.DarkNoPadding}
                href={`/input/${highlightedProject && highlightedProject.slug}`}
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
