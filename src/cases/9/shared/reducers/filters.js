// Filters reducer
const filtersReducerDefaultState = {
  type: '',
  brand: '',
  color: '',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHANGE_TYPE_FILTER_VALUE':
      return { ...state, type: action.value };
    case 'CHANGE_BRAND_FILTER_VALUE':
      return { ...state, brand: action.value };
    case 'CHANGE_COLOR_FILTER_VALUE':
      return { ...state, color: action.value };
    default:
      return state;
  }
};
