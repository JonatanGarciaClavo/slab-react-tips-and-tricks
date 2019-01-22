import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { PersonaGrid } from '../../components/Persona';
import { generateItemsPersonas } from '../../utils';

const GridItem = ({ persona, deletePersona }) => (
  <Flex my={2} key={persona.id} flexDirection="column" alignItems="center">
    <PersonaGrid {...persona} />
    <Button onClick={() => deletePersona(persona.id)}>Delete Persona X</Button>
  </Flex>
);

const Grid = ({ personas, deletePersona }) => (
  <Flex flexWrap="wrap" justifyContent="space-around">
    {personas.map(persona => (
      <GridItem key={persona.id} persona={persona} deletePersona={deletePersona} />
    ))}
  </Flex>
);

class Example6 extends React.PureComponent {
  state = {
    personas: generateItemsPersonas(20),
  };

  addPersona = () => {
    this.setState(prevState => ({
      personas: [...generateItemsPersonas(1), ...prevState.personas],
    }));
  };

  resetList = () => {
    this.setState({ personas: generateItemsPersonas(20) });
  };

  deletePersona = id => {
    this.setState(prevState => ({
      personas: prevState.personas.filter(persona => persona.id !== id),
    }));
  };

  render() {
    const { personas } = this.state;

    return (
      <Flex alignItems="center" flexDirection="column">
        <Flex width={1} justifyContent="space-around">
          <Button onClick={this.addPersona}>Add Persona +</Button>
          <Button onClick={this.resetList}>Reset List</Button>
        </Flex>
        <Box width={1}>
          <Grid personas={personas} deletePersona={this.deletePersona} />
        </Box>
      </Flex>
    );
  }
}

Example6.title = 'Profiler example';

export default Example6;
