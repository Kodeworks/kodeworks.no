import { useEffect } from 'react';

import './navigation.css';

interface Prop {
  isOpened: boolean
  toggleNavigationOpened(event: any): void;
}

function Navigation({ isOpened, toggleNavigationOpened }: Prop) {
  useEffect(() => {
    function escKeyListener(event: KeyboardEvent) {
      if (isOpened && event.key === 'Escape') {
        toggleNavigationOpened(event);
      }
    }

    if (isOpened) {
      document.addEventListener('keydown', escKeyListener);
    }

    return function cleanupListener() {
      document.removeEventListener('keydown', escKeyListener);
    }
  }, [isOpened]);

  return (
    <menu id="menu" className={isOpened ? 'menu--opened' : ''}>
      <div className="menu-hero">
        <img className="menu-hero-logo" src="/assets/logo-white.svg" width="100" alt="" />
        <div className="menu-hero-overlay"></div>
      </div>

      <div className="menu-content">
        <nav className="menu-navigation" onClick={toggleNavigationOpened}>
          <h4><a href="/">KodeWorks</a></h4>
          <ul className="list-plain">
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

        <footer className="menu-footer">
          <h4>Get in Touch</h4>
          <p>
            post@kodeworks.no<br />
            +47 416 70 269‬
          </p>

          <h5>Oslo</h5>
          <p>Grønnegata 10, 0350 Oslo</p>

          <h5>Trondheim</h5>
          <p>Fjordgata 30, 7010 Trondheim</p>

          <ul className="list-plain menu-list-booring">
            <li><a href="/legal/privacy">Privacy Policy</a></li>
          </ul>
        </footer>
      </div>
    </menu>
  )
}

export default Navigation
