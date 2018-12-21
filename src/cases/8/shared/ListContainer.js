import styled from 'styled-components';
import styles from './styles';

export default styled.ul`
  list-style: none;
  border: 2px solid ${props => styles[props.theme].list.borderColor};
  border-top: none;
  margin: 0;
  padding-left: 0;
`;
