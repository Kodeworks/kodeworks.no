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
              <Link to="/people">Our People</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/jobs">Join Us</Link>
            </li>
            <li>
              <Link to="/staffmanual">Staff Manual</Link>
            </li>
          </ul>
        </nav>

        <footer id="menu-footer">
          <h4>Get in Touch</h4>
          <p>
            post@kodeworks.no<br />
            +47 416 70 269‬
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
