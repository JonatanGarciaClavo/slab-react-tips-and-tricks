import { getVehiclesFiltered } from './vehicles';
import { TYPE, BRAND, COLORS } from '../constants';
import { createFilterOptions, capitalizeFirstLetter } from '../utils';

/**
 * Function selector to provide filter data given a filter key
 *
 * (type) => ["car", "airplane", "train"]
 */
const calculateFilterOptions = (filterKey, vehiclesState, filters) => {
  const vehicles = getVehiclesFiltered(vehiclesState, filters);
  if (filters[filterKey]) {
    return [filters[filterKey]];
  } else {
    return [
      ...new Set(
        vehicles.reduce((filterData, vehicle) => {
          const value = vehicle[filterKey];
          if (typeof value === 'string') {
            filterData.push(value);
          } else {
            filterData = [...filterData, ...value];
          }
          return filterData;
        }, []),
      ),
    ];
  }
};

/**
 * Function selector to provide vehicles filter data, this is composition of all filters for vehicles
 * like type, brand, colors and return an array of all data needed in filters views
 */
export const generateFiltersSettings = (filters, vehicles) => {
  const typeValues = calculateFilterOptions(TYPE, vehicles, filters);
  const brandValues = calculateFilterOptions(BRAND, vehicles, filters);
  const colorsValues = calculateFilterOptions(COLORS, vehicles, filters);
  return [
    {
      id: TYPE,
      options: createFilterOptions(typeValues),
      selectedValue: filters[TYPE],
      inputLabel: capitalizeFirstLetter(TYPE),
    },
    {
      id: BRAND,
      options: createFilterOptions(brandValues),
      selectedValue: filters[BRAND],
      inputLabel: capitalizeFirstLetter(BRAND),
    },
    {
      id: COLORS,
      options: createFilterOptions(colorsValues),
      selectedValue: filters[COLORS],
      inputLabel: capitalizeFirstLetter(COLORS),
    },
  ];
};
