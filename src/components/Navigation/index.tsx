import {
  Link
} from 'react-router-dom';

import './navigation.css';

interface Prop {
  isOpened: boolean
  toggleNavigationOpened: () => void
}

function Navigation({ isOpened, toggleNavigationOpened }: Prop) {
  return (
    <menu id="menu" className={isOpened ? 'opened' : ''}>
      <div id="menu-content">
        <img className="menu-logo" src="/assets/logo-white.svg" width="100" alt="" />
        <div className="menu-dark"></div>
      </div>
      <div id="menu-main">
        <nav onClick={toggleNavigationOpened}>
          <h4><Link to="/">KodeWorks</Link></h4>
          <ul>
            <li>
              <Link to="/people">Menneskene</Link>
            </li>
            <li>
              <Link to="/projects">Prosjekter</Link>
            </li>
            <li>
              <Link to="/jobs">Jobb</Link>
            </li>
            <li>
              <Link to="/staffmanual">Personalhåndboken</Link>
            </li>
          </ul>
        </nav>

        <footer id="menu-footer">
          <h4>Kontakt oss</h4>
          <p>
            post@kodeworks.no<br />
            +47 466 93 738
          </p>

          <h5>Oslo</h5>
          <p>Grønnegata 10, 0350 Oslo</p>

          <h5>Trondheim</h5>
          <p>Fjordgata 30, 7050 Trondheim</p>
        </footer>
      </div>
    </menu>
  )
}

export default Navigation
