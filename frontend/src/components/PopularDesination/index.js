import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { v4 as uuid } from 'uuid';
import bali from '../../assets/pexels-stijn-dijkstra-2499699.jpg';
import paris from '../../assets/pexels-boris-ulzibat-1981526.jpg';
import newy from '../../assets/pexels-david-skyrius-2129796.jpg';
import sydney from '../../assets/pexels-kate-trifo-3866092.jpg';
import {PopularDestinationCard} from './PopularDestinationCard';
const destination = [
    {
      id: '01',
      image: bali,
      text: 'Bali, Indonesia',
    },
    {
      id: '02',
      image: paris,
      text: 'Paris, France',
    },
    {
      id: '03',
      image: newy,
      text: 'New York City, USA',
    },
    {
      id: '04',
      image: sydney,
      text: 'Sydney, Australia',
    },
  ];

function Populardestinations() {
    return (
        <div className="rentals-container p-3">
            <h2>Popular Desinations</h2>
            <p>From historical cities to natural attractions, stay in the best of the best!</p>
            <Row xs={1} md={2} lg={4} xl={4} className="g-2 pt-5">
                {/* to show 4 cards */}
                {destination.map((destination, index) => (
                    <PopularDestinationCard destination={destination}  key={uuid()} />
                ))}
            </Row>
        </div>
    )
}

export default Populardestinations