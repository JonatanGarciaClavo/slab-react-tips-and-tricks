import React from 'react';
import { Text } from 'rebass';
import { generateListItems } from '../utils';

const ITEMS = generateListItems();

const List = () => (
  <ul>
    {ITEMS.map(item => (
      <li key={item.id}>
        <Text>{item.text}</Text>
      </li>
    ))}
  </ul>
);

export default List;
