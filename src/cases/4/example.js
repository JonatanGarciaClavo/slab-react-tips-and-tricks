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

class Example4 extends React.Component {
  state = {
    items: generateListItems(10),
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
          <Button onClick={this.handleButtonClick}>Random toggle</Button>
        </Box>
        <Box mx={30}>
          <List items={items} />
        </Box>
      </Flex>
    );
  }
}

Example4.title = 'Avoid unnecessary reconciliation example';
export default Example4;
