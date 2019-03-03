import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import connect from '../hocs/connect';
import withModal from '../hocs/withModal';

@connect(null)
@withModal('removeChannel')
class ChannelDeleteModal extends React.PureComponent {
  delete = async () => {
    const { deleteChannel, close } = this.props;
    const { currentChannelId } = this.props.options;

    deleteChannel(currentChannelId);
    close();
  };

  render() {
    const { close } = this.props;
    const { channelName } = this.props.options || {};

    // TODO: submitting
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure that you want to delete channel {channelName}?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={close}>Close</Button>
          <Button variant="danger" onClick={this.delete}>Delete</Button>
        </Modal.Footer>
      </>
    );
  }
}

export default ChannelDeleteModal;
