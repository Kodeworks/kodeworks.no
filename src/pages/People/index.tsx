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
        <p>Today Kodeworks consists of 27 accomplished developers, who endeavor to develop solutions realizing our clients vision.</p>
        <PeopleList />
      </div>
    </div>
  )
};

export default People;
