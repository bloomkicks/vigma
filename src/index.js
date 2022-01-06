import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {render} from 'react-dom';
import App from './App';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
