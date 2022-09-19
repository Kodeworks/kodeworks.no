import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';

import Button from '../../components/Button';

import style from './projecttile.module.css';

interface Prop {
  project: Project;
}

export default function ProjectTile({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  return (
    <article className={style['project']}>
      <div className={style['projecttile-image-container']}>
        <img
          className={style['project-tile--image']}
          src={'/static/photos/projects/' + project.image}
          width="1200"
          height="1200"
          alt={fmt(project.name, locale!)}
        />
      </div>

      <div className={style['projecttile-content']}>
        <h3>{fmt(project.name, locale!)}</h3>
        <p>{fmt(project.description, locale!)}</p>

        {project.published ? (
          <p>
            <Button appearance={Button.appearances.DarkNoPadding} href={`input/${project.urlName}`}>
              Les mer om prosjektet
            </Button>
          </p>
        ) : null}

        {project.output ? (
          <div className={style['projecttile-technologies']}>
            <h5>Verdi</h5>

            <ul className={style['projecttile-list']}>
              {project.output?.map((output, index) => (
                <li key={`${index}`}>{output}</li>
              ))}
            </ul>
          </div>
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
