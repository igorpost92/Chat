import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import faker from 'faker';
import cookies from 'js-cookie';
import gon from 'gon';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import debug from './debug';

import createStore, { subscribeForNewMessages } from './store';
import connectSocket from './socket';
import App from './components/App';
import UserNameContext from './contextes/UserNameContext';

debug('gon', gon);

let userName = cookies.get('userName');
if (!userName) {
  userName = faker.name.findName();
  cookies.set('userName', userName);
  debug('set userName', userName);
}

const { channels, messages, currentChannelId } = gon;
const store = createStore(channels, messages, currentChannelId);

const cb = subscribeForNewMessages(store);
connectSocket(cb);

render(
  <Provider store={store}>
    <UserNameContext.Provider value={userName}>
      <App />
    </UserNameContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
