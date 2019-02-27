import { useContext } from 'react';
import UserNameContext from '../contextes/UserNameContext';

export default () => {
  const username = useContext(UserNameContext);
  return username;
};
