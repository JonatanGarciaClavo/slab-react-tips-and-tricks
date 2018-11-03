import { createGlobalStyle } from 'styled-components/macro';

export const theme = {
  colors: {
    blue: '#E9842E',
    lightgray: '#1A2533',
  },
  fonts: {
    sans: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900');
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`;
