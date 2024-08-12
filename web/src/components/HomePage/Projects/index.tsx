import { useEffect, useState } from 'react';
import { Project } from '../../../types';
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
    <div className="flex flex-col">
      <h2 className="section-title">Våre prosjekter</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-4">
        {projectsToShow.map((project) => (
          <Link href={`prosjekter/${project.slug}`} className="no-underline" key={project.slug}>
            <div className="flex flex-col w-full relative group cursor-pointer">
              <h3 className="text-4xl lg:mb-6 mb-4">{project.name}</h3>
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="h-96 object-cover w-full"
                />
                 <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <p className="text-white text-center px-4 text-xl max-h-full overflow-y-auto">
                    {project.description?.['no']}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="lg:mt-16 mt-8">
        <Link href="/prosjekter" className="green-link">
          Se alle våre prosjekter
        </Link>
      </div>
    </div>
  );
};

export default Projects;
