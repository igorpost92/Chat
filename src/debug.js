import createDebug from 'debug';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const namespace = 'chat*';
export default createDebug(namespace);
