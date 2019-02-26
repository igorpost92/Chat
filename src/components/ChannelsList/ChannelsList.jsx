import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ChannelsList = (props) => {
  const { channels } = props;
  return (
    <ListGroup>
      {channels.map(item => <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>)}
    </ListGroup>
  );
};

ChannelsList.defaultProps = {
  channels: [],
};

export default ChannelsList;
