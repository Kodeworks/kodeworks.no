import {Person} from '../../types';

import Button from '../Button';
import {useRouter} from 'next/router';
import {fmt, getLocale} from '../../utils/useTranslation';

import style from './persontile.module.css';

interface Prop {
  person: Person;
}

export default function PersonTile({person}: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  console.log(person)
  return (
    <>
      <header className={style.person}>
        <img
          className={style['person-image']}
          alt={person.firstName}
          src={person.imageUrl}
          width="450"
          height="550"
        />
        <div className={style['person-overlay']}>
          <div className={style['person-information']}>
            <strong>{person.firstName} {person.lastName}</strong>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
          <ul className={style['person-actions']}>
            {person.socials &&
              person.socials.map((url) => (
                <li key={url.type}>
                  <a href={url.url}>
                    <img
                      src={`/static/icons/${url.type}.svg`}
                      alt={url.type}
                      width="26"
                      height="26"
                    />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </header>

      {<ul className={`list-plain ${style['person-projects']}`}>
        {person.projects.map((project) => (
          <li key={fmt(project.name, locale!)}>
            <Button
              href={`/input/${project.slug.current.toString().toLowerCase().replace(/ /i, '-')}`}
            >
              {fmt(project.name, locale!)}
            </Button>
          </li>
        ))}
      </ul>}
    </>
  );
}
