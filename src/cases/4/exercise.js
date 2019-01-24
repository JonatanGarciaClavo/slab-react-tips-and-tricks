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
 * ❗️ Tip: Use the following values to optimize the new list visualization results =>
 *    {width: 610, height: 500, rowHeight: 105}
 *
 * 👉 Don't forget to check the documentation for more info
 *    https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation
 */
import React from 'react';
import { Box, Flex } from 'rebass';
import { PersonaList } from '../../components/Persona';
import { generateItemsPersonas } from '../../utils';

const ListItem = ({ persona, style }) => (
  <Box style={style} key={persona.id}>
    <PersonaList {...persona} />
  </Box>
);

const FlatList = ({ personas }) => (
  <Box>
    {personas.map(persona => (
      <ListItem key={persona.id} persona={persona} />
    ))}
  </Box>
);

const Exercise4 = ({ personas }) => (
  <Flex alignItems="center" flexDirection="column">
    <Box width={1}>
      <FlatList personas={personas} />
    </Box>
  </Flex>
);

/**
 *  📝 Generates by default a list with 100 random 'personas'. Play with this adjustments to see
 *  the difference in performance for longer lists.
 */
Exercise4.defaultProps = {
  personas: generateItemsPersonas(100),
};

export default Exercise4;
