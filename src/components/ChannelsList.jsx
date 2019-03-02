import React from 'react';
import { ListGroup } from 'react-bootstrap';
import connect from '../hocs/connect';

const mapStateToProps = (state) => {
  const { channels, currentChannelId } = state.channels;
  return { channels, currentChannelId };
};

const ChannelsList = (props) => {
  const { channels, currentChannelId } = props;
  return (
    <ListGroup>
      {channels.map((item) => {
        const isActive = item.id === currentChannelId;
        return (
          <ListGroup.Item
            key={item.id}
            active={isActive}
          >
            {item.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

ChannelsList.defaultProps = {
  channels: [],
};

export default connect(mapStateToProps)(ChannelsList);
