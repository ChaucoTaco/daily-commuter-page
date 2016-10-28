import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { connect } from 'react-redux';
import Weather from '../components/weather/index';
import api from '../config/api';
import config from '../config/config';
import store from '../store';
import { getSuccess } from '../actions/weather-actions';

class WeatherContainer extends Component {
  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    fetchJsonp(`https://api.darksky.net/forecast/${api.darkSkyKey}/${config.latitude},${config.longitude}`, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
    })
      .then(response => response.json())
      .then((response) => {
        store.dispatch(
          getSuccess(response)
        );
      });
  }

  render() {
    return (
      <Weather weather={this.props.weather} />
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    weather: storeState.weatherState.weather,
  };
};

export default connect(mapStateToProps)(WeatherContainer);

WeatherContainer.propTypes = {
  weather: React.PropTypes.object,
};
