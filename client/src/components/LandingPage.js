import React from "react";
import logo from "../images/logo.png";
import "../css/landingPage.css";
import toggleIcon from "../images/menu.png";
import mainBanner from "../images/mainbenner.png";
import fit from "../images/workout.svg";
import RegisterModal from "./auth/RegisterModal";
//import "../css/bootstrap.min.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
//import {store} from "../store";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import store from "../store";
import isAuth from "../reducers/authReducer";
import Dashboard from "./Dashboard";
/*LandingPage.prototype = {
  isAuthenticated: PropTypes.bool,
};*/

function LandingPage(props) {
  
  let auth = useSelector((state) => state.auth.isAuthenticated);
  let h2 = "";
  //const auth = useSelector(state=>state.isAuthenticated);
  
  console.log(useSelector((state) => state));
  
  if (auth) {
    return <Dashboard />;
  } else {
    return (
      <div className="Landing">
        <div className="container">
          <div className="head my-3">
            <nav className="navbar navbar-expand-lg navbar-light head__custom-nav">
              <a href="" className="navbar-brand d-flex align-items-center">
                <img src={logo} alt="website logo"></img>
                <h1></h1>
                <span> Planet Fitness </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
              >
                <span>
                  <img
                    src={toggleIcon}
                    className="menu"
                    alt="toggle icon"
                  ></img>
                </span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a class="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" class="nav-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a class="nav-link" href="#">
                      work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a class="nav-link" href="#">
                      info
                    </a>
                  </li>
                  <li className="nav-item">
                    <LoginModal />
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
              <RegisterModal />
            </div>
            <div className="col-12 col-lg-8">
              <img src={fit} alt="fitness planet banner"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*const mapStateToProps = (state) => {
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  //the auth and error  we're getting form the reducer
};

export default connect(mapStateToProps)(LandingPage);*/
export default LandingPage;
