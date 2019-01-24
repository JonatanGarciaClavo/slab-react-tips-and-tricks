// import React, { useReducer, useEffect, useCallback, useMemo } from 'react';
import React from 'react';
import './shared/styles/components/App.css';

import FiltersList from './shared/components/FiltersList';
import VehiclesList from './shared/components/VehiclesList';
import Loader from './shared/components/Loader';
import Error from './shared/components/Error';

// ℹ️ un comment this code ones you use it
// import { vehiclesFetchData } from './shared/state/vehicles/actions';
// import { setFilter } from './shared/state/filters/actions';

// import vehiclesReducer, { vehiclesReducerDefaultState } from './shared/state/vehicles/reducer';
// import filtersReducer, { filtersReducerDefaultState } from './shared/state/filters/reducer';

// import { getVehiclesFiltered } from './shared/state/vehicles/selectors';
// import { generateFiltersSettings } from './shared/state/filters/selectors';

const DevCase = () => {
  const error = false;
  const loading = true;
  const handleFilterChange = (id, value) => {
    console.log(id, value);
  };
  const filtersSettings = [];
  const vehiclesFiltered = [];

  return (
    <div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loader />
      ) : (
        <div>
          <FiltersList settings={filtersSettings} onFilterChange={handleFilterChange} />
          <VehiclesList vehicles={vehiclesFiltered} />
        </div>
      )}
    </div>
  );
};

DevCase.title = 'DevCase Sytac';

export default DevCase;
