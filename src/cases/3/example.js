import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { generateItemsPersonas } from '../../utils';

class Example3 extends React.PureComponent {
  state = {
    personas: generateItemsPersonas(1000),
  };

  renderPersona({ id, text, description, reactions }) {
    return (
      <Box width={[1]} p={2} m={1} mx={2} color="darkgray" bg="lightgray">
        <Text fontSize={2}>{text}</Text>
        <Text>{description}</Text>
        {reactions.map(tag => (
          <span>{tag}</span>
        ))}
      </Box>
    );
  }

  render() {
    const { personas } = this.state;
    return <Flex flexWrap="wrap">{personas.map(persona => this.renderPersona(persona))}</Flex>;
  }
}

export default Example3;
