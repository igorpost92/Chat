import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChatHeader from './ChatHeader';
import ChannelsList from './ChannelsList';
import NewMessage from './NewMessage';

// nav.navbar.navbar-expand-lg.navbar-light.bg-faded
//       a.navbar-brand(href="/") Chat
//       button.navbar-toggler(data-toggle="collapse" data-target="#navbarSupportedContent")
//         span.navbar-toggler-icon
//       .collapse.navbar-collapse
//         ul.navbar-nav.mr-auto
//           li.nav-item.active
//             a.nav-link(href="/") Home
//     .container

const App = () => {
  return (
    <Container className="h-100 d-flex flex-column my-4">
      <ChatHeader />
      <Row className="h-75">
        <Col md={4}>
          <ChannelsList />
        </Col>
        <Col md={{ offset: 1 }} className="d-flex flex-column">
          <div className="flex-grow-1 border">11</div>
          <NewMessage />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
