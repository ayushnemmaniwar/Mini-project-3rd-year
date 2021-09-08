import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  Limitless
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        aria-current="page"
                        to="/images"
                      >
                        All Images
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/myimages">
                        My Images
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/mission">
                        Our Mission
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn-danger btn-small" onClick={(e)=>{
                            auth.signOut()
                        }}>Sign out</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
