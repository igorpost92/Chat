import io from 'socket.io-client';
import debug from './debug';

const events = [
  'newMessage',
  'newChannel',
  'renameChannel',
  'removeChannel',
];

export default (cb) => {
  const socket = io();

  events.forEach((event) => {
    socket.on(event, ({ data }) => {
      debug(`socket ${event}`, data);
      cb(event, data);
    });
  });
};
