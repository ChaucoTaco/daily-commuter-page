import React from 'react';

const Weather = ({ weather }) => {
  return (
    <div>
      <p>This is the Weather</p>
      <p> {weather.daily.summary} </p>
    </div>
  );
};

export default Weather;

Weather.propTypes = {
  weather: React.PropTypes.object,
};
