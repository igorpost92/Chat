import React from 'react';
import cn from 'classnames';
import { Button, ButtonGroup } from 'react-bootstrap';
import connect from '../hocs/connect';

const mapStateToProps = (state) => {
  const { channels } = state;
  const { currentChannelId } = channels;
  const channel = channels.channels.find(({ id }) => id === currentChannelId);
  const { name: channelName, removable: canRemoveChannel } = channel || {};

  return { channelName, currentChannelId, canRemoveChannel };
};

@connect(mapStateToProps)
class MessagesHeaderPanel extends React.Component {
  handleRename = () => {
    const { currentChannelId, channelName, showModal } = this.props;
    showModal('renameChannel', { currentChannelId, channelName });
  };

  handleDelete = () => {
    const { currentChannelId, channelName, showModal } = this.props;
    showModal('removeChannel', { currentChannelId, channelName });
  };

  render() {
    const { channelName, canRemoveChannel } = this.props;

    return (
      <div className="d-flex w-100 justify-content-between align-items-center p-2 m-1">
        <h5 className="m-0">{channelName}</h5>
        <ButtonGroup className={cn({ invisible: !canRemoveChannel })}>
          <Button variant="outline-secondary" size="sm" onClick={this.handleRename}>Rename</Button>
          <Button variant="outline-danger" size="sm" onClick={this.handleDelete}>Delete</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default MessagesHeaderPanel;
