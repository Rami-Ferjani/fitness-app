import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../login.css'
const SignUp=()=>{
    return(
        <div className="login-page">
          <h1> Welcome to Fitness PLanet</h1>
        <div className="login">
          
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Write your email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password"  />
      </FormGroup>
      <Button color="success">Login</Button>{' '}
      <Button color="info">Sign up</Button>{' '}
      </Form>
      </div>
      </div>
    )
}
export default Login;