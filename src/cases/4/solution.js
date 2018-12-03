/**
 * Exercise 4
 *
 * This exercise it is a bit different compared with other ones, in this case you need to apply all tips
 * and techniques learned before. That means you need to find and identify issues and try to fix it.
 *
 * 🚨 Don't get too crazy, all of them should be pretty obvious after what we learned before 😉
 */
import React from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import { generateRandomNumber, generateListItems, generateRandomColor } from '../../utils';

// 📝 remember that arrays and objects inside of render functions are created each time
//    that component has to be re-rendered aka new ref will be generated
const NUMBER_ITEMS = [3, 5, 8, 13];

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

/**
 * 📝 To avoid new function reference each render, create a bind function
 *    to be created ones and reuse that reference each time
 */
class NumberButton extends React.PureComponent {
  handleButtonClick = () => {
    const { number, onClick } = this.props;
    onClick(number);
  };

  render() {
    return (
      <Button mx={1} variant="outline" onClick={this.handleButtonClick}>
        {this.props.number}
      </Button>
    );
  }
}

const NumberOfItemsBar = ({ buttons, onClick }) => (
  <Box my={10}>
    {buttons.map(number => (
      <NumberButton number={number} onClick={onClick} />
    ))}
  </Box>
);

class Exercise4 extends React.Component {
  state = {
    items: generateListItems(5),
  };
  handleButtonClick = () => {
    this.setState(({ items }) => {
      const randomIndex = generateRandomNumber(items.length - 1, 0);
      return {
        items: items.map(
          (item, index) => (index === randomIndex ? { ...item, isActive: !item.isActive } : item),
        ),
      };
    });
  };
  // 📝 we created this bind function to avoid create it each time this component re render
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
          <NumberOfItemsBar buttons={NUMBER_ITEMS} onClick={this.handleNumberOfItemsClick} />
        </Box>
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

Exercise4.title = 'Find the errors and fix it';
export default Exercise4;
