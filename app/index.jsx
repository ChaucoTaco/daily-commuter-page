import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Global from './components/global/';
import Weather from './containers/weatherContainer';
import Transit from './containers/transitContainer';

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Global}>
        <Route path="/weather" component={Weather} />
        <Route path="/transit" component={Transit} />
      </Route>
    </Router>
  </Provider>
);


render(<App />, document.getElementById('app'));
