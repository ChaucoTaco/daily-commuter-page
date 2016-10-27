import { weatherTypes } from '../actions/action-types';

const initialState = {
  weather: {
    daily: {
      summary: '',
    },
  },
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case weatherTypes.GET_WEATHER_SUCCESS:
      return Object.assign({}, state, { weather: action.weather });
    default:
      return state;
  }
};

export default weatherReducer;
