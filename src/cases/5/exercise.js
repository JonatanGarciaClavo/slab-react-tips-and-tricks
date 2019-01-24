/**
 * Exercise
 *
 * In this exercise we will work with selectors, for that let's build a shopping cart 🙌🏼.
 * To build this cart we will have a reducer with all our cart items. You don't need to
 * worry about that, it's already done 😉. What you need to complete it is how to
 * transform/normalize your cart items to be able to following some rules/use case.
 */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Flex, Button } from 'rebass';
import Cart from '../../components/Cart';
import withToggle from '../../components/withToggle';
import { buildPriceWithCurrencySymbol } from '../../utils';
import { addItemToCart } from '../../store/cartReducer';

// ℹ️ This selector it is only to let you know where it is this reducer in our global state
const selectCartDomain = state => state.cartReducer;

// ℹ️ This selector takes all cart items that are in our state
const makeSelectCart = createSelector(
  selectCartDomain,
  ({ cart }) => cart,
);

// ℹ️ this selector will convert our cart item data into something that we will consume in our Cart component
// 📝 { id: string, name: string, price: float, quantity: number } this is signature of cart item
// 🚨 desired output should be { id: '_uqyee7d8x', name: 'Rebecca', quantity: 2, totalPrice: "€ 95,80" }
// 👀 as you could see before total price has a special format for that you should use buildPriceWithCurrencySymbol
//    given a float number it will returns that data according to business case
const makeSelectCartItems = createSelector(
  makeSelectCart,
  cart => cart,
);

// ℹ️ This selector will calculate total price of all items in our cart
// 👀 format should be same as other prices so remember to use buildPriceWithCurrencySymbol
const makeSelectTotalCartPrice = createSelector(
  makeSelectCart,
  cart => 0,
);

const Exercise = ({ handleAddClick, items, totalPrice, isActive, toggle }) => (
  <Flex flexDirection="column" alignItems="center">
    <Button onClick={handleAddClick}>Add</Button>
    <Cart onCartClick={toggle} items={items} totalPrice={totalPrice} showList={isActive} />
  </Flex>
);

const mapStateToProps = createStructuredSelector({
  items: makeSelectCartItems,
  totalPrice: makeSelectTotalCartPrice,
});

const mapDispatchToProps = dispatch => ({
  handleAddClick: () => dispatch(addItemToCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToggle(Exercise));
