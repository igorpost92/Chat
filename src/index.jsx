import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import faker from 'faker';
import cookies from 'js-cookie';
import gon from 'gon';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import debug from './debug';

import createStore, { subscribeForUpdates } from './store';
import connectSocket from './socket';
import App from './components/App';
import UserNameContext from './contextes/UserNameContext';

debug('gon', gon);

let username = cookies.get('userName');
if (!username) {
  username = faker.name.findName();
  cookies.set('userName', username);
  debug('set userName', username);
}

const { channels, messages, currentChannelId } = gon;
const store = createStore(channels, messages, currentChannelId);

const cb = subscribeForUpdates(store);
connectSocket(cb);

render(
  <Provider store={store}>
    <UserNameContext.Provider value={username}>
      <App />
    </UserNameContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
