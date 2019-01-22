import { SET_FILTER } from './constants';

// Action creators for filters

export function setFilter(id, value) {
  return {
    type: SET_FILTER,
    payload: {
      id,
      value,
    },
  };
}
