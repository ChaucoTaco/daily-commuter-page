import { combineReducers } from 'redux';

import weatherReducer from './weather-reducer';
import transitReducer from './transit-reducer';

const reducers = combineReducers({
  weatherState: weatherReducer,
  transitState: transitReducer,
});

export default reducers;
