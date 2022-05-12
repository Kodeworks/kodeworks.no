import React from 'react';
import { createRoot } from 'react-dom/client';

import { ClipContentProvider } from './context/ClipContentContext';

import App from './App';

import './index.css';

const container: Element = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ClipContentProvider>
      <App />
    </ClipContentProvider>
  </React.StrictMode>
);
