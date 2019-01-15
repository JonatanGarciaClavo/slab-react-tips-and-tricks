import { useMemo } from 'react';
import { multiFilter } from '../utils';

/**
 * Function selector to provide array of vehicles filtered from storage
 */
export const getVehiclesFiltered = (vehicles, filters) =>
  useMemo(() => multiFilter(vehicles, filters), [vehicles, filters]);
