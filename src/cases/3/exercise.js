/**
 * Exercise 3
 *
 * This exercise is a bit different compared with the others, in this case you need to apply all tips
 * and techniques learned before. That means you need to find and identify issues and try to fix it.
 *
 * 🚨 Don't get too crazy, all of them should be pretty obvious, after what we learned before 😉
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

// const MemoListItem = React.memo(ListItem);

const List = ({ items }) => (
  <Box my={10}>
    {items.map(item => (
      <ListItem key={item.id} item={item} />
    ))}
  </Box>
);

const NumberOfItemsBar = ({ buttons, onClick }) => (
  <Box my={10}>
    {buttons.map(numItems => (
      <Button
        mx={1}
        variant="outline"
        onClick={() => {
          onClick(numItems);
        }}
      >
        {numItems}
      </Button>
    ))}
  </Box>
);

class Exercise3 extends React.Component {
  state = {
    items: generateListItems(5),
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
  render() {
    const { items } = this.state;
    return (
      <Flex alignItems="center" flexDirection="column">
        <Box mx={30}>
          <NumberOfItemsBar
            buttons={[3, 5, 8, 13]}
            onClick={numItems => {
              this.setState({
                items: generateListItems(numItems),
              });
            }}
          />
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

export default Exercise3;
