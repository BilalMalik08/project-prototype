import "./navbar.css";
import travelLogo from "../../Img/travelLogo.png";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <div className={`row navbar-row1 `}>
        <nav className={`navbar navbar-expand-lg`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <img className="logo" src={travelLogo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link !active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reviews">
                    Reviews
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <button className="btn btn-navy me-2" type="button">
                  Sign Up
                </button>
                <button className="btn btn-light" type="button">
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
