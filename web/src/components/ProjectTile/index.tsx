import { useRouter } from 'next/router';

import { Projectv2 } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';

import style from './projecttile.module.css';
import { urlFor } from '../../lib/client';
import projectsApi from '../../data/projects';
import Button from '../Button';

interface Prop {
  project: Projectv2;
}

const legacyProjects = projectsApi.getProjects();

export default function ProjectTile({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  const correspondingLegacyProject = legacyProjects.find(
    (_) => _.name === project.name || _.name?.['no'] === project.name
  );

  return (
    <article className={style['project']}>
      <div className={style['projecttile-image-container']}>
        <img // todo fix this image
          className={style['project-tile--image']}
          src={urlFor(project.image).width(1200).url()}
          width="1200"
          height="1200"
          // alt={fmt(project.name, locale!)} todo support intl
          alt={project.name}
        />
      </div>

      <div className={style['projecttile-content']}>
        {/*todo support intl*/}
        {/*<h3>{fmt(project.name, locale!)}</h3>*/}
        <h3>{project.name}</h3>
        <p>{fmt(project.description, locale!)}</p>

        {correspondingLegacyProject?.published ? (
          <p>
            <Button
              appearance={Button.appearances.DarkNoPadding}
              href={`input/${correspondingLegacyProject.urlName}`}
            >
              Les mer om prosjektet
            </Button>
          </p>
        ) : null}

        {project.technologies ? (
          <div className={style['projecttile-technologies']}>
            <h5>Teknologier</h5>

            <ul className={style['projecttile-list']}>
              {project.technologies?.map((tech, index) => (
                <li key={`${index}`}>{tech}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
