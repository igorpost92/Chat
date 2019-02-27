import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { initApp, addMessage } from './actions';

export const subscribeForNewMessages = store => (message) => {
  store.dispatch(addMessage(message.attributes));
};

export default (channels = [], messages = [], currentChannelId) => {
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, applyMiddleware(thunk));

  store.dispatch(initApp(channels, messages, currentChannelId));

  return store;
};
