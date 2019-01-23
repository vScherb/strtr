import './scss/app.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { faPlus, faSave, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faSave, faEdit);

import { App } from './layout';

const router = <BrowserRouter>
  <App />
</BrowserRouter>;

ReactDOM.render(router, document.getElementById('app'));