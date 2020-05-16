import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Row, Col, Container } from 'react-bootstrap';
import CampaignForm from './components/CampaignForm';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <CampaignForm />
        </Col>
      </Row>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default App;
