import React from 'react';
import { InputGroup, Button, Alert } from 'react-bootstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import connect from '../hocs/connect';
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
      throw new SubmissionError({ _error: 'Something went wrong =(' });
    }
  }

  render() {
    const { handleSubmit, submitting, error } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>

        {error && (
          <Alert variant="danger" className="mt-2">
            {error}
          </Alert>
        )}

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
