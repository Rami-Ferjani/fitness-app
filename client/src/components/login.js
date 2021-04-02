import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../css/login.css";
import { useState } from "react";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import NavBar from './NavBar';
import workoutImage from "../images/workout.svg";

const Login = () => {
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
export default Login;
