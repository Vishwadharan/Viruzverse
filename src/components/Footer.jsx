import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Icons for email and phone
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Join Us! Equip your students with the skills they need for the future. Contact us today to learn more about our programs!</p>
      <div className="footer-contact">
        <p>
          <FaEnvelope />{' '}
          <a href="mailto:contact.viruzverse@proton.me">contact.viruzverse@proton.me</a>
        </p>
        <p>
          <FaPhone />{' '}
          <a href="tel:+917418676100">+91 74186 76100</a>
        </p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Viruzverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
