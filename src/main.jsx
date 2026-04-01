import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Make sure this import exists
import App from './App';
import './index.css';

const repoBasename = '/vistarnexports3';
const basename = window.location.pathname.startsWith(repoBasename)
  ? repoBasename
  : '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>  {/* This must wrap App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
