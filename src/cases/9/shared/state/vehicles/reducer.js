import {
  VEHICLES_FETCH_DATA_ERROR,
  VEHICLES_LOADING,
  VEHICLES_FETCH_DATA_SUCCESS,
} from './constants.';

// Vehicles reducer initial state
export const vehiclesReducerDefaultState = {
  vehicles: [],
  error: false,
  loading: false,
};

export default (state = vehiclesReducerDefaultState, action) => {
  switch (action.type) {
    case VEHICLES_FETCH_DATA_ERROR:
      return { ...state, error: action.error };
    case VEHICLES_LOADING:
      return { ...state, loading: action.loading };
    case VEHICLES_FETCH_DATA_SUCCESS:
      return { ...state, vehicles: action.vehicles };
    default:
      return state;
  }
};
