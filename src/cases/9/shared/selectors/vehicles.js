import { multiFilter } from '../utils';

/**
 * Function selector to provide array of vehicles filtered from storage
 */
export const getVehiclesFiltered = (vehicles, filters) => multiFilter(vehicles, filters);
