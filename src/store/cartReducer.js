import { generateCart, generateCartItem } from '../utils';

const ADD_ITEM = 'cartReducer/ADD_ITEM';

export function addItemToCart() {
  return {
    type: ADD_ITEM,
    payload: generateCartItem(),
  };
}

const initialState = {
  cart: generateCart(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
