import React, {Component} from 'react';
import { render } from 'react-dom';
import PlaceholderComponent from './PlaceholderComponent.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <PlaceholderComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
