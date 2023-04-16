import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import beach from '../../assets/pexels-asad-photo-maldives-1449729.jpg'
import house from '../../assets/pexels-frans-van-heerden-2090865.jpg'
import cabin from '../../assets/pexels-rachel-claire-8112848.jpg'


const offer = [
  {
    id: uuid(),
    image: beach,
    amount: "$500",
    text: [
      "2 beds",
      "2 baths",
      "Swimming pool",
      "Beach view",
      "Free parking",
    ],
  },
  {
    id: uuid(),
    image: house,
    amount: "$750",
    text: [
      "4 beds",
      "3 baths",
      "Spacious living room",
      "Private garden",
      "Free Wi-Fi",
    ],
  },
  {
    id: uuid(),
    image: cabin,
    amount: "$300",
    text: [
      "1 bed",
      "1 bath",
      "Fireplace",
      "Wooden interior",
      "Free breakfast",
    ],
  },
];

function SpecialOffers() {
  return (
    <div className="rentals-container p-3">
      <h2>Special Offers</h2>
      <p>
        Destination can describe where you are going, like a traveler whose
        destination is Paris, or a place that is known for a particular
        purpose.
      </p>
      <Row xs={1} md={2} lg={3} xl={3} className="g-2 pt-5">
        {offer.map((offer) => (
          <Col key={offer.id}>
            <Card className="m-3 shadow">
              <Card.Img
                variant="top"
                src={offer.image}
                style={{ height: '250px' }}
              />
              <Card.Body>
                <Card.Title>{offer.amount}</Card.Title>
                <Card.Text>
                  <ul>
                    {offer.text.map((item) => (
                      <li key={uuid()}>{item}</li>
                    ))}
                  </ul>
                </Card.Text>
                  <div className='col-6 d-flex justify-content-end'>
                      <button className='view-button' >View Details</button>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SpecialOffers;