import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {  Project } from '../../../types';
import { fmt, getLocale, useTranslation } from '../../../utils/useTranslation';
import dictionary from '../../../utils/dict';
import { GreenArrowLeft, GreenArrowRight } from '../Icons';


const Projects = ({ projects }: { projects: Project[] }) => {
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [projectsToShow, setProjectsToShow] = useState<Project[]>([]);
  const [pIndex, setPIndex] = useState(0);
  const locale = getLocale(useRouter());
  const { t } = useTranslation(dictionary);

  useEffect(() => {
    const visibleProjects = projects.filter(
        (project) => project.showOnFrontPage && project.content
    );
    setProjectsToShow(visibleProjects);

    const projectIndex = Math.ceil(Math.random() * visibleProjects.length) - 1;
    setPIndex(projectIndex);
    setSelectedProject(visibleProjects[projectIndex]);

  }, [projects]);

  const handleNext = () => {
    if (pIndex === projectsToShow.length - 1) {
      setPIndex(0);
      setSelectedProject(projectsToShow[0]);
    } else {
      setPIndex(pIndex + 1);
      setSelectedProject(projectsToShow[pIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (pIndex === 0) {
      setPIndex(projectsToShow.length - 1);
      setSelectedProject(projectsToShow[projectsToShow.length - 1]);
    } else {
      setPIndex(pIndex - 1);
      setSelectedProject(projectsToShow[pIndex - 1]);
    }
  };

    return (
      <div className="flex flex-col items-center gap-12 section-padding">
        <h2 className="uppercase">Prosjekter</h2>
        <div className="flex items-center justify-center gap-8 w-full">
        <button onClick={handlePrev} className="button-unstyled">
          <GreenArrowLeft />
        </button>
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex gap-10">
            <div className="flex flex-col gap-4 items-center justify-center lg:justify-start order-last lg:order-first">
              <img
                style={{ maxWidth: '100%' }}
                className="rounded-2xl"
                src={selectedProject && selectedProject.imageUrl}
                alt={selectedProject && selectedProject.name}
              />
              <div className='flex flex-row gap-1'>
                {
                  projectsToShow.map((project, index) => (
                    <span 
                      key={index} 
                      className={`w-4 h-4 rounded-full ${index === pIndex ? 'bg-[var(--color-new-green-dark)]' : 'bg-[var(--color-new-green)]'}`}>
                    </span>
                  ))
                }
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2>{selectedProject && selectedProject.name}</h2>
                <p>
                  {selectedProject &&
                    selectedProject.description &&
                    fmt(selectedProject.description, locale!)}
                </p>
              </div>
              <div>
                <a href={`/input/${selectedProject && selectedProject.slug}`}
                  className='underline decoration-[var(--color-new-green)]'
                >
                    {t('go_to_project_page_button')}
                </a>
              </div>
            </div>
          </article>
          <button onClick={handleNext} className="button-unstyled">
            <GreenArrowRight />
          </button>
          </div>
        </div>


    );
};

export default Projects;