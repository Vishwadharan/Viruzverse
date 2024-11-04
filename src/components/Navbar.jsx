import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Viruzverse</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={isOpen ? 'show' : ''}>
        <li>
          <RouterLink to="/#home" onClick={closeMenu}>Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/#about" onClick={closeMenu}>About</RouterLink>
        </li>
        <li>
          <RouterLink to="/#industryfocus" onClick={closeMenu}>Industry Focus</RouterLink>
        </li>
        <li>
          <RouterLink to="/#programme" onClick={closeMenu}>Programme</RouterLink>
        </li>
        <li>
          <RouterLink to="/#services" onClick={closeMenu}>Careers</RouterLink>
        </li>
        {/* <li>
          <RouterLink to="/#careers" onClick={closeMenu}>Careers</RouterLink>
        </li> */}
        <li>
          <a
            href="https://forms.gle/iuWEEL51DGoTMzHy8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
