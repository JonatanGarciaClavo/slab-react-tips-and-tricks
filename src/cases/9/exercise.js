import React, { useReducer, useEffect, useCallback, useMemo } from 'react';
import './shared/styles/components/App.css';

import FiltersList from './shared/components/FiltersList';
import VehiclesList from './shared/components/VehiclesList';
import Loader from './shared/components/Loader';
import Error from './shared/components/Error';

import { vehiclesFetchData } from './shared/actions/vehicles';
import { setFilter } from './shared/actions/filters';

import vehiclesReducer, { vehiclesReducerDefaultState } from './shared/reducers/vehicles';
import filtersReducer, { filtersReducerDefaultState } from './shared/reducers/filters';

import { getVehiclesFiltered } from './shared/selectors/vehicles';
import { generateFiltersSettings } from './shared/selectors/filters';

const DevCase = () => {
  const [{ vehicles, error, loading }, vehiclesDispatch] = useReducer(
    vehiclesReducer,
    vehiclesReducerDefaultState,
  );
  const [filters, filtersDispatch] = useReducer(filtersReducer, filtersReducerDefaultState);

  useEffect(() => {
    vehiclesFetchData()(vehiclesDispatch);
  }, []);
  const handleFilterChange = useCallback((id, value) => {
    filtersDispatch(setFilter(id, value));
  }, []);

  const vehiclesFiltered = useMemo(() => getVehiclesFiltered(vehicles, filters), [
    vehicles,
    filters,
  ]);
  const filtersSettings = useMemo(() => generateFiltersSettings(filters, vehicles), [
    filters,
    vehicles,
  ]);

  return (
    <div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loader />
      ) : (
        <div>
          <FiltersList filtersSettings={filtersSettings} onFilterChange={handleFilterChange} />
          <VehiclesList vehicles={vehiclesFiltered} />
        </div>
      )}
    </div>
  );
};

DevCase.title = 'DevCase Sytac';

export default DevCase;
