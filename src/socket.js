import io from 'socket.io-client';
import debug from './debug';

export default (cb) => {
  const socket = io();

  socket.on('newMessage', ({ data }) => {
    debug('socket newMessage', data);
    cb(data);
  });
};
