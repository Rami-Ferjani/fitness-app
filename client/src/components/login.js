/*import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../css/login.css";
import { useState } from "react";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import NavBar from './NavBar';
import workoutImage from "../images/workout.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Login = () => {
   //PropTypes = {
    //isAuthenticated: PropTypes.bool}
  return (
    <div className="login-page" >
      <NavBar />
      
      <div className="login">
        <Form>
          <FormGroup></FormGroup>
          <FormGroup></FormGroup>
          
          <RegisterModal />
          <LoginModal />
          <Logout />
        </Form>
      </div>
    </div>
  );
};

/*const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  //the auth and error  we're getting form the reducer
});

export default connect(mapStateToProps, { })(login);


export default Login;
*/