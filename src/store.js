import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import debug from './debug';

import reducers from './reducers';
import * as actions from './actions';

export const subscribeForUpdates = (store, socket) => {
  const { dispatch } = store;

  socket
    .on('newMessage', ({ data }) => {
      debug('socket newMessage', data);
      const message = data.attributes;
      dispatch(actions.handleMessageAdd({ message }));
    })
    .on('newChannel', ({ data }) => {
      debug('socket newChannel', data);
      const channel = data.attributes;
      dispatch(actions.handleChannelAdd({ channel }));
    })
    .on('renameChannel', ({ data }) => {
      debug('socket renameChannel', data);
      const channel = data.attributes;
      dispatch(actions.handleChannelRename({ channel }));
    })
    .on('removeChannel', ({ data }) => {
      debug('socket removeChannel', data);
      const channelId = data.id;
      dispatch(actions.handleChannelDelete({ channelId }));
    });
};

export default (channels = [], messages = [], currentChannelId) => {
  const rootReducer = combineReducers({ ...reducers, form: formReducer });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  store.dispatch(actions.initApp({ channels, messages, currentChannelId }));

  return store;
};
