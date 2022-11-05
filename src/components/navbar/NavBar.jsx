import React from 'react';
import { Link } from 'react-scroll';

import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>
        <Link className="logo" to="h0me" smooth={true} duration={1000}>
          Ivan Kelava
        </Link>
      </h1>
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
    </nav>
  );
}

export default NavBar;
