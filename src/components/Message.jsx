import React from 'react';

const Message = (props) => {
  const { text } = props;
  return (
    <div className="d-inline-flex border border-primary rounded mx-2 my-1 px-2 py-3">{text}</div>
  );
};

export default Message;
