/**
 * Exercise 6
 *
 * ✅ The purpose of this exercise is only to use the React Profiler to compare the performance between the
 *    previously proposed exercise and the solution.
 * 🕚 Check the benchmark times of rendering to see the differences in performance.
 */
import React from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import { generateRandomNumber, generateListItems, generateRandomColor } from '../../utils';

const ListItem = ({ item }) => (
  <Box my={2} style={{ backgroundColor: generateRandomColor() }}>
    <Flex p={10} alignItems="center">
      <Box>
        <Text mx={2}>{item.text}</Text>
      </Box>
      <Flex width={1} justifyContent="flex-end">
        {item.isActive ? (
          <span role="img" aria-label="active">
            ✅
          </span>
        ) : (
          <span role="img" aria-label="inactive">
            ❌
          </span>
        )}
      </Flex>
    </Flex>
  </Box>
);

const MemoListItem = React.memo(ListItem);

const List = ({ items }) => (
  <Box my={10}>
    {items.map(item => (
      <MemoListItem key={item.id} item={item} />
    ))}
  </Box>
);

class Exercise6 extends React.Component {
  state = {
    items: generateListItems(40),
  };

  handleButtonClick = () => {
    this.setState(({ items }) => {
      const randomIndex = generateRandomNumber(items.length - 1, 0);
      return {
        items: items.map((item, index) =>
          index === randomIndex ? { ...item, isActive: !item.isActive } : item,
        ),
      };
    });
  };

  handleNumberOfItemsClick = numItems => {
    this.setState({
      items: generateListItems(numItems),
    });
  };

  render() {
    const { items } = this.state;
    return (
      <Flex alignItems="center" flexDirection="column">
        <Box mx={30}>
          <Button onClick={this.handleButtonClick}>Random toggle</Button>
        </Box>
        <Box mx={30}>
          <List items={items} />
        </Box>
      </Flex>
    );
  }
}

Exercise6.title = 'Compare and debug';
export default Exercise6;
