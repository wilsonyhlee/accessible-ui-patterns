'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Home from 'views/Home.react';
import Recommendations from 'views/Recommendations.react.js';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/recommendations" component={Recommendations} />
  </Router>
), document.getElementById('js-main'));
