import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);

