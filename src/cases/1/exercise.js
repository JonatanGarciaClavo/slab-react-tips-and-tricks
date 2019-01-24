/**
 * Exercise 1
 *
 * 1) 🔎 Check and analyze code
 * 2) 👀 Check how DOM is updated when clicking both buttons
 * 3) ❌ Detect why all our list items get updated when clicking the first button
 * 4) ✅ Fix the problem and check again that DOM updates are right
 * 5) ❓ Why was it working for one button and not for the other?
 *
 */

import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import { generateListItems, generateListItem } from '../../utils';

class Exercise1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: generateListItems(),
    };
    this.handleAddFistClick = this.handleAddFistClick.bind(this);
    this.handleAddLastClick = this.handleAddLastClick.bind(this);
  }
  handleAddFistClick() {
    this.setState(prevState => ({
      items: [generateListItem(), ...prevState.items],
    }));
  }
  handleAddLastClick() {
    this.setState(prevState => ({
      items: [...prevState.items, generateListItem()],
    }));
  }
  render() {
    const { items } = this.state;
    return (
      <Flex alignItems="center">
        <Box mx={30}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Text>{item.text}</Text>
              </li>
            ))}
          </ul>
        </Box>
        <Flex flexDirection="column">
          <Box my={10} mx={30}>
            <Button onClick={this.handleAddFistClick}>Add first</Button>
          </Box>
          <Box my={10} mx={30}>
            <Button onClick={this.handleAddLastClick}>Add last</Button>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default Exercise1;
