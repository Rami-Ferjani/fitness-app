import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../login.css";
import { useState } from "react";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
const Login = () => {
  return (
    <div className="login-page">
      <h1>Welcome to Fitness PLanet 255</h1>
      <div className="login">
        <Form>
          <FormGroup>
            <Label for="exampleEmail"> Email</Label>

            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Write your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <Button color="success">Login</Button> <RegisterModal />
          <LoginModal />
          <Logout />
        </Form>
      </div>
    </div>
  );
};
export default Login;
