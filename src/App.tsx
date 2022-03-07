import { MouseEventHandler, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Navigation from './components/Navigation';
import People from './pages/People';
import Projects from './pages/Projects';
import StaffManual from './pages/StaffManual';

import Akerbp from './pages/input/Akerbp';
import Avinor from './pages/input/Avinor';
import Bnentreprenor from './pages/input/Bnentreprenor';
import Equinor from './pages/input/Equinor';
import Flir from './pages/input/Flir';
import Gintel from './pages/input/Gintel';
import Inatur from './pages/input/Inatur';
import KLP from './pages/input/KLP';
import Kongsberg from './pages/input/Kongsberg';
import Lilbit from './pages/input/Lilbit';
import Politiet from './pages/input/Politiet';
import Skandiaenergi from './pages/input/Skandiaenergi';
import Statkraft from './pages/input/Statkraft';
import Sunlitsea from './pages/input/Sunlitsea';
import Thales from './pages/input/Thales';
import Vaskehjelp from './pages/input/Vaskehjelp';

import xmarkIcon from './assets/icons/xmark.svg';

import './styles/kw.css';

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

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

  function handleDarkMode(isDarkMode: boolean) {
    if (darkMode != isDarkMode) {
      setDarkMode(isDarkMode);
    }
  }

  function InputRoutes() {
    return (
      <Routes>
        <Route path="inatur" element={<Inatur handleDarkMode={handleDarkMode} />} />
        <Route path="equinor" element={<Equinor handleDarkMode={handleDarkMode} />} />
        <Route path="sunlitsea" element={<Sunlitsea handleDarkMode={handleDarkMode} />} />
        <Route path="kongsberg" element={<Kongsberg handleDarkMode={handleDarkMode} />} />
        <Route path="flir" element={<Flir handleDarkMode={handleDarkMode} />} />
        <Route path="lilbit" element={<Lilbit handleDarkMode={handleDarkMode} />} />
        <Route path="thales" element={<Thales handleDarkMode={handleDarkMode} />} />
        <Route path="vaskehjelp" element={<Vaskehjelp handleDarkMode={handleDarkMode} />} />
        <Route path="skandiaenergi" element={<Skandiaenergi handleDarkMode={handleDarkMode} />} />
        <Route path="statkraft" element={<Statkraft handleDarkMode={handleDarkMode} />} />
        <Route path="klp" element={<KLP handleDarkMode={handleDarkMode} />} />
        <Route path="bnentreprenor" element={<Bnentreprenor handleDarkMode={handleDarkMode} />} />
        <Route path="avinor" element={<Avinor handleDarkMode={handleDarkMode} />} />
        <Route path="politiet" element={<Politiet handleDarkMode={handleDarkMode} />} />
        <Route path="akerbp" element={<Akerbp handleDarkMode={handleDarkMode} />} />
        <Route path="gintel" element={<Gintel handleDarkMode={handleDarkMode} />} />
      </Routes>
    );
  }

  return (
    <div className="App">
      <Router>
        <button onClick={handleMenuButtonClick} id="menu-button" className={darkMode ? 'dark-mode' : ''}>
          {isNavigationOpen
            ? <img src={xmarkIcon} alt="Close button" />
            : 'MENU'}
        </button>

        <Routes>
          <Route path="/" element={<Home handleDarkMode={handleDarkMode} />} />
          <Route path="staffmanual" element={<StaffManual />} />
          <Route path="people" element={<People handleDarkMode={handleDarkMode} />} />
          <Route path="projects" element={<Projects handleDarkMode={handleDarkMode} />} />
          <Route path="input/*" element={<InputRoutes />} />
        </Routes>

        <Navigation isOpened={isNavigationOpen} toggleNavigationOpened={handleMenuButtonClick} />
      </Router>
    </div>
  );
}

export default App;
