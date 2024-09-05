import { Link, NavLink, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Profile">
                Profile
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="btn btn-danger logutButton"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
