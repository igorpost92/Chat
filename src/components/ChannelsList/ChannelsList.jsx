import React from 'react';
import { ListGroup } from 'react-bootstrap';

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

export default ChannelsList;
