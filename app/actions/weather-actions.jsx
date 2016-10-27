import { weatherTypes } from '../actions/action-types';

export function getUsersSuccess(weatherData) {
  return {
    type: weatherTypes.GET_WEATHER_SUCCESS,
    weather: weatherData,
  };
}
