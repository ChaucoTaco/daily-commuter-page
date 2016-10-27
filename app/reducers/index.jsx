import { combineReducers } from 'redux';

import weatherReducer from './weather-reducer';

const reducers = combineReducers({
  weatherState: weatherReducer,
});

export default reducers;
