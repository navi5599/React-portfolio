import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './navbar.css';

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const handleList = () => {
    setIsActive((current) => !current);
  };

  return (
    <nav className="navbar">
      <h1>
        <Link className="logo" to="h0me" smooth={true} duration={1000}>
          Ivan Kelava
        </Link>
      </h1>
      <a href="#" class="toggle-button" onClick={handleList}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>

      <div class={`navbar-links ${isActive ? 'active' : ''}`}>
        <ul className="list">
          <li>
            <Link to="h0me" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="white" smooth={true} duration={1000}>
              About me
            </Link>
          </li>
          <li>
            <Link to="w0rk" smooth={true} duration={1000}>
              My Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
