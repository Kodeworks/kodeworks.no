import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';

import style from './projectheader.module.css';
import TechList from '../TechList';

interface Prop {
  project: Project;
}

export default function ProjectHeader({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  return (
    <header className="flex flex-col justify-start lg:mt-52 mt-28 lg:mb-16 mb-12">
        <h1 className="mb-8">{project.name}</h1>
        <div className="lg:w-1/2 w-full">
          {project.description &&
            <p className="mb-3">{fmt(project.description, locale!)}</p>
          }

          {project.technologies ? (
              <TechList technologies={project.technologies} />
            ) : null}
        </div>
    </header>
  );
}
