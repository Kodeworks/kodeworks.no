import { Link } from 'react-router-dom';

import api from '../../api';

import PersonTile from '../../components/PersonTile';
import PeopleList from '../../components/PeopleList';

import './home.css';

function Home() {
  const people = api.people.getPeople();
  const highlightedProjects = api.projects.getHighlightedProjects();
  const highlightedProject = highlightedProjects[Math.ceil(Math.random() * highlightedProjects.length) - 1];

  return (
    <>
      <header id="main-header">
        <img className="logo" src="../assets/logo.svg" alt="Logo" width="280" height="59" />
      </header>

      <article id="about">
        <div>
          <h2>Hvem?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            malesuada risus et eros tempus placerat. In nec leo rutrum,
            consectetur dolor ut, dapibus est. Nunc at auctor lorem.
            Suspendisse potenti.
          </p>
        </div>

        <img src="../assets/office.jpg" alt="" />
      </article>

      <article id="people">
        <div>
          <header className="people-header">
            <h2>Møt Menneskene</h2>
            <p>
              I Kodeworks har vi {people.length} teknologer som brenner for faget. Her er
              et lite tilfeldig utvalg av dem.
            </p>
            <p>
              <Link to="people">Se alle menneskene</Link>{" "}
              <img
                src="../assets/icons/chevron-right.svg"
                alt=""
                width="8"
                height="11"
              />
            </p>
          </header>

          <PeopleList />
        </div>
      </article>

      <article id="projects">
        <img
          src={highlightedProject.image}
          alt={highlightedProject.name}
          width="400"
          height="400"
        />

        <div>
          <h2>{highlightedProject.name}</h2>
          <p>
            {highlightedProject.description}
          </p>
          <Link to={`/input/${highlightedProject.name.toLowerCase()}`} className="btn btn-light">Les mer om prosjektet</Link>
        </div>
      </article>

      <article id="work">
        <div>
          <h2>Vil du jobbe med oss?</h2>
          <p>
            Vi vil bli bedre kjent med deg! Ta gjerne kontakt for en uformell
            prat over en kaffe, og titt innom håndboka vår og se hva vi kan
            tilby.
          </p>
          <p>
            <Link to="/staffmanual">Personalhåndboken</Link>
          </p>
        </div>
      </article>
    </>
  );
}

export default Home;
