import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

// ABOUT, GALLERY, DONATE, ORDER!

function Nav() {

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">MindWisk</h2>
      </Link>
      <div>
        <Link className="navLink" to="/about">
          About
        </Link>

        <Link className="navLink" to="/gallery">
          Gallery
        </Link>

        <Link className="navLink" to="/donate">
          Donate
        </Link>

        <Link className="navLink" to="/order">
          Order
        </Link>
      </div>
    </div>
  );
}

export default Nav;