/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import ThemeContext from './shared/ThemeContext';
import NewTodo from './shared/NewTodo';
import TodoItem from './shared/TodoItem';
import ListContainer from './shared/ListContainer';
import Container from './shared/Container';
import Switch from './shared/Switch';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      theme: 'dark',
    };
    this.todoId = 0;
  }
  update(todos) {
    const inCompleteTodos = todos.reduce((memo, todo) => (!todo.completed ? memo + 1 : memo), 0);
    document.title = inCompleteTodos ? `Todos (${inCompleteTodos})` : 'Todos';
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }
  componentDidMount() {
    const todos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    this.todoId = todos.reduce((memo, todo) => Math.max(memo, todo.id), 0);
    this.update(todos);
    this.setState({ todos });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      this.update(this.state.todos);
    }
  }
  handleNewChange = e => {
    this.setState({
      newTodo: e.target.value,
    });
  };
  handleNewSubmit = e => {
    e.preventDefault();
    this.todoId += 1;
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: this.todoId,
            text: prevState.newTodo,
            completed: false,
          },
        ],
        newTodo: '',
      };
    });
  };
  handleDelete = (id, e) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== id),
      };
    });
  };
  handleCompletedToggle = (id, e) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    });
  };
  handleThemeChange = flag => {
    this.setState({
      theme: flag ? 'light' : 'dark',
    });
  };
  render() {
    const { newTodo, todos, theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <Container theme={theme} todos={todos}>
          <Switch checked={theme === 'light'} onChange={this.handleThemeChange} />
          <NewTodo
            onSubmit={this.handleNewSubmit}
            value={newTodo}
            onChange={this.handleNewChange}
          />
          {!!todos.length && (
            <ListContainer theme={this.context}>
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onChange={this.handleCompletedToggle}
                  onDelete={this.handleDelete}
                />
              ))}
            </ListContainer>
          )}
        </Container>
      </ThemeContext.Provider>
    );
  }
}
TodoList.contextType = ThemeContext;
TodoList.title = 'TODO class';

export default TodoList;
