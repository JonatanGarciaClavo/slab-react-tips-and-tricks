import { createGlobalStyle } from 'styled-components/macro';

export const orange = '#E9842E';

export const theme = {
  colors: {
    blue: orange,
    lightgray: '#F3F3F3',
    darkgray: '#1A2533',
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: orange,
    },
    outline: {
      color: orange,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
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
