import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { selectorsExampleReducer } from './cases/5/example';
import vehiclesReducer from './cases/9/shared/reducers/vehicles';
import filtersReducer from './cases/9/shared/reducers/filters';
import cartReducer from './store/cartReducer';

const rootReducer = combineReducers({
  selectorsExample: selectorsExampleReducer,
  cartReducer,
  vehicles: vehiclesReducer,
  filters: filtersReducer,
});

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
