/**
 * Exercise 4
 *
 * The purpose of this exercise is to implement a virtualized version for the list that we display.
 *
 * 1) 📥 Import the required elements from the 'react-virtualized' library.
 * 2) 🏗 Recreate the list we have with the new virtualized component. Pay special attention to
 *    the rowRenderer method.
 * 3) ☝️ Replace the list for the new one in the main component.
 * 4) 🎖 Extra bonus points for using the previously created withToggle HOC to build a toggle system
 *    to switch between the two lists.
 *
 * ❗️  Tip: Use the following values to optimize the new list visualization results =>
 *    {width: 610, height: 500, rowHeight: 105}
 *
 * 👉 Don't forget to check the documentation for more info
 *    https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation
 */
import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { List } from 'react-virtualized';
import { PersonaList } from '../../components/Persona';
import { generateItemsPersonas } from '../../utils';
import withToggle from '../../components/withToggle';

const ListItem = ({ persona, style }) => (
  <Box style={style} key={persona.id}>
    <PersonaList {...persona} />
  </Box>
);

/**
 * Flat List that will display the list of all personas.
 * @param {Object} props
 */
const FlatList = ({ personas }) => (
  <Box>
    {personas.map(persona => (
      <ListItem key={persona.id} persona={persona} />
    ))}
  </Box>
);

/**
 * Virtualized List that will display the list of personas rendering only the ones actually visible.
 * @param {Object} props
 */
const VirtualizedList = ({ personas }) => (
  <Box>
    <List
      height={500}
      rowCount={personas.length}
      rowHeight={105}
      // ❗️rowRenderer function will determine the composition of the different rows in the list
      rowRenderer={({ key, index, style }) => (
        <ListItem key={key} persona={personas[index]} style={style} />
      )}
      width={610}
    />
  </Box>
);

/**
 * Component that will display one the flat list or the virtualized list depending of the
 * state of the toggle.
 * @param {Object} props
 */
const Exercise4 = ({ isActive, toggle, personas }) => (
  <Flex alignItems="center" flexDirection="column">
    <Box my={3}>
      <Button onClick={toggle}>{isActive ? 'Show Flat list' : 'Show Virtualized list'}</Button>
    </Box>
    <Box width={1}>
      {isActive ? <VirtualizedList personas={personas} /> : <FlatList personas={personas} />}
    </Box>
  </Flex>
);

Exercise4.defaultProps = {
  personas: generateItemsPersonas(100),
};

// 👌 Imported and wrapped into the withToggle HOC
const Enhanced = withToggle(Exercise4, false);

Enhanced.title = 'Play with Virtualized';

export default Enhanced;
