import { createStore } from 'redux';
import gon from 'gon';
import faker from 'faker';
import cookies from 'js-cookie';
import reducer from './reducer';

export default () => {
  const cookiesName = cookies.get('userName');
  const userName = cookiesName || faker.name.findName();

  const store = createStore(reducer);
  return store;
};
