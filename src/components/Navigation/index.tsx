import { useEffect } from 'react';

import './navigation.css';

interface Prop {
  isOpened: boolean
  toggleNavigationOpened: () => void
}

function Navigation({ isOpened, toggleNavigationOpened }: Prop) {
  useEffect(() => {
    function escKeyListener(event: KeyboardEvent) {
      if (isOpened && event.key === 'Escape') {
        toggleNavigationOpened();
      }
    }

    if (isOpened) {
      document.addEventListener('keydown', escKeyListener);
      document.body.style.overflow = 'hidden';
    }

    return function cleanupListener() {
      document.removeEventListener('keydown', escKeyListener);
      document.body.style.overflow = 'visible';
    }
  }, [isOpened, toggleNavigationOpened]);

  return (
    <menu id="menu" className={isOpened ? 'opened' : ''}>
      <div id="menu-content">
        <img className="menu-logo" src="/assets/logo-white.svg" width="100" alt="" />
        <div className="menu-dark"></div>
      </div>
      <div id="menu-main">
        <nav onClick={toggleNavigationOpened}>
          <h4><a href="/">KodeWorks</a></h4>
          <ul>
            <li>
              <a href="/people">Our People</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/staffmanual">Staff Manual</a>
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
