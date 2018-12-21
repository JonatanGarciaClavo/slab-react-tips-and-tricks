import React, { useState, useMemo, useCallback } from 'react';

import useTodosWithLocalStorage from './Solution/useTodosWithLocalStorage';
import useDocumentTitle from './Solution/useDocumentTitle';

import ThemeContext from './shared/ThemeContext';
import NewTodo from './shared/NewTodo';
import TodoItem from './shared/TodoItem';
import ListContainer from './shared/ListContainer';
import Container from './shared/Container';
import Switch from './shared/Switch';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [theme, setTheme] = useState('dark');
  const [todos, { addTodo, deleteTodo, toggleTodo }] = useTodosWithLocalStorage([]);
  const calculateIncompleteTodoCount = useMemo(
    () => todos => todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0),
    [todos],
  );
  const incompleteTodoCount = calculateIncompleteTodoCount(todos);
  const title = incompleteTodoCount ? `Todos (${incompleteTodoCount})` : 'Todos';
  useDocumentTitle(title);
  const handleNewSubmit = useCallback(e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  });
  const handleNewTodoChange = useCallback(e => {
    setNewTodo(e.target.value);
  });
  const handleThemeChange = useCallback(flag => setTheme(flag ? 'light' : 'dark'));
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

TodoList.title = 'TODO hooks';

export default TodoList;
