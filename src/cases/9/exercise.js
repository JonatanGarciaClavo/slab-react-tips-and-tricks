import React, { useReducer, useEffect, useCallback } from 'react';
import './shared/styles/components/App.css';
import FiltersList from './shared/components/FiltersList';
import VehiclesList from './shared/components/VehiclesList';
import Loader from './shared/components/Loader';
import Error from './shared/components/Error';
import { vehiclesFetchData } from './shared/actions/vehicles';
import vehiclesReducer, { vehiclesReducerDefaultState } from './shared/reducers/vehicles';
import filtersReducer, { filtersReducerDefaultState } from './shared/reducers/filters';
import filteredVehicles from './shared/selectors/vehicles';
import { setFilter } from './shared/actions/filters';

const DevCase = () => {
  const [vehicles, vehiclesDispatch] = useReducer(vehiclesReducer, vehiclesReducerDefaultState);
  const [filters, filtersDispatch] = useReducer(filtersReducer, filtersReducerDefaultState);
  useEffect(() => {
    vehiclesFetchData()(vehiclesDispatch);
  }, []);
  const handleFilterChange = useCallback((id, value) => {
    filtersDispatch(setFilter(id, value));
  }, []);
  const vehiclesFiltered = filteredVehicles(vehicles.vehicles, filters);

  return (
    <div>
      {vehicles.error ? (
        <Error />
      ) : vehicles.loading ? (
        <Loader />
      ) : (
        <div>
          <FiltersList
            vehicles={vehiclesFiltered}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <VehiclesList vehicles={vehiclesFiltered} />
        </div>
      )}
    </div>
  );
};

DevCase.title = 'DevCase Sytac';

export default DevCase;
