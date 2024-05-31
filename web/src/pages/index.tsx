import { useContext, useEffect } from 'react';

import { useClipText } from '../utils/useClipText';
import { Person, Project } from '../types';
import { ClipContentContext } from '../context/ClipContentContext';

import { getPeople, getProjects } from '../lib/sanity';

import {
  Header,
  LogoReel,
  Tjenester,
  Kundeomtaler,
  Oppdrag,
  Prosjekter,
  Rekruttering,
  Konsulenter,
  Kontakt,
  TeknologiReel,
} from '../components/Landing/';

export async function getStaticProps() {
  const people = await getPeople();
  const projects = await getProjects();

  return {
    props: { people, projects },
    revalidate: 10,
  };
}

function Home({ people, projects }: { people: Person[]; projects: Project[] }): JSX.Element {

  const { changeClipMode } = useContext(ClipContentContext);

  const shouldClipText = useClipText([
    { id: 'who-section', colorMode: 'grey-mode' },
  ]);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText]);

  console.log(people);

  return (
    <>
      <div className="h-[100vh] flex flex-col justify-between">
        <Header />
      </div>
      
      <div className="section-spacer"></div>

      <Tjenester />
      <div className="section-spacer"></div>
      <TeknologiReel />

      <div className="section-spacer"></div>

      <Kundeomtaler />

      <div className="section-spacer"></div>

      <Oppdrag />

      <div className="section-spacer"></div>

      <Prosjekter projects={projects} />

      <div className="section-spacer"></div>
      
      <Rekruttering />

      <div className="section-spacer"></div>

      <Konsulenter people={people} />

      <div className="section-spacer"></div>

      <Kontakt />

    </>
  );
}

export default Home;
