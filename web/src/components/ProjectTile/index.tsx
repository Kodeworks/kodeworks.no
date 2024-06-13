import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';
import Link from 'next/link';
import TechList from '../TechList';
interface Prop {
  project: Project;
  reverse: boolean;
}

export default function ProjectTile({ project, reverse }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  return (
    <article className={`${reverse ? 'justify-end' : ''} flex lg:flex-row flex-col items-center gap-[44px]`}>
      <img
        className={`${reverse ? 'lg:order-last' : 'order-first'} lg:w-[30%] w-full`}
        style={{ aspectRatio: '16/9', maxHeight: '300px'}}
        src={project.imageUrl}
        alt={fmt(project.name, locale!)}
      />
      <div className="lg:w-1/3 w-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="section-title">{project.name}</h3>
          {project.description && <p className="section-text">{fmt(project.description, locale!)}</p>}

          {project.technologies ? (
            <TechList technologies={project.technologies} />
          ) : null}
        </div>

        {project.content && (
          <div className="mt-4">
            <Link href={`prosjekter/${project.slug}`} className="green-link text-lg">
              Les mer om prosjektet
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
