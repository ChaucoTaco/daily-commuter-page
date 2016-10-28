/* global fetch:true*/

import React, { Component } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import Transit from '../components/transit/index';
import config from '../config/config';
import api from '../config/api';
import store from '../store';
import { getSuccess } from '../actions/transit-actions';

class transitContainer extends Component {
  componentDidMount() {
    this.getTransit('unionSq');
    this.getTransit('les');
    this.getTransit('chelsea');
  }

  getTransit(location) {
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${config.address}&destination=${config[location]}&mode=transit&key=${api.googleKey}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        return (response.json());
      })
      .then((response) => {
        store.dispatch(
          getSuccess(response)
        );
      });
  }

  render() {
    return (
      <Transit
        transit={this.props.transit}
      />
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    transit: storeState.transitState.transit,
  };
};

export default connect(mapStateToProps)(transitContainer);

transitContainer.propTypes = {
  transit: React.PropTypes.array,
};
