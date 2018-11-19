import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { generateItemsPersonas } from '../../utils';
import Avatar from '../../components/Avatar';

class Example3 extends React.PureComponent {
  state = {
    personas: generateItemsPersonas(1000),
  };

  renderPersona({ id, text, description, reactions }) {
    return (
      <Flex key={id} width={[1]} p={2} my={1} mx={2} color="darkgray" bg="lightgray">
        <Box p={2}>
          <Avatar />
        </Box>
        <Box px={2}>
          <Text fontSize={2} my={1}>
            {text}
          </Text>
          <Text>{description}</Text>
          {reactions.map(({ id, reaction }) => (
            <span key={id}>{reaction}</span>
          ))}
        </Box>
      </Flex>
    );
  }

  render() {
    const { personas } = this.state;
    return <Flex flexWrap="wrap">{personas.map(persona => this.renderPersona(persona))}</Flex>;
  }
}

export default Example3;
