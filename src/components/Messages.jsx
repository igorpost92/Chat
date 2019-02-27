import React from 'react';
import Message from './Message';
import connect from '../connect';

const mapStateToProps = (state) => {
  const { messages } = state;
  return { messages };
};

const Messages = (props) => {
  const { messages } = props;
  return (
    <div className="d-flex p-2 flex-column align-items-start h-100 mh-100 overflow-auto border">
      {messages.map((message) => {
        return (
          <Message key={message.id} author={message.author} text={message.text} />
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps)(Messages);
