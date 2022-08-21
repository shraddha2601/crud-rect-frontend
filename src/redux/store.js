import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './roote-reducer'
import logger from "redux-logger"

const middlewares = [reduxThunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares)

));
// console.log('Initial state: ', store.getState())
// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )

export default store