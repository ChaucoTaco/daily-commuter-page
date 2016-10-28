import { transitTypes } from '../actions/action-types';

export function getSuccess(data) {
  return {
    type: transitTypes.GET_TRANSIT_SUCCESS,
    transit: data,
  };
}
