import React from 'react';
import { ListGroup } from 'react-bootstrap';
import connect from '../hocs/connect';

const mapStateToProps = (state) => {
  const { channels, currentChannelId } = state.channels;
  return { channels, currentChannelId };
};

@connect(mapStateToProps)
class ChannelsList extends React.Component {
  handleClick = (channelId) => {
    const id = parseInt(channelId, 10);
    this.props.selectChannel(id);
  };

  render() {
    const { channels, currentChannelId } = this.props;
    return (
      <ListGroup>
        {channels.map((item) => {
          const isActive = item.id === currentChannelId;
          return (
            <ListGroup.Item
              eventKey={item.id}
              onSelect={this.handleClick}
              action
              key={item.id}
              active={isActive}
            >
              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

ChannelsList.defaultProps = {
  channels: [],
};

export default ChannelsList;
