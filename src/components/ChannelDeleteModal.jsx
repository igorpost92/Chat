import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { reduxForm, SubmissionError } from 'redux-form';
import connect from '../hocs/connect';
import withModal from '../hocs/withModal';

@connect(null)
@withModal('removeChannel')
@reduxForm({ form: 'removeChannel' })
class ChannelDeleteModal extends React.PureComponent {
  delete = async () => {
    const { deleteChannel, close, options: { currentChannelId } } = this.props;

    try {
      await deleteChannel(currentChannelId);
      close();
    } catch (error) {
      throw new SubmissionError({ _error: 'Something went wrong =(' });
    }
  };

  render() {
    const {
      handleSubmit, close, options, error, submitting,
    } = this.props;
    const { channelName } = options || {};

    return (
      <form onSubmit={handleSubmit(this.delete)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure that you want to delete channel
            {channelName}
            ?
          </Modal.Title>
        </Modal.Header>

        {error && (
          <Alert variant="danger" className="mt-1">
            {error}
          </Alert>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={close}>Close</Button>
          <Button type="input" variant="danger" disabled={submitting}>Delete</Button>
        </Modal.Footer>
      </form>
    );
  }
}

export default ChannelDeleteModal;
