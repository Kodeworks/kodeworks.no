import { useEffect } from 'react';

import PeopleList from '../../components/PeopleList';

import './people.css';

interface Prop {
  handleDarkMode(isDarkMode: boolean): any
}

function People({ handleDarkMode }: Prop) {
  useEffect(() => {
    handleDarkMode(false);
  }, []);

  return (
    <div id="page-people">
      <div>
        <h1>People</h1>
        <PeopleList />
      </div>
    </div>
  )
};

export default People;
