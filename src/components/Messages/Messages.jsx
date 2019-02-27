import React from 'react';
import Message from '../Message';

const Messages = (props) => {
  const { messages } = props;
  return (
    <div className="d-flex p-2 flex-column align-items-start h-100 mh-100 overflow-auto border">
      {messages.map((message) => {
        return (
          <Message key={message.id} text={message.text} />
        );
      })}
    </div>
  );
};

export default Messages;
