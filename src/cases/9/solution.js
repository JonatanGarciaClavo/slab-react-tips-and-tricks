import React, { useReducer, useEffect, useCallback, useMemo } from 'react';
import './shared/styles/components/App.css';

import FiltersList from './shared/components/FiltersList';
import VehiclesList from './shared/components/VehiclesList';
import Loader from './shared/components/Loader';
import Error from './shared/components/Error';

import { vehiclesFetchData } from './shared/state/vehicles/actions';
import { setFilter } from './shared/state/filters/actions';

import vehiclesReducer, { vehiclesReducerDefaultState } from './shared/state/vehicles/reducer';
import filtersReducer, { filtersReducerDefaultState } from './shared/state/filters/reducer';

import { getVehiclesFiltered } from './shared/state/vehicles/selectors';
import { generateFiltersSettings } from './shared/state/filters/selectors';

const DevCase = () => {
  // 📝 create reducer for vehicles state
  const [{ vehicles, error, loading }, vehiclesDispatch] = useReducer(
    vehiclesReducer,
    vehiclesReducerDefaultState,
  );
  // 📝 create reducer for filters state
  const [filters, filtersDispatch] = useReducer(filtersReducer, filtersReducerDefaultState);

  // 📝  to fetch data in componentDidMount we need to use useEffect remember [] as second pararm to don't do it in each render
  useEffect(() => {
    // 👀 it seems weird to pass dispatch like this but it is to keep same behavior as redux-thunk
    vehiclesFetchData()(vehiclesDispatch);
  }, []);

  // 📝 callback to handle filter change
  const handleFilterChange = useCallback((id, value) => {
    filtersDispatch(setFilter(id, value));
  }, []);

  // ℹ️ in this case we use useMemo to memoize result of vehicles been filtered
  const vehiclesFiltered = useMemo(() => getVehiclesFiltered(vehicles, filters), [
    vehicles,
    filters,
  ]);
  // ℹ️ in this case we use useMemo to memoize filters data like per type what kind of options they should display
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
          <FiltersList settings={filtersSettings} onFilterChange={handleFilterChange} />
          <VehiclesList vehicles={vehiclesFiltered} />
        </div>
      )}
    </div>
  );
};

DevCase.title = 'DevCase Sytac';

export default DevCase;
