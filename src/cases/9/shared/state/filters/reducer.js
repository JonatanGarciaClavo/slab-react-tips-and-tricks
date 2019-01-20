import { TYPE, BRAND, COLORS, SET_FILTER } from './constants';

// Filters reducer
export const filtersReducerDefaultState = {
  [TYPE]: '',
  [BRAND]: '',
  [COLORS]: '',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    default:
      return state;
  }
};
