import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import connect from '../connect';
import withUserName from '../hocs/withUserName';

const mapStateToProps = (state) => {
  const { textMessage } = state.chat;
  return { textMessage };
};

@connect(mapStateToProps)
@withUserName
class NewMessage extends React.Component {
  handleInput = (e) => {
    const { inputMessage } = this.props;
    const text = e.target.value;
    inputMessage(text);
  }

  onClick = () => {
    const { textMessage, sendMessage, username } = this.props;
    sendMessage(1, textMessage, username);
  }

  render() {
    const { textMessage } = this.props;
    return (
      <InputGroup className="my-3">
        <FormControl value={textMessage} placeholder="Message..." onChange={this.handleInput} />
        <InputGroup.Append>
          <Button variant="outline-primary" onClick={this.onClick}>Send</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default NewMessage;
