import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import Weather from '../components/weather/index';
import api from '../config/api'

class WeatherContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: 'original summary',
    };

    this.getWeather();
  }

  getWeather() {
    fetchJsonp(`https://api.darksky.net/forecast/${api.darkSkyKey}/37.8267,-122.4233`, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ summary: response.daily.summary });
      });
  }

  render() {
    return (
      <Weather summary={this.state.summary} />
    );
  }
}

export default WeatherContainer;
