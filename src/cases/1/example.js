import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import { generateListItems, generateListItem } from '../../utils';

class Example1 extends React.PureComponent {
  state = {
    items: generateListItems(),
  };

  handleButtonClick = () => {
    this.setState(prevState => ({
      items: [generateListItem(), ...prevState.items],
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <Flex alignItems="center">
        <Box mx={30}>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <Text>{item.text}</Text>
              </li>
            ))}
          </ul>
        </Box>
        <Box mx={30}>
          <Button onClick={this.handleButtonClick}>ADD</Button>
        </Box>
      </Flex>
    );
  }
}

Example1.title = 'Keys example';

export default Example1;
