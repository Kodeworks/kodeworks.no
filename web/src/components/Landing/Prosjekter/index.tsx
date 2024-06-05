import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {  Project } from '../../../types';
import { fmt, getLocale, useTranslation } from '../../../utils/useTranslation';
import dictionary from '../../../utils/dict';
import { GreenArrowLeft, GreenArrowRight } from '../Icons';
import Button from '../../Button';
import Link from 'next/link';


const Projects = ({ projects }: { projects: Project[] }) => {
  const [projectsToShow, setProjectsToShow] = useState<Project[]>([]);

  useEffect(() => {
    const visibleProjects = projects.filter(
        (project) => project.showOnFrontPage && project.content
    );
    // select 4 random projects to show 
    const showProjects = visibleProjects.sort(() => 0.5 - Math.random()).slice(0, 4);
    setProjectsToShow(showProjects);
  }, [projects]);

    return (
      <div className="flex flex-col section-padding">
        <h2 className="section-title">Våre prosjekter</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-4">
            {projectsToShow.map((project) => (
                <div className="flex flex-col w-full">
                    <h3 className="text-4xl lg:mb-6 mb-4">{project.name}</h3>
                    <img src={project.imageUrl} alt={project.name} className="h-96 object-cover w-full" />
                </div>
            ))}
        </div>
        <div className="lg:mt-16 mt-8">
          <Link href="/projects" className="green-link">
            Se alle våre prosjekter
          </Link>
        </div>
      </div>
    );
};

export default Projects;