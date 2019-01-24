/**
 * Exercise 1
 *
 * 1) 🔎 Check and analyze code
 * 2) 👀 Check how DOM is updated when clicking both buttons
 * 3) ❌ Detect why all our list items get updated when clicking the first button
 * 4) ✅ Fix the problem and check again that DOM updates are right
 * 5) ❓ Why was it working for one button and not for the other?
 * When we add an item at end of the array means that key will be always new length of the array
 * but as you could see that it is only valid for that case not for the first button 😉
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
            {items.map(({ id, text }) => (
              // 👇 here is the problem, using a real unique identifier guaranteed optimize DOM updates
              <li key={id}>
                <Text>{text}</Text>
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

Exercise1.title = 'Play with keys';

export default Exercise1;
