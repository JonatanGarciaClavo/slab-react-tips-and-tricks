import React from 'react';
import { Flex, Box, Text } from 'rebass';
import List from '../../components/List';

const withTitle = Component => ({ title, ...props }) => (
  <div>
    <h3>{title}</h3>
    <Component {...props} />
  </div>
);

const ListWithTitle = withTitle(List);

class Example2 extends React.PureComponent {
  render() {
    return (
      <Flex>
        <Box mx={30}>
          <Text as="h1">With title</Text>
          <ListWithTitle title="Character list" />
        </Box>
        <Box mx={30}>
          <Text as="h1">Without title</Text>
          <List />
        </Box>
      </Flex>
    );
  }
}

Example2.title = 'HoCs example';

export default Example2;
