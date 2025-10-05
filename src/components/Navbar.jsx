import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../Logo/CocLogo.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-items"><NavLink to="/">Home</NavLink></li>
        <li className="nav-items"><NavLink to="/features">Features</NavLink></li>
        <li className="nav-items"><NavLink to="/download">Download</NavLink></li>
        <li className="nav-items"><NavLink to="/about">About</NavLink></li>
        <li className="nav-items"><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes style={{ color: '#ffffffff', width: '40px', height: '40px' }} />
        ) : (
          <FaBars style={{ color: '#f8f8f8', width: '40px', height: '40px' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
