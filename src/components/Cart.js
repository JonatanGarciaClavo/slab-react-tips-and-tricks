import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import CartIcon from './CartIcon';
import { orange } from '../theme/globalStyles';

const lightGray = '#abb0be';

const CartButton = styled.button`
  display: flex;
  align-items: center;
`;

const Badge = styled.span`
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

const ShoppingCartTotal = styled.div`
  float: right;
`;

const ShoppingCartTotalLabel = styled.span`
  color: ${lightGray};
`;
const ShoppingCartTotalPrice = styled.span`
  color: ${orange};
`;

const ShoppingCart = styled.div`
  margin: 20px 0;
  float: right;
  background: lightyellow;
  width: 240px;
  position: relative;
  border-radius: 3px;
  padding: 20px;
`;

const ShoppingCartHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
`;

const ShoppingCartItems = styled.ul`
  padding-top: 20px;
`;

const ShoppingCartItemContainer = styled.li`
  margin-bottom: 18px;
  display: flex;
`;

const ShoppingCartItemName = styled.span`
  display: block;
  padding-top: 10px;
  font-size: 16px;
`;

const ShoppingCartItemPrice = styled.span`
  color: ${orange};
  margin-right: 8px;
`;

const ShoppingCartItemQuantity = styled.span`
  color: ${lightGray};
`;

const Cart = ({ onCartClick, items, totalPrice, showList }) => (
  <Flex
    css={`
      width: 100%;
    `}
    my="20px"
    flexDirection="column"
    justifyContent="center"
  >
    <Flex
      css={`
        width: 100%;
      `}
      justifyContent="center"
    >
      <CartButton onClick={onCartClick}>
        <CartIcon />
        <Badge>{items.length}</Badge>
      </CartButton>
    </Flex>
    {showList && (
      <Flex justifyContent="center">
        <ShoppingCart>
          <ShoppingCartHeader>
            <CartIcon />
            <Badge>{items.length}</Badge>
            <ShoppingCartTotal>
              <ShoppingCartTotalLabel>Total:</ShoppingCartTotalLabel>
              <ShoppingCartTotalPrice>{totalPrice}</ShoppingCartTotalPrice>
            </ShoppingCartTotal>
          </ShoppingCartHeader>
          <ShoppingCartItems>
            {items.map(({ id, name, totalPrice, quantity }) => (
              <ShoppingCartItemContainer key={id}>
                <Flex flexDirection="column">
                  <ShoppingCartItemName>{name}</ShoppingCartItemName>
                  <Box>
                    <ShoppingCartItemPrice>{totalPrice}</ShoppingCartItemPrice>
                    <ShoppingCartItemQuantity>Quantity: {quantity}</ShoppingCartItemQuantity>
                  </Box>
                </Flex>
              </ShoppingCartItemContainer>
            ))}
          </ShoppingCartItems>
        </ShoppingCart>
      </Flex>
    )}
  </Flex>
);

export default Cart;
