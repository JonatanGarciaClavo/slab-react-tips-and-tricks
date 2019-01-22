import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import ThemeContext from './ThemeContext';
import styles from './styles';

const NEW_TODO_MAX_LENGTH = 42;
const NEW_TODO_WARNING_LENGTH = 25;

const Input = styled.input`
  border: 2px solid ${props => styles[props.theme].input.borderColor};
  font-size: 1.75em;
  padding: 0.25em 0.5em;
  color: ${props => styles[props.theme].input.color};
  border-radius: 0.25em;
  background: transparent;
  transition: all 0.1s;
  position: relative;
  width: 50px;

  &::-webkit-input-placeholder {
    color: ${props => styles[props.theme].input.placeholder};
  }

  & + ul {
    border-radius: 0.25em 0.25em 0 0;
  }
`;
const Form = styled.form`
  position: relative;
  display: flex;

  &:after {
    content: attr(data-remaining);
    display: block;
    position: absolute;
    right: 10px;
    top: 50%;
    padding: 6px;
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 3;
    text-align: center;
    min-width: 20px;
    color: ${props => {
      if (props['data-remaining'] === 0) {
        return styles[props.theme].countdown.maximum.color;
      } else if (props['data-remaining'] <= NEW_TODO_WARNING_LENGTH) {
        return styles[props.theme].countdown.warning.color;
      } else {
        return styles[props.theme].countdown.normal.color;
      }
    }};
    background-color: ${props => {
      if (props['data-remaining'] === 0) {
        return styles[props.theme].countdown.maximum.backgroundColor;
      } else if (props['data-remaining'] <= NEW_TODO_WARNING_LENGTH) {
        return styles[props.theme].countdown.warning.backgroundColor;
      } else {
        return styles[props.theme].countdown.normal.backgroundColor;
      }
    }};
    border: 1px solid black;
    border-color: ${props => {
      if (props['data-remaining'] === 0) {
        return styles[props.theme].countdown.maximum.borderColor;
      } else if (props['data-remaining'] <= NEW_TODO_WARNING_LENGTH) {
        return styles[props.theme].countdown.warning.borderColor;
      } else {
        return styles[props.theme].countdown.normal.borderColor;
      }
    }};
  }

  input {
    padding-right: 45px !important;
    width: 100%;
  }
`;

function NewTodo({ value, onChange, onSubmit }) {
  const theme = useContext(ThemeContext);
  const dataRemaining = useMemo(() => NEW_TODO_MAX_LENGTH - value.length, [value]);
  return (
    <Form onSubmit={onSubmit} data-remaining={dataRemaining} theme={theme}>
      <Input
        type="text"
        autoFocusx
        placeholder="New Todo..."
        value={value}
        maxLength={NEW_TODO_MAX_LENGTH}
        onChange={onChange}
        theme={theme}
      />
    </Form>
  );
}

export default NewTodo;
