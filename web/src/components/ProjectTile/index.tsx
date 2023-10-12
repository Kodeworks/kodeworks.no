import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';

import Button from '../../components/Button';

interface Prop {
  project: Project;
  reverse: boolean;
}

export default function ProjectTile({ project, reverse }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  return (
    <article className="grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] gap-6 items-start mt-24">
      <img
        className={`${reverse ? 'lg:order-last' : 'order-first'}`}
        style={{ aspectRatio: '16/9', maxHeight: '400px', maxWidth: '100%' }}
        src={project.imageUrl}
        alt={fmt(project.name, locale!)}
      />
      <div className="w-9/12">
        <h3>{project.name}</h3>
        {project.description && <p>{fmt(project.description, locale!)}</p>}

        {project.content && (
          <p>
            <Button appearance={Button.appearances.DarkNoPadding} href={`input/${project.slug}`}>
              Les mer om prosjektet
            </Button>
          </p>
        )}

        {project.technologies ? (
          <div className="text-white text-sm">
            <h5>Teknologier</h5>

            <div className="flex flex-wrap  text-sm gap-4">
              {project.technologies?.map((tech, index) => (
                <div
                  key={`${index}`}
                  className="border-2 border-solid border-[var(--color-green)] py-1 px-2"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
