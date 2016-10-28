import { weatherTypes } from '../actions/action-types';

export function getSuccess(data) {
  return {
    type: weatherTypes.GET_WEATHER_SUCCESS,
    weather: data,
  };
}
