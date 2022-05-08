import React from 'react';
import ReactDOM from 'react-dom';

import { ClipContentProvider } from './context/ClipContentContext';

import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ClipContentProvider>
      <App />
    </ClipContentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
