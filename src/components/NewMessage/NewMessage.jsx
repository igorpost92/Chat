import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class NewMessage extends React.Component {
  handleInput = (e) => {
    const { inputMessage } = this.props;
    const text = e.target.value;
    inputMessage(text);
  }

  onClick = () => {
    const { textMessage, sendMessage } = this.props;
    sendMessage(1, textMessage);
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
