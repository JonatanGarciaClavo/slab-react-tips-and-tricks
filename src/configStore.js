import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { selectorsExampleReducer } from './cases/5/example';
import cartReducer from './store/cartReducer';

const rootReducer = combineReducers({
  selectorsExample: selectorsExampleReducer,
  cartReducer,
});

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
