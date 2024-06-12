import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';
import Link from 'next/link';
interface Prop {
  project: Project;
  reverse: boolean;
}

export default function ProjectTile({ project, reverse }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  return (
    <article className={`${reverse ? 'justify-end' : ''} flex lg:flex-row flex-col gap-[44px]`}>
      <img
        className={`${reverse ? 'lg:order-last' : 'order-first'}`}
        style={{ aspectRatio: '16/9', maxHeight: '300px', width: '30%' }}
        src={project.imageUrl}
        alt={fmt(project.name, locale!)}
      />
      <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3>{project.name}</h3>
          {project.description && <p>{fmt(project.description, locale!)}</p>}

          {project.technologies ? (
            <div className="flex flex-wrap text-sm gap-4">
              {project.technologies?.map((tech, index) => (
                <div
                  key={`${index}`}
                  className="border-[1.25px] border-solid py-1 px-2 text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {project.content && (
          <div className="mt-4">
            <Link href={`prosjekter/${project.slug}`} className="green-link text-base">
              Les mer om prosjektet
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
