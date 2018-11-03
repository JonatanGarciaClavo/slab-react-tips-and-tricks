import React from 'react';
import { Box, Text } from 'rebass';
import { Link } from 'react-router-dom';

export default () => (
  <Box>
    <ul>
      <li>
        <Link to="/example/1">
          <Text>Example 1</Text>
        </Link>
        <Link to="/exercise/1">
          <Text>Exercise 1</Text>
        </Link>
        <Link to="/solution/1">
          <Text>Solution exercise 1</Text>
        </Link>
      </li>
    </ul>
  </Box>
);
