

import React from 'react';
import ReactDOM from 'react-dom/client';
import { VeggieBoxApp } from './VeggieBoxApp.jsx';
import './style/style.scss';


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(

  <React.StrictMode>
    <VeggieBoxApp />
  </React.StrictMode>,

);
