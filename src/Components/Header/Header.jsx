import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Home from "../../Pages/Home/Home";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        {" "}
        <div className="container">
          <img
            className="logo"
            src="data:image/jpeg;base64,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"
            alt=""
          />

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto p-3">
              <li className="nav-item">
                <Link type="button" class="btn button  me-4  ">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="btn button">
                  SignIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Home />
    </div>
  );
}

export default Header;
