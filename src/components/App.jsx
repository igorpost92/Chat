import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChatHeader from './ChatHeader';
import ChannelsList from './ChannelsList';
import Messages from './Messages';
import NewMessage from './NewMessage';
import ChannelNameModal from './ChannelNameModal';
import ChannelDeleteModal from './ChannelDeleteModal';

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
    <>
      <ChannelNameModal />
      <ChannelDeleteModal />
      <Container className="h-100 d-flex flex-column py-4">
        <ChatHeader />
        <Row className="h-75 mt-3">
          <Col md={4}>
            <ChannelsList />
          </Col>
          <Col md={{ offset: 1 }} className="d-flex flex-column h-100">
            <Messages />
            <NewMessage />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
