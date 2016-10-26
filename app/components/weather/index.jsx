import React from 'react';

const Weather = ({ summary }) => (
  <div>
    <p>This is the Weather</p>
    <p> {summary} </p>
  </div>
);

export default Weather;

Weather.propTypes = {
  summary: React.PropTypes.string,
};
