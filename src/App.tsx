import { useState } from 'react';

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

import Equinor from './pages/input/Equinor';
import Inatur from './pages/input/Inatur';
import Statkraft from './pages/input/Statkraft';
import Flir from './pages/input/Flir';
import Vaskehjelp from './pages/input/Vaskehjelp';
import Sunlitsea from './pages/input/Sunlitsea';
import Lilbit from './pages/input/Lilbit';
import Skandiaenergi from './pages/input/Skandiaenergi';
import Kongsberg from './pages/input/Kongsberg';
import Akerbp from './pages/input/Akerbp';
import Gintel from './pages/input/Gintel';
import Bnentreprenor from './pages/input/Bnentreprenor';
import Politiet from './pages/input/Politiet';
import Avinor from './pages/input/Avinor';
import KLP from './pages/input/KLP';
import Thales from './pages/input/Thales';

import xmarkIcon from './assets/icons/xmark.svg';

import './styles/kw.css';


function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  function handleMenuButtonClick() {
    setIsNavigationOpen(!isNavigationOpen)
  }

  function handleDarkMode(isDarkMode: boolean) {
    if (darkMode != isDarkMode) {
      setDarkMode(isDarkMode);
    }
  }

  return (
    <div className="App">
      <Router>
      <button onClick={handleMenuButtonClick} id="menu-button" className={darkMode ? 'dark-mode' : ''}>
          { isNavigationOpen
            ? <img src={xmarkIcon} alt="Close button" />
            :  'MENU' }
        </button>

        <Routes>
          <Route path="/" element={<Home handleDarkMode={handleDarkMode} />} />
          <Route path="staffmanual" element={<StaffManual />} />
          <Route path="people" element={<People />} />
          <Route path="projects" element={<Projects handleDarkMode={handleDarkMode} />} />
          <Route path="input/*" element={<InputRoutes />} />
        </Routes>

        <Navigation isOpened={isNavigationOpen} toggleNavigationOpened={handleMenuButtonClick}/>
      </Router>
    </div>
  );
}

function InputRoutes() {
  return (
    <Routes>
      <Route path="inatur" element={<Inatur />} />
      <Route path="equinor" element={<Equinor />} />
      <Route path="sunlitsea" element={<Sunlitsea />} />
      <Route path="kongsberg" element={<Kongsberg />} />
      <Route path="flir" element={<Flir />} />
      <Route path="lilbit" element={<Lilbit />} />
      <Route path="thales" element={<Thales />} />
      <Route path="vaskehjelp" element={<Vaskehjelp />} />
      <Route path="skandiaenergi" element={<Skandiaenergi />} />
      <Route path="statkraft" element={<Statkraft />} />
      <Route path="klp" element={<KLP />} />
      <Route path="bnentreprenor" element={<Bnentreprenor />} />
      <Route path="avinor" element={<Avinor />} />
      <Route path="politiet" element={<Politiet />} />
      <Route path="akerbp" element={<Akerbp />} />
      <Route path="gintel" element={<Gintel />} />
    </Routes>
  );
}

export default App;
