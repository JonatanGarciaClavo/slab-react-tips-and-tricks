import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Avatar from './Avatar';

const ReactionList = ({ reactions }) => {
  return reactions.map(({ id, reaction }) => <span key={id}>{reaction}</span>);
};

export const PersonaList = ({ text, description, reactions }) => {
  return (
    <Flex p={2} my={1} mx={2} color="darkgray" bg="lightgray">
      <Box p={2}>
        <Avatar name={text} />
      </Box>
      <Box px={2}>
        <Text fontSize={2} my={1}>
          {text}
        </Text>
        <Text>{description}</Text>
        <ReactionList reactions={reactions} />
      </Box>
    </Flex>
  );
};

export const PersonaGrid = ({ text }) => {
  return (
    <Box width={1} color="darkgray" bg="white" p={2}>
      <Box p={2} bg="lightgray">
        <Avatar name={text} size={167} />
        <Text fontSize={3} my={1} textAlign="center">
          {text}
        </Text>
      </Box>
    </Box>
  );
};
