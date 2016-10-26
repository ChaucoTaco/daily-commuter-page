import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Global from './components/global/';
import Weather from './containers/weatherContainer';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Global}>
      <Route path="/weather" component={Weather} />
    </Route>
  </Router>
);


render(<App />, document.getElementById('app'));
