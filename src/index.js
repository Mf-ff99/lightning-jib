import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import history from './Components/NavBar/history'

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App} history={history}/>
  </BrowserRouter>,
  document.getElementById('root')
);

