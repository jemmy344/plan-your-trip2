import React from 'react';
import { Container } from 'react-bootstrap';
import Mountain from '../../assets/mountain.png';
import Hiking from '../../assets/hiking.png';
import Support from '../../assets/support.png';


const WhyHiking = () => {
  return (
    <Container>
        <div className='p-5'>
        <h1 className='text-center'>Why Hikings?</h1>
        <div className='row pt-3 m-3'>
            <div className='col 4 text-center'>
                <img src={Mountain} alt="Mountain" />
                <h4 className='pt-3'>100+ Mountain</h4>
                <p>We have acess and official permission to climb hundreds of mountains in the world.</p>
            </div>
            <div className='col 4 text-center'>
                <img src={Hiking} alt="Hiking" />
                <h4 className='pt-3'>1000+ Hiking</h4>
                <p>More than 1000 progessional and acateur clibers use our facilities within 1 month.</p>
            </div>
            <div className='col 4 text-center'>
                <img src={Support} alt="Customer" />
                <h4 className='pt-3'>20.000+ Customer</h4>
                <p>In the last 1 year there were 20,000 using our facilities</p>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default WhyHiking