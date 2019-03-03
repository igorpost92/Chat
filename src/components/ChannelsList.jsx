import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import connect from '../hocs/connect';

const mapStateToProps = (state) => {
  const { channels, currentChannelId } = state.channels;
  return { channels, currentChannelId };
};

@connect(mapStateToProps)
class ChannelsList extends React.Component {
  handleSelect = (channelId) => {
    const id = parseInt(channelId, 10);
    this.props.selectChannel(id);
  };

  handleAdd = () => {
    this.props.showModal('addChannel');
  };

  render() {
    const { channels, currentChannelId } = this.props;
    return (
      <ListGroup>
        <ListGroup.Item className="border-0">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <h5 className="m-0">Channels</h5>
            <div className="d-flex">
              <Button variant="outline-primary" size="sm" onClick={this.handleAdd}>New</Button>
            </div>
          </div>
        </ListGroup.Item>

        {channels.map((item) => {
          const isActive = item.id === currentChannelId;
          return (
            <ListGroup.Item
              eventKey={item.id}
              onSelect={this.handleSelect}
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
