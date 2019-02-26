import React from 'react';
import UserNameContext from '../contextes/UserNameContext';

const ChatHeader = () => {
  return (
    <UserNameContext.Consumer>
      {(userName) => {
        return <h2>Welcome back, {userName}</h2>;
      }}
    </UserNameContext.Consumer>
  );
};

export default ChatHeader;
