/**
 *
 * @param {Array} items Array of objects to be filtered
 * @param {Object} filters Object with key to filter and value example { type: 'card' }
 */
export function multiFilter(items, filters) {
  const filterKeys = Object.keys(filters);
  return items.filter(item => {
    return filterKeys.every(filterKey => {
      if (!filters[filterKey]) {
        return true; // passing an empty filter means that filter is ignored.
      }
      return item[filterKey].includes(filters[filterKey]);
    });
  });
}

/**
 * Function to uppercase first letter of string provided
 * @param {String} string
 */
export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

/**
 * This function will transform array of values to array of objects with keys
 * value and label, this one it is same value but capitalize first letter
 * @param {Array} values Array of string values
 */
export function createFilterOptions(values) {
  return values.map(value => ({
    value,
    label: capitalizeFirstLetter(value),
  }));
}
