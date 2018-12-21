import styled from 'styled-components';

const styles = {
  dark: {
    /* https://uigradients.com/#DarkOcean */
    old: '#373b44' /* fallback for old browsers */,
    webkit:
      '-webkit-linear-gradient( to right, #4286f4, #373b44 )' /* Chrome 10-25, Safari 5.1-6 */,
    others:
      'linear-gradient( to right, #4286f4, #373b44 )' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  light: {
    /* https://uigradients.com/#SunnyDays */
    old: '#EDE574' /* fallback for old browsers */,
    webkit: '-webkit-linear-gradient(to right, #EDE574, #E1F5C4)' /* Chrome 10-25, Safari 5.1-6 */,
    others:
      'linear-gradient(to right, #EDE574, #E1F5C4)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
};

export default styled.div`
  margin: 0 auto;
  width: 400px;
  padding: 20px 10px 30px 10px;
  display: flex;
  flex-direction: column;
  input[type='text'] {
    border-radius: ${props => (props.todos.length ? '0.25em 0.25em 0 0' : '0.25em')};
  }
  background: ${props => styles[props.theme].old};
  background: ${props => styles[props.theme].webkit};
  background: ${props => styles[props.theme].others};
`;
