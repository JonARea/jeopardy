import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger())))

export default store
