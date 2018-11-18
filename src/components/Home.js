import React from 'react';
import { Box, Text } from 'rebass';
import { Link } from 'react-router-dom';
import { NUM_EXERCISES } from '../constants';

function getExerciseList() {
  const list = [];
  for (let index = 1; index <= NUM_EXERCISES; index++) {
    list.push(
      <li key={index}>
        <Link to={`/example/${index}`}>
          <Text>{`Example ${index}`}</Text>
        </Link>
        <Link to={`/exercise/${index}`}>
          <Text>{`Exercise ${index}`}</Text>
        </Link>
        <Link to={`/solution/${index}`}>
          <Text>{`Solution exercise ${index}`}</Text>
        </Link>
      </li>,
    );
  }
  return list;
}

export default () => (
  <Box>
    <ul>{getExerciseList()}</ul>
  </Box>
);
