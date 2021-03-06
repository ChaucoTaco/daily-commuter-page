import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Global from './components/global/';
import Home from './components/home/';
import Weather from './containers/weatherContainer';
import Transit from './containers/transitContainer';

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Global}>
        <IndexRoute component={Home} />
        <Route path="/weather" component={Weather} />
        <Route path="/transit" component={Transit} />
      </Route>
    </Router>
  </Provider>
);


render(<App />, document.getElementById('app'));
