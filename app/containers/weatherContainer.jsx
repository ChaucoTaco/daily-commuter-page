import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { connect } from 'react-redux';
import Weather from '../components/weather/index';
import api from '../config/api';
import config from '../config/config';
import store from '../store';

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
        store.dispatch({
          type: 'GET_USERS_SUCCESS',
          weather: response,
        });
      });
  }

  render() {
    return (
      <Weather summary={this.props.weather} />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    weather: store.weatherState.weather.daily.summary,
  };
};

export default connect(mapStateToProps)(WeatherContainer);

WeatherContainer.propTypes = {
  weather: React.PropTypes.string,
};
