// src/Footer.js
import React from 'react';
import '../resources/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="contain1">
    <div className="footer-info">
    <h4>About Us</h4>
    <p>We are a created web app to providing the services for tracking the expenses.</p>
    </div>
    <div className="footer-nav">
        <h4>Navigation</h4>
          <ul>
          <li><a href="#con_1">Home</a></li>
          <li><a href="#ser">About</a></li>
            <li><a href="#cont">Contact</a></li>
            </ul>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
