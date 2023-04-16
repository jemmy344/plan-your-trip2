import React from 'react';
import './styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer pt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='row'>
              <div>
                <h4>Estate</h4>
                <div className="social-links">
                <button className='footer-buttons' >
                  <a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </a>
                </button>
                <button className='footer-button'>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </a>
                </button> 
                <button className='footer-buttons'>
                  <a
                    href="https://www.linkedin.com/"target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                  </a>
                </button> 
                </div>
              </div>
            </div>
          </div>   
          <div className='col 6'>
            <div className='row'>
                <div className='col 4'>
                <h4>Information</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">Travel</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
                </div>
                <div className='col 4'>
                <h4>Helpful Links</h4>
              <ul>
                <li>
                  <a href="#">Destinations</a>
                </li>
                <li>
                  <a href="#">Supports</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
                </div>
                <div className='col 4'>
                <h4>Information</h4>
              <ul>
                <li>
                <a href="tel:+6221654171">+62 21 654171</a>
                </li>
                <li>
                <a href="mailto:hellobesnike@.com">hellobesnike@.com</a>

                </li>
              </ul>
            </div>
          </div>
        </div>
       </div>
      </div>
    </footer>
  );
}

export default Footer;
