import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Avatar from './Avatar';

const Persona = ({ text, description, reactions }) => {
  return (
    <Flex p={2} my={1} mx={2} color="darkgray" bg="lightgray">
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
};

export default Persona;
