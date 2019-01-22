/**
 * This custom hook will deal with all business logic related to todos
 * That means we need to find a way to add, delete and toggle as complete our todos
 * Another requirement it is that we need to store all changes into local storage
 * Last but not least, we need a way to track what was last todo id
 */
// ℹ️ Don't get to crazy, but you shouldn't use any other hook than following ones
// import { useEffect, useMemo, useRef, useReducer } from 'react';

// ℹ️ Local storage key that we will use for this exercise
const TODOS_LOCAL_STORAGE_KEY = 'exercise-todos';

export default function(defaultValue = []) {
  // 🤔 To track last todo id what kind of hook we will need?
  // 📝 For this case we will use userReducer for our todo state management
  // ℹ️ Remember that second argument of useReducer it is initial state
  // 📝 but also you could provide a function initializer 😉
  // 👀 Remember how to deal to be able to update our todos in local storage
  // 🚨 check signature of function output and respect it
  const addTodo = newTodo => {};
  const deleteTodo = id => {};
  const toggleTodo = id => {};
  return [defaultValue, { addTodo, deleteTodo, toggleTodo }];
}
