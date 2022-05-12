import { useEffect, useState } from 'react';

import { Person } from '../../types';
import api from '../../api';

import PeopleList from '../../components/PeopleList';

import './people.css';

export default function People(): JSX.Element {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    setPeople(api.people.getPeople());
  }, []);

  return (
    <div id="page-people">
      <div>
        <h1 className="section-header-headline">People</h1>

        <p>Today Kodeworks consists of {people.length} accomplished developers, who endeavor to develop solutions realizing our clients vision.</p>

        <PeopleList people={people} />
      </div>
    </div>
  )
};
