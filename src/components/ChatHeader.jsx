import React from 'react';
import useUsername from '../hooks/useUsername';

const ChatHeader = () => {
  const username = useUsername();
  return (
    <h2>
      Welcome back,
      {username}
    </h2>
  );
};

export default ChatHeader;
