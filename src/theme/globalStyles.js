import { createGlobalStyle } from 'styled-components/macro';

export const theme = {
  colors: {
    blue: '#E9842E',
    lightgray: '#EFEFEF',
    darkgray: '#1A2533',
  },
  fonts: {
    sans: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    2: '1.25rem',
    3: '1.5rem',
    4: '1.75rem',
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
