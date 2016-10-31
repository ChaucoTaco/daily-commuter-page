import React, { Component } from 'react';
import Transit from '../../containers/transitContainer';
import Weather from '../../containers/weatherContainer';

class HomeWrapper extends Component {
  render() {
    return (
      <div>
        <Weather />
        <Transit />
      </div>
    );
  }
}

export default HomeWrapper;
