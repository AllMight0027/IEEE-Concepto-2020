import React from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark px-3 py-2">
      <a className="navbar-brand" href="#">
        <img src="./concepto.png" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-lg-flex justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <Link
              activeClass="active"
              className="nav-link"
              to="home"
              href="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link> */}
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link"
              to="speaker"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Speakers
            </Link>
          </li>
          <li className="nav-item" id="event">
            <a className="nav-link" href="/event">
              Events
            </a>
          </li>
          <li className="nav-item passes">
            <a
              className="nav-link"
              href="#get-passes"
            >
              Get your passes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
