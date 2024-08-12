import { useEffect, useState } from 'react';
import { Person, Project } from '../types';
import { getPeople, getProjects } from '../lib/sanity';
import '../styles/_page_home_page.css';

import {
  Header,
  Services,
  Sales,
  Projects,
  Consultants,
  LogoReel,
} from '../components/HomePage';
import Technologies from '../components/HomePage/Technologies';
import Customers from '../components/HomePage/Customers';
import Office from '../components/HomePage/Office';

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
    <div className="section-padding">
      <div className="h-[100vh] flex flex-col justify-between">
        <Header />
        <LogoReel />
      </div>
      <div className="section-spacer"></div>

      <Services />
      <div className="section-spacer"></div>

      <Technologies technologies={staticTechnologies} />
      <div className="section-spacer"></div>

      <Projects projects={projects} />
      <div className="section-spacer"></div>

      <Sales />
      <div className="section-spacer"></div>

      <Customers />
      <div className="section-spacer"></div>

      <Consultants people={people} />
      
      <div className="section-spacer"></div>

      <Office />
    </div>
  );
}

export default Home;
