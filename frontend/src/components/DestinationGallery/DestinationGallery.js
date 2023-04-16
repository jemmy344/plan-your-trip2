import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export const DestinationGallery = ({ destination }) => {
    return (
        <Col md={4}>
          <Card className='m-3 shadow'>
            <Card.Img variant="top" src={destination.image}  className='card-size' style={{ height: '250px', objectFit: 'cover' }} />
            <Card.ImgOverlay>
              <Card.Title>{destination.title}</Card.Title>
              <Card.Text>{destination.text}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
    )
}