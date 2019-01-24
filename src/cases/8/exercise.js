import React, { useMemo } from 'react';

import useTodosWithLocalStorage from './Exercise/useTodosWithLocalStorage';
import useDocumentTitle from './Exercise/useDocumentTitle';

import ThemeContext from './shared/ThemeContext';
import NewTodo from './shared/NewTodo';
import TodoItem from './shared/TodoItem';
import ListContainer from './shared/ListContainer';
import Container from './shared/Container';
import Switch from './shared/Switch';

function Exercise() {
  // 📝 newTodo is a const but you need a way to update it each time user enter new todo into the input
  const newTodo = '';
  // 📝 theme it is a fixed constant but we want our UI get updated when toggle it is clicked by the user what we could do?
  const theme = 'dark';
  // 🔎 check comments inside of this custom hooks to know what it will be provided
  const [todos, { addTodo, deleteTodo, toggleTodo }] = useTodosWithLocalStorage([]);
  // ℹ️ remember reselect and selectors? this is hooks way to do it
  const calculateIncompleteTodoCount = useMemo(
    () => todos => todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0),
    [todos],
  );
  const incompleteTodoCount = calculateIncompleteTodoCount(todos);
  const title = incompleteTodoCount ? `Todos (${incompleteTodoCount})` : 'Todos';
  // 🔎 check comments inside of this custom hooks to know what it will be provided
  useDocumentTitle(title);
  const handleNewSubmit = e => {
    e.preventDefault();
    console.log('handleNewSubmit');
  };
  const handleNewTodoChange = e => {
    console.log('handleNewTodoChange: ', e.target.value);
  };
  const handleThemeChange = flag => {
    console.log('handleThemeChange: ', flag);
  };

  // 👷‍♂️ you shouldn't change anything from here to the end of the file 🏗
  return (
    <ThemeContext.Provider value={theme}>
      <Container theme={theme} todos={todos}>
        <Switch checked={theme === 'light'} onChange={handleThemeChange} />
        <NewTodo onSubmit={handleNewSubmit} value={newTodo} onChange={handleNewTodoChange} />
        {!!todos.length && (
          <ListContainer theme={theme}>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onChange={toggleTodo} onDelete={deleteTodo} />
            ))}
          </ListContainer>
        )}
      </Container>
    </ThemeContext.Provider>
  );
}

Exercise.title = 'TODO hooks';

export default Exercise;
