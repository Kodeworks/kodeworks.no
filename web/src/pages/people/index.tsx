import dictionary from '../../utils/dict';
import { useClipContent } from '../../context/ClipContentContext';
import { useTranslation } from '../../utils/useTranslation';

import PeopleList from '../../components/PeopleList';
import { Person } from '../../types';
import { getPeople } from '../../lib/sanity';

export default function People({ people }: { people: Person[] }): JSX.Element {
  const { t } = useTranslation(dictionary);
  useClipContent('');

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

export async function getStaticProps() {
  const people = await getPeople();

  return {
    props: {
      people,
    },
    revalidate: 10,
  };
}
