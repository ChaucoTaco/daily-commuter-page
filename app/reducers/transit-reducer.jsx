import { transitTypes } from '../actions/action-types';

const initialState = {
  transit: [],
};

const transitReducer = (state = initialState, action) => {
  switch (action.type) {
    case transitTypes.GET_TRANSIT_SUCCESS:
      return Object.assign({}, state, {
        transit: [
          ...state.transit,
          action.transit.routes[0].legs[0],
        ],
      });
    default:
      return state;
  }
};

export default transitReducer;
