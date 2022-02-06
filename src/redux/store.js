import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk)),
);

export default store;
