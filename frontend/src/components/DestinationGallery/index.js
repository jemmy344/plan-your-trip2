import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import beach from '../../assets/pexels-asad-photo-maldives-1449729.jpg';
import house from '../../assets/pexels-frans-van-heerden-2090865.jpg';
import cabin from '../../assets/pexels-rachel-claire-8112848.jpg';

const destinations = [
  {
    id: uuid(),
    image: beach,
    title: '30+',
    text: '',
  },
  {
    id: uuid(),
    image: house,
    title: 'Vacation Rentals',
    text: '156,786 Properties',
  },
  {
    id: uuid(),
    image: cabin,
    title: 'Vacation Rentals',
    text: '156,786 Properties',
  },
];

function DestinationCard({ destination }) {
  const { image, title, text } = destination;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} style={{ height: '15rem', objectFit: 'cover' }} />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

function DestinationGallery() {
  return (
    <div className="rentals-container p-3">
      <h2>Destination Gallery</h2>
      <div className='row'>
        <div className='col-6'>
          <p>
            Destination can describe where you are going, like a traveler whose
            destination is Paris, or a place that is known for a particular
            purpose.
          </p>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          <button className='destination-button' >View Details</button>
        </div> 
      </div>
      <p className="text-underline">Our photo gallery on top</p>
      <Row xs={1} md={2} lg={3} xl={3} className="g-2 pt-5">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </Row>
    </div>
  );
}

export default DestinationGallery;
