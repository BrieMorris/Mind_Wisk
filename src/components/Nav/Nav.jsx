import React from "react";
import { Link } from "react-router-dom";
import navbackground from "./navbackground.png";
import logo from "./MindWisk Brand Board (5).png";
import "./Nav.css";
import wisk from "./wisk.png";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <Link to="/home">
          <h2 className="nav-title">
            MindWisk
            <img className="wisk" src={wisk} />
            {/* <img className="logo" src={logo} alt="Logo" /> */}
          </h2>
        </Link>
        <div className="nav-links">
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
    </div>
  );
}

export default Nav;
