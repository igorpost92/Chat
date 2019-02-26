import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NewMessage = () => {
  return (
    <InputGroup className="my-3">
      <FormControl placeholder="Message..." />
      <InputGroup.Append>
        <Button variant="outline-primary">Send</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NewMessage;
