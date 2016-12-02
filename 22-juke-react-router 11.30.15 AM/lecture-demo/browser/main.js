import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';

import App from './components/App';
import AllPuppies from './components/AllPuppies';
import About from './components/About';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/all-puppies' component={AllPuppies} />
      <Route path='/about' component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
