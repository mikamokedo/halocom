import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import stateReducer from './reducer/index';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(stateReducer, initialState, composeEnhancers(
  applyMiddleware(thunk)
));
export default store;