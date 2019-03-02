import React from 'react';
import Message from './Message';
import connect from '../hocs/connect';

const mapStateToProps = (state) => {
  const channelId = state.channels.currentChannelId;
  const messages = state.messages.filter(message => message.channelId === channelId);
  return { messages };
};

@connect(mapStateToProps)
class Messages extends React.Component {
  state = { scrolled: false }

  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const container = this.container.current;
    if (prevProps.messages !== this.props.messages && !this.state.scrolled) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = this.container.current;
    const delta = 10;
    const scrolled = scrollHeight - scrollTop - clientHeight >= delta;

    this.setState((prev) => {
      if (prev.scrolled === scrolled) {
        return null;
      }

      return { scrolled };
    });
  }

  render() {
    const { messages } = this.props;
    return (
      <div onScroll={this.handleScroll} ref={this.container} className="d-flex p-2 flex-column align-items-start h-100 mh-100 overflow-auto border">
        {messages.map((message) => {
          return (
            <Message key={message.id} author={message.author} text={message.text} />
          );
        })}
      </div>
    );
  }
}

export default Messages;
