import { useEffect, useState } from 'react';

import api from '../../api';
import dictionary from '../dict';
import { Person } from '../../types';
import { useClipContent } from '../../context/ClipContentContext';
import { useTranslation } from '../../utils/useTranslation';

import PeopleList from '../../components/PeopleList';

export default function People(): JSX.Element {
  const [people, setPeople] = useState<Person[]>([]);
  const { t } = useTranslation(dictionary);
  useClipContent(false);

  useEffect(() => {
    setPeople(api.people.getPeople());
  }, []);

  return (
    <div id="page-people">
      <div>
        <h1 className="section-header-headline">{t('people')}</h1>

        <p>{t('people_description', people.length)}</p>

        <PeopleList people={people} />
      </div>
    </div>
  );
}
