import { useEffect, useState } from 'react';
import { Person, Project } from '../types';
import { getPeople, getProjects } from '../lib/sanity';
import '../styles/_page_landing.css';

import {
  Header,
  Tjenester,
  Oppdrag,
  Prosjekter,
  Konsulenter,
  Kontakt,
  LogoReel,
} from '../components/Landing/';
import Teknologier from '../components/Landing/Teknologi';
import Kunder from '../components/Landing/Kunder';

export async function getStaticProps() {
  const people = await getPeople();
  const projects = await getProjects();

  return {
    props: { people, projects },
    revalidate: 10,
  };
}

function Home({ people, projects }: { people: Person[]; projects: Project[] }): JSX.Element {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const staticTechnologies = [
    "React",
    "Next",
    "Vue",
    "Nuxt",
    "Flutter",
    "Swift",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Node",
    "Kotlin",
    "Java",
    "Python",
    "C++",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure",
  ];
  // Bruker statiske teknologier istedet for alle som hører til prosjektene

  useEffect(() => {
    const uniqueSet: Set<string> = new Set();
    projects.forEach((project) => {
      if (project.technologies) {
        project.technologies.forEach((tech) => {
          uniqueSet.add(tech);
        });
      };
    });
    setTechnologies(Array.from(uniqueSet));
  }, [projects]);

  return (
    <div className="w-full">
      <div className="h-[100vh] flex flex-col justify-between">
        <Header />
        <LogoReel />
      </div>
      
      <div className="section-spacer"></div>
      
      <Tjenester />
      <div className="section-spacer"></div>
      
      
      <Teknologier technologies={staticTechnologies} />

      <div className="section-spacer"></div>

      <Prosjekter projects={projects} />

      <div className="section-spacer"></div>

      <Oppdrag />

      <div className="section-spacer"></div>

      <Kunder />

      <div className="section-spacer"></div>

      <Konsulenter people={people} />

      <div className="section-spacer"></div>

      <Kontakt />

    </div>
  );
}

export default Home;
