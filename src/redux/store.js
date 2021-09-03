// Module Import
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

// All reducer imports
import counter from './reducers/counter';

// React Store creation
const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
  )
)

export default store;