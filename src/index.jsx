import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import faker from 'faker';
import cookies from 'js-cookie';
import gon from 'gon';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

// import io from 'socket.io-client';


import createStore from './store';
import App from './components/App';
import UserNameContext from './contextes/UserNameContext';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const cookiesName = cookies.get('userName');
const userName = cookiesName || faker.name.findName();

const { channels } = gon;
const store = createStore(channels);

render(
  <Provider store={store}>
    <UserNameContext.Provider value={userName}>
      <App />
    </UserNameContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
