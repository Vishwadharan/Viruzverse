// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Viruzverse</div>
//       <div className="menu-toggle" onClick={toggleMenu}>
//         &#9776;
//       </div>
//       <ul className={isOpen ? 'show' : ''}>
//       <li>
//     <a href="#home" onClick={closeMenu}>Home</a>
//   </li>
//   <li>
//     <a href="#about" onClick={closeMenu}>About</a>
//   </li>
//   <li>
//     <a href="#industryfocus" onClick={closeMenu}>Industry Focus</a>
//   </li>
//   <li>
//     <a href="#programme" onClick={closeMenu}>Programme</a>
//   </li>
//   <li>
//     <a href="#services" onClick={closeMenu}>Careers</a>
//   </li>
//         {/* <li>
//           <RouterLink to="/#careers" onClick={closeMenu}>Careers</RouterLink>
//         </li> */}
//         <li>
//           <a
//             href="https://forms.gle/iuWEEL51DGoTMzHy8"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={closeMenu}
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
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
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#industryfocus" onClick={closeMenu}>Industry Focus</a></li>
        <li><a href="#programme" onClick={closeMenu}>Programme</a></li>
        <li><a href="#services" onClick={closeMenu}>Careers</a></li>
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
