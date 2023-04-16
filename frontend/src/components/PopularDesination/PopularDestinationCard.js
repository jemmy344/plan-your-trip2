import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export const PopularDestinationCard = ({ destination }) => {
    return (
        <Col>
            <Card className="m-3 shadow">
                <Card.Img variant="top" src={destination.image} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title>{destination.id}</Card.Title>
                    <Card.Text>
                        {destination.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}