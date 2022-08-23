import { Project } from '../../types';
import { getLocale, fmt } from '../../utils/useTranslation';
import { useRouter } from 'next/router';


import style from './projectheader.module.css';

interface Prop {
  project: Project;
}

export default function ProjectHeader({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  return (
    <header>
      <div className={style.projectHeader__content}>
        <h1>{project.name}</h1>

        <ul className={style.projectHeader__technologies}>
          {project.technologies && <li>{project.technologies.join(', ')}</li>}
        </ul>

        <p>{fmt(project.description, locale!)}</p>
        {project.extras && <p>{fmt(project.extras, locale!)}</p>}
      </div>

      <img
        className={style.projectHeader__image}
        src={'/static/photos/projects/' + project.image}
        width="1200"
        height="1200"
        alt=""
      />
    </header>
  );
}
