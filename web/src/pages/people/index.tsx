import dictionary from '../dict';
import {useClipContent} from '../../context/ClipContentContext';
import {useTranslation} from '../../utils/useTranslation';

import PeopleList from '../../components/PeopleList';
import {client} from "../../lib/client";

export default function People({people}): JSX.Element {
  const {t} = useTranslation(dictionary);
  useClipContent(false);

  return (
    <div id="page-people">
      <div>
        <h1 className="section-header-headline">{t('people')}</h1>

        <p>{t('people_description', people.length)}</p>

        <PeopleList people={people}/>

      </div>
    </div>
  );
}

export async function getStaticProps() {
    const people = await client.fetch('*[_type == "people"]{firstName, lastName, email, projects[] -> {name, slug}, socials, "imageUrl": image.asset->url}')
  return {
    props: {
      people,
    },
  }
}
