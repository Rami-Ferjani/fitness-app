import React from "react";
import logo from "../images/logo.png";
import "../css/landingPage.css";
import toggleIcon from "../images/menu.png";
import mainBanner from "../images/mainbenner.png";
import fit from "../images/workout.svg";

//import "../css/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
function LandingPage() {
  return (
    <div>
      <div className="container">
        <div className="head my-3">
          <nav className="navbar navbar-expand-lg navbar-light head__custom-nav">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="website logo"></img>
              <span> Planet Fitness</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span>
                <img src={toggleIcon} className="menu" alt="toggle icon"></img>
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" class="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" class="nav-link" href="#">
                    work
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" class="nav-link" href="#">
                    info
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-primary" href="#">
                    contact us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row customs-section d-flex align-items-center">
          <div className="col-12 col-lg-4">
            <h2>Team work</h2>
            <h3> Process</h3>
            <p> You set the goal, we take care of the rest</p>
            <a href="#">Learn more</a>
          </div>
          <div className="col-12 col-lg-8">
            <img src={fit} alt="fitness planet banner"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
