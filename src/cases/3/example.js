import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { generateItemsPersonas, randomAvatarConfig } from '../../utils';
import Avatar from 'avataaars';

class Example3 extends React.PureComponent {
  state = {
    personas: generateItemsPersonas(1000),
  };

  renderPersona({ id, text, description, reactions }) {
    return (
      <Flex width={[1]} p={2} my={1} mx={2} color="darkgray" bg="lightgray">
        <Box p={2}>
          <Avatar {...randomAvatarConfig()} />
        </Box>
        <Box>
          <Text fontSize={2} my={1}>
            {text}
          </Text>
          <Text>{description}</Text>
          {reactions.map(tag => (
            <span>{tag}</span>
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
