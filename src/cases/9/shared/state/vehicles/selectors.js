import { multiFilter } from '../../utils';

/**
 * Function selector to provide array of vehicles filtered from storage
 *
 * @param {Array} vehicles
 * @param {Object} filters
 */
export const getVehiclesFiltered = (vehicles, filters) => multiFilter(vehicles, filters);
