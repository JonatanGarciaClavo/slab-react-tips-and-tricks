import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { List } from 'react-virtualized';
import Persona from '../../components/Persona';
import { generateItemsPersonas } from '../../utils';
import withToggle from '../../components/withToggle';

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

const VirtualizedList = ({ personas }) => (
  <Box>
    <List
      height={500}
      rowCount={personas.length}
      rowHeight={105}
      rowRenderer={({ index, style }) => (
        <ListItem key={index} persona={personas[index]} style={style} />
      )}
      width={960}
    />
  </Box>
);

const Example3 = ({ isActive, toggle, personas }) => (
  <Flex alignItems="center" flexDirection="column">
    <Box my={3}>
      <Button onClick={toggle}>{isActive ? 'Show Flat list' : 'Show Virtualized list'}</Button>
    </Box>
    <Box width={1}>
      {isActive ? <VirtualizedList personas={personas} /> : <FlatList personas={personas} />}
    </Box>
  </Flex>
);

Example3.defaultProps = {
  personas: generateItemsPersonas(100),
};

export default withToggle(Example3, false);
