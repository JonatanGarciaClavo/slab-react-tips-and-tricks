import React from 'react';
import { Box, Flex } from 'rebass';
import Persona from '../../components/Persona';
import { generateItemsPersonas } from '../../utils';

const ListItem = ({ persona, style }) => (
  <Box style={style} key={persona.id}>
    <Persona {...persona} />
  </Box>
);

const FlatList = ({ personas }) => (
  <Box>
    {personas.map(persona => (
      <ListItem key={persona.id} persona={persona} />
    ))}
  </Box>
);

const Exercise3 = ({ personas }) => (
  <Flex alignItems="center" flexDirection="column">
    <Box width={1}>
      <FlatList personas={personas} />
    </Box>
  </Flex>
);

Exercise3.defaultProps = {
  personas: generateItemsPersonas(100),
};

export default Exercise3;
