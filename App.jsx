import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Donors from './src/components/Donors/Donors';
import AppLayout from './src/Layouts/AppLayout';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={AppLayout}>
          <IndexRoute component={Donors}/>
      </Route>
  </Router>
), document.getElementById('app'))