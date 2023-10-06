import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';

import style from './projectheader.module.css';

interface Prop {
  project: Project;
}

export default function ProjectHeader({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  console.log(project);
  return (
    <header>
      <div className={style.projectHeader__content}>
        <h1>{project.name}</h1>

        <ul className={style.projectHeader__technologies}>
          {project.technologies && <li>{project.technologies.join(', ')}</li>}
        </ul>

        {project.description && <p>{fmt(project.description, locale!)}</p>}
        {project.extraDescription && <p>{project.extraDescription}</p>}
      </div>

      <img
        className={style.projectHeader__image}
        src={project.imageUrl}
        width="1200"
        height="1200"
        alt=""
      />
    </header>
  );
}
