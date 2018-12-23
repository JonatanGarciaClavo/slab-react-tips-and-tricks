/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Flex } from 'rebass';
import { Grid } from 'react-virtualized';
import { PersonaGrid } from '../../components/Persona';
import { generateItemsPersonas } from '../../utils';

const personas = generateItemsPersonas(5000);

const ListItem = ({ persona, style }) => (
  <Box style={style} key={persona.id}>
    <PersonaGrid {...persona} />
  </Box>
);

const cellRenderer = ({ columnIndex, rowIndex, style }) => (
  <ListItem
    persona={personas[rowIndex * 4 + columnIndex]}
    style={style}
  />
);

const VirtualizedGrid = ({ personas }) => (
  <Box>
    <Grid
      cellRenderer={cellRenderer}
      columnCount={4}
      columnWidth={200}
      height={600}
      rowCount={personas.length / 4}
      rowHeight={240}
      width={800}
    />
  </Box>
);

const Example3 = ({ personas }) => (
  <Flex alignItems="center" flexDirection="column">
    <Flex width={1} justifyContent="center">
      <VirtualizedGrid personas={personas} />
    </Flex>
  </Flex>
);

Example3.defaultProps = {
  personas,
};

Example3.title = 'Virtualized example';

export default Example3;
