import React from 'react';
import cn from 'classnames';
import { Button, ButtonGroup } from 'react-bootstrap';
import connect from '../hocs/connect';

const mapStateToProps = (state) => {
  const { byId, currentChannelId } = state.channels;
  const { name: channelName, removable: canRemoveChannel } = byId[currentChannelId];

  return { channelName, currentChannelId, canRemoveChannel };
};

@connect(mapStateToProps)
class MessagesHeaderPanel extends React.Component {
  handleRename = () => {
    const { currentChannelId, channelName, showModal } = this.props;
    showModal({ type: 'renameChannel', options: { currentChannelId, channelName } });
  };

  handleDelete = () => {
    const { currentChannelId, channelName, showModal } = this.props;
    showModal({ type: 'removeChannel', options: { currentChannelId, channelName } });
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
