import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ShowCase = () => {
  return (
    <Container>
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src=""
              style={{ height: '100%' }}
              muted
              autoPlay
              loop
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Card.Title>Video Card Title</Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ShowCase;
