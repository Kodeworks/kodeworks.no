import { useRouter } from 'next/router';

import Link from 'next/link';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';

import style from './projecttile.module.css';

interface Prop {
  project: Project;
}

export default function ProjectTile({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  return (
    <article>
      <img
        className={style['project-tile--image']}
        src={'/static/photos/projects/' + project.image}
        width="1200"
        height="1200"
        alt={project.name}
      />
      <div className={style['project-ingress']}>
        <h3>
          {project.published ? (
            <Link href={`input/${project.urlName}`} locale={locale}>
              <a className={style['project-link']}>{project.name}</a>
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <p>{fmt(project.description, locale!)}</p>
      </div>
    </article>
  );
}
