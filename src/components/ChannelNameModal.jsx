import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import connect from '../hocs/connect';
import withModal from '../hocs/withModal';

@connect(null)
@withModal('addChannel', 'renameChannel')
@reduxForm({ form: 'channelName' })
class ChannelNameModal extends React.PureComponent {
  componentDidMount() {
    const { options, initialize } = this.props;
    if (options) {
      const { channelName } = options;
      initialize({ channelName });
    }
  }

  onSubmit = async ({ channelName }) => {
    const { close, modalType } = this.props;

    try {
      if (modalType === 'addChannel') {
        const { createNewChannel } = this.props;
        await createNewChannel(channelName);
      } else {
        const { renameChannel } = this.props;
        const { currentChannelId } = this.props.options;
        await renameChannel(currentChannelId, channelName);
      }
      close();
    } catch (e) {
      alert('Something went wrong =('); // eslint-disable-line no-alert
    }
  };

  render() {
    const { handleSubmit, close } = this.props;

    // TODO: submitting
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>Select name for the channel</Modal.Title>
        </Modal.Header>

        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Modal.Body>
            <Field
              className="form-control"
              placeholder="Enter channel name"
              name="channelName"
              component="input"
              type="text"
              autoComplete="off"
              // disabled={submitting}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={close}>Close</Button>
            <Button type="submit" variant="primary">Save</Button>
          </Modal.Footer>
        </form>
      </>
    );
  }
}

export default ChannelNameModal;
