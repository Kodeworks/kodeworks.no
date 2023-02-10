import { Person } from '../../types';

import Button from '../Button';
import { useRouter } from 'next/router';
import { getLocale, fmt } from '../../utils/useTranslation';

import style from './persontile.module.css';

interface Prop {
  person: Person;
}

export default function PersonTile({ person }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  function getImage(person: Person) {
    return person.image || '/static/photos/people/placeholder-2.jpg';
  }

  return (
    <>
      <header className={style.person}>
        <img
          className={style['person-image']}
          alt={person.name}
          src={getImage(person)}
          width="450"
          height="550"
        />
        <div className={style['person-overlay']}>
          <div className={style['person-information']}>
            <strong>{person.name}</strong>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
          <ul className={style['person-actions']}>
            {person.urls &&
              person.urls.map((url) => (
                <li key={url.name}>
                  <a href={url.url}>
                    <img
                      src={`/static/icons/${url.name}.svg`}
                      alt={url.name}
                      width="26"
                      height="26"
                    />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </header>

      <ul className={`list-plain ${style['person-projects']}`}>
        {person.projects.map((project) => (
          <li key={fmt(project.name, locale!)}>
            <Button
              href={`/input/${project.urlName.toLowerCase().replace(/ /i, '-')}`}
              disabled={!project.published}
            >
              {fmt(project.name, locale!)}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
