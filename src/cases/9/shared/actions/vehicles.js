import { fetchVehicles } from '../service/apiUtils';

// Action creator for setting fetch error status property
export function vehiclesFetchError(error) {
  return {
    type: 'VEHICLES_FETCH_DATA_ERROR',
    error
  };
}

// Action creator for setting loading status property
export function vehiclesLoading(loading) {
  return {
    type: 'VEHICLES_LOADING',
    loading
  };
}

// Action creator for setting vehicles data
export function vehiclesFetchDataSuccess(vehicles) {
  return {
    type: 'VEHICLES_FETCH_DATA_SUCCESS',
    vehicles
  };
}

// Action creator for fetch initial data
// Set status properties according to response
export function vehiclesFetchData() {
  return (dispatch) => {
    dispatch(vehiclesLoading(true));

    fetchVehicles()
      .then((response) => {
        if (response.error) {
          throw Error(response.error);
        }

        dispatch(vehiclesLoading(false));

        return response;
      })
      .then((vehicles) => {
        dispatch(vehiclesFetchDataSuccess(vehicles));
      })
      .catch(() => dispatch(vehiclesFetchError(true)))
  };
}