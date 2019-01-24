import { useEffect, useMemo, useRef, useReducer } from 'react';

const TODOS_LOCAL_STORAGE_KEY = 'solution-todos';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export default function(defaultValue) {
  // ℹ️ we use useRef to know last todo id created
  const todoId = useRef(0);
  // ℹ️ we create this function as reducer function initializer to be able to get data from local storage
  const initialValue = () => {
    const valueFromStorage = JSON.parse(
      window.localStorage.getItem(TODOS_LOCAL_STORAGE_KEY) || JSON.stringify(defaultValue),
    );
    todoId.current = valueFromStorage.reduce((memo, todo) => Math.max(memo, todo.id), 0);
    return valueFromStorage;
  };
  // 📝 nothing shocking here, typical TODO reducer
  const [todos, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_TODO:
        todoId.current += 1;
        return [...state, { id: todoId.current, text: action.text, completed: false }];
      case DELETE_TODO:
        return state.filter(todo => todo.id !== action.id);
      case TOGGLE_TODO:
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
        );
      default:
        return state;
    }
  }, useMemo(initialValue, []));
  // 🔎 we use effect here to be able to add into local storage all our todo changes
  useEffect(() => {
    window.localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  // 🏗 create all actions that will be used in our component
  const addTodo = newTodo =>
    dispatch({
      type: ADD_TODO,
      text: newTodo,
    });
  const deleteTodo = id => dispatch({ type: DELETE_TODO, id });
  const toggleTodo = id => dispatch({ type: TOGGLE_TODO, id });
  return [todos, { addTodo, deleteTodo, toggleTodo }];
}
