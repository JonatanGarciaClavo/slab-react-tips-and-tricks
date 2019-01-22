import theme from 'mdx-deck/themes';

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: `'Open Sans','Helvetica','Arial',sans-serif`,
  // custom colors
  colors: {
    text: '#222A36',
    background: '#FBFBFB',
  },
  css: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    },
    ul: {
      textAlign: 'left',
      marginTop: '80px',
    },
    ol: {
      textAlign: 'left',
      marginTop: '80px',
    },
  },
};
