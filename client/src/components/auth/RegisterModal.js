import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
class RegisterModal extends Component {
  state = {
    modal: false,
    name: "",
    lastname:"",
    email: "",
    password: "",
    workoutref: null,
    msg: null, //for errors
  };
  static PropTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // if authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }
  toggle = () => {
    //clear erros bch mayg3odch el error
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, workoutref,lastname } = this.state;
    //Create user obect
    const newUser = {
      name,
      lastname,
      email,
      password,
      workoutref,
    };

    //attempt to register
    this.props.register(newUser);
    //close modal
    //this.toggle();
  };
  render() {
    return (
      <div>
        <Button onClick={this.toggle} color="info">
          Sign up
        </Button>{" "}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for="name">Last name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="name"
                  placeholder="name"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for="email">Email</Label>
                <Input
                  type="temail"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  //the auth and error  we're getting form the reducer
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
