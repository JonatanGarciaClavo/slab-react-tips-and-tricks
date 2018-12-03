/**
 * Exercise
 *
 * In this exercise we will work with selectors, for that let's build a shopping cart 🙌🏼.
 * To build this cart we will have a reducer with all our cart items, you don't need to
 * worried about that, it is already done 😉. What you need to complete it is how to
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

const selectCartDomain = state => state.cartReducer;
const makeSelectCart = createSelector(selectCartDomain, ({ cart }) => cart);
const makeSelectCartItems = createSelector(makeSelectCart, cart =>
  // iterate over all cart items and modify that properties that are needed
  cart.map(({ id, name, price, quantity }) => ({
    id,
    name,
    quantity,
    // format total price according AC
    totalPrice: buildPriceWithCurrencySymbol(price * quantity),
  })),
);
const makeSelectTotalCartPrice = createSelector(makeSelectCart, cart =>
  // Second we apply price format function according to AC
  buildPriceWithCurrencySymbol(
    // First we calculate sum of all items
    cart.reduce((acc, { quantity, price }) => (acc += quantity * price), 0),
  ),
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
