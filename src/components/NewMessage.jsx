import React from 'react';
import { InputGroup, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';
import withUserName from '../hocs/withUserName';

const mapStateToProps = (state) => {
  const { currentChannelId } = state.channels;
  return { currentChannelId };
};

@reduxForm({ form: 'newMessage' })
@connect(mapStateToProps)
@withUserName
class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    this.focusField();
  }

  focusField = () => {
    const field = this.input.current.getRenderedComponent();
    field.focus();
  }

  onSubmit = async ({ message }) => {
    const {
      currentChannelId,
      username,
      sendMessage,
      reset,
    } = this.props;

    try {
      await sendMessage(currentChannelId, message, username);
      reset();
      this.focusField();
    } catch (error) {
      // TODO:
      alert('There was an error while sending message'); // eslint-disable-line no-alert
    }
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <InputGroup className="my-3">
          <Field
            ref={this.input}
            forwardRef
            className="form-control"
            placeholder="Message..."
            name="message"
            component="input"
            type="text"
            autoComplete="off"
            disabled={submitting}
          />
          <InputGroup.Append>
            <Button variant="outline-primary" type="submit" disabled={submitting}>Send</Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    );
  }
}

export default NewMessage;
