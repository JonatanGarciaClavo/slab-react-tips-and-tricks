// Action creators for filters

export function changeTypeFilter(value) {
  return {
    type: 'CHANGE_TYPE_FILTER_VALUE',
    value
  };
}

export function changeBrandFilter(value) {
  return {
    type: 'CHANGE_BRAND_FILTER_VALUE',
    value
  };
}

export function changeColorFilter(value) {
  return {
    type: 'CHANGE_COLOR_FILTER_VALUE',
    value
  };
}