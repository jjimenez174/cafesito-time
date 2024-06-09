import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
      <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
              <img src={assets.cafesitologowords} alt="" />
              <p><b>Enjoy One Cup at a Time</b></p>
          </div>
          <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                 <Link to='/'><li>Home</li> </Link> 
                  <li>About Us</li>
                  <li>Privacy Policy</li>
              </ul>
          </div>
          <div className="footer-content-right">
              <h2>Contact Us</h2>
              <ul>
                  <li>+1-213-456-7890</li>
                  <li>contact@cafesito.com</li>
              </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Cafesito.com </p>
      </div>
    )
  }

export default Footer
