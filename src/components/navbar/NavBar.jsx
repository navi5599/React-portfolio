import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>
        <a className="logo" href="#">
          Ivan Kelava
        </a>
      </h1>
      <ul className="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">My Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
