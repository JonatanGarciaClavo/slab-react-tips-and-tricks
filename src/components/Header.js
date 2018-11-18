import React from 'react';
import styled from 'styled-components/macro';
import { Box, Image, Heading, Flex } from 'rebass';
import logo from '../logo.svg';

const Hr = styled.hr`
  width: 90%;
  border-bottom: 1px solid ${props => props.theme.colors.darkgray};
`;

export default () => (
  <Flex my={10} flexDirection="column" justifyContent="center" alignItems="center" as="header">
    <Flex justifyContent="center" alignItems="center">
      <Image width="100px" src={logo} mx={10} />
      <Box py={20}>
        <Heading textAlign="center">Slab React tips and tricks</Heading>
      </Box>
    </Flex>
    <Hr />
  </Flex>
);
