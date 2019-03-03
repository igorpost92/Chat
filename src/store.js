import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import reducers from './reducers';
import * as actions from './actions';

export const subscribeForUpdates = (store) => {
  const events = {
    newMessage: actions.addMessage,
    newChannel: actions.addChannel,
    renameChannel: actions.handleChannelRename,
    removeChannel: actions.handleChannelDelete,
  };

  return (event, data) => {
    const method = events[event];

    if (!method) {
      return;
    }

    store.dispatch(method(data));
  };
};

export default (channels = [], messages = [], currentChannelId) => {
  const rootReducer = combineReducers({ ...reducers, form: formReducer });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  store.dispatch(actions.initApp(channels, messages, currentChannelId));

  return store;
};
