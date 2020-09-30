import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">
        Code-X-Pro
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <Link className="btn btn-outline-success" to="/users/add">Add User</Link>
    </nav>
  );
}
