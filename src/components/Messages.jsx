import React from 'react';
import autoscroll from 'autoscroll-react';
import Message from './Message';
import MessagesHeaderPanel from './MessagesHeaderPanel';
import connect from '../hocs/connect';

const mapStateToProps = (state) => {
  const { channels } = state;
  const channelId = channels.currentChannelId;

  const messages = state.messages.filter(message => message.channelId === channelId);
  return { messages };
};

const Messages = (props) => {
  const { messages, onScroll, forwardedRef } = props;
  return (
    <>
      <MessagesHeaderPanel />
      <div ref={forwardedRef} onScroll={onScroll} className="d-flex p-2 flex-column align-items-start h-100 mh-100 overflow-auto border">
        {messages.map(message => (
          <Message key={message.id} author={message.author} text={message.text} />
        ))}
      </div>
    </>
  );
};

const forwardRef = (props, ref) => <Messages {...props} forwardedRef={ref} />;

export default connect(mapStateToProps)(autoscroll(React.forwardRef(forwardRef)));
