import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.rainOnCommute = '';
  }

  componentWillReceiveProps(nextProps) {
    const { weather } = nextProps;
    if (weather.hourly) {
      const todaysDate = new Date(weather.hourly.data[0].time * 1000).getDate();

      weather.hourly.data.map((item) => {
        const dateObj = new Date(item.time * 1000);
        const hour = dateObj.getHours();
        const date = dateObj.getDate();

        if (((hour >= 8 && hour <= 11) || (hour >= 17 && hour <= 20)) && date === todaysDate) {
          if (item.summary.indexOf('Drizzle') > -1) {
            this.rainOnCommute = 'It might be drizzly';
          } else if (item.summary.indexOf('Rain') > -1) {
            this.rainOnCommute = 'It\'s goign to rain on your commute';
          } else {
            this.rainOnCommute = 'Leave the umbrella at home.';
          }
        }
      });
    }

    this.forceUpdate();
  }

  render() {
    const { weather } = this.props;
    return (
      <div>
        <p>This is the Weather</p>
        <p> {weather.daily.summary} </p>
        <p> {this.rainOnCommute} </p>
      </div>
    );
  }
}

export default Weather;

Weather.propTypes = {
  weather: React.PropTypes.object,
};
