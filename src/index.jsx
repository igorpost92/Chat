import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

// import io from 'socket.io-client';
import createStore from './store';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = createStore();

render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('chat'),
);
