import React from 'react';
import UserNameContext from '../contextes/UserNameContext';

const withUserName = (Menu) => {
  const WithUserName = props => (
    <UserNameContext.Consumer>
      {username => <Menu {...props} username={username} />}
    </UserNameContext.Consumer>
  );

  return WithUserName;
};

export default withUserName;
