import { useContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { ClipContentContext, useClipContent } from './context/ClipContentContext';

import api from './api';

import Home from './pages/Home';
import Navigation from './components/Navigation';
import People from './pages/People';
import Projects from './pages/Projects';
import StaffManual from './pages/StaffManual';
import PrivacyPolicy from './pages/Legal/Privacy';

import xmarkIcon from './assets/icons/xmark.svg';

import './styles/kw.css';

export default function App(): JSX.Element {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);

  const { clipMode } = useContext(ClipContentContext);

  function handleMenuButtonClick(event: any) {
    event.stopPropagation();

    setIsNavigationOpen(!isNavigationOpen)

    if (!isNavigationOpen) {
      setTimeout(() => {
        setScrollTop(document.documentElement.scrollTop);
        document.documentElement.className = 'no-scroll';
      }, 250);
    } else {
      document.documentElement.className = '';
      document.documentElement.scrollTop = scrollTop;
    }
  }

  return (
    <>
      <Router>
        <button onClick={handleMenuButtonClick} id="menu-button" className={clipMode ? 'dark-mode' : ''}>
          {isNavigationOpen
            ? <img src={xmarkIcon} alt="Close button" />
            : 'MENU'}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="staffmanual" element={<StaffManual />} />
          <Route path="people" element={<People />} />
          <Route path="projects" element={<Projects />} />
          <Route path="input/*" element={<InputRoutes />} />
          <Route path="legal/*" element={<LegalRoutes />} />
        </Routes>

        <Navigation isOpened={isNavigationOpen} toggleNavigationOpened={handleMenuButtonClick} />
      </Router>
    </>
  );
}


function InputRoutes() {
  useClipContent(true);

  return (
    <Routes>
      { api.projects.getProjects().map((project) => <Route key={project.urlName} path={project.urlName} element={project.element ? <project.element project={project} /> : null } /> )}
    </Routes>
  );
}

function LegalRoutes() {
  return (
    <Routes>
      <Route path="privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
