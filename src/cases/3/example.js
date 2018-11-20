import React from 'react';
import { Box } from 'rebass';
import { List } from 'react-virtualized';
import Persona from '../../components/Persona';
import { generateItemsPersonas } from '../../utils';

class Example3 extends React.PureComponent {
  state = {
    personas: generateItemsPersonas(100),
    showVirtualized: false,
  };

  renderFlatList(personas) {
    return <Box>{personas.map(data => this.renderPersona(data))}</Box>;
  }

  renderVirtualizedList(personas) {
    return (
      <Box>
        <List
          height={500}
          rowCount={personas.length}
          rowHeight={100}
          rowRenderer={({ index }) => this.renderPersona(personas[index])}
          width={960}
        />
      </Box>
    );
  }

  renderPersona(data) {
    return (
      <Box key={data.id}>
        <Persona {...data} />
      </Box>
    );
  }

  render() {
    const { personas, showVirtualized } = this.state;
    return showVirtualized ? this.renderVirtualizedList(personas) : this.renderFlatList(personas);
  }
}

export default Example3;
