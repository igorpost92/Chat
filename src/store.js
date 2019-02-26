import { createStore, combineReducers } from 'redux';

import reducers from './reducers';
import { initChannels } from './actions';

export default (channels = []) => {
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer);

  if (channels.length) {
    store.dispatch(initChannels(channels));
  }

  return store;
};
