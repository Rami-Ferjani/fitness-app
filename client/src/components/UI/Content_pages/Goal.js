import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";
import { LOGIN_SUCCESS } from "../../../actions/types";
const Example = (props) => {
  const [Goal, setGoal] = useState("");
  const [Age, setAge] = useState("");
  const [Sexe, setSexe] = useState("");
  const [Time, setTime] = useState("");
  const [Place, setPlace] = useState("");
  const person = useSelector((state) => state.auth.person);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let g, a, s, t, p;
    if (Goal === "Build Muscle") g = 10000;
    else g = 20000;
    if (Age === "Less than 18 years old") a = 1;
    else if (Age === "Between 18 and 30 years old") a = 2;
    else if (Age === "Older than 30 years old") a = 3;

    if (Sexe === "Male") s = 1000;
    else s = 2000;
    if (Place === "Gym") p = 100;
    else if (Place === "Home workout") p = 200;

    if (Time === "Less than 3 hours per week") t = 10;
    else if (Time === "between 3 and 6 hours per week") t = 20;
    else if (Time === "More than 6 hours per week") t = 30;
    const ref = g + a + s + t + p;
    const body = JSON.stringify({ workoutref: `${ref}` });
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    axios
      .put(`/api/persons/${person.id}`, body, config)
      .then((res) => {
        console.log(res.data);
        setSuccessMsg("Your program was updated");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("something went wrong ,please try againt");
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      {ErrorMsg ? <Alert color="danger">{ErrorMsg}</Alert> : null}
      {SuccessMsg ? <Alert color="success">{SuccessMsg}</Alert> : null}
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Goal
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(event) => setGoal(event.target.value)}
          >
            <option></option>
            <option>Build Muscle</option>
            <option>Lose Weight</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Sexe
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(event) => setSexe(event.target.value)}
          >
            <option></option> <option>Male</option>
            <option>Female</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Gym or home workout
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(event) => setPlace(event.target.value)}
          >
            <option></option>
            <option>Gym</option>
            <option>Home workout</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>
          Available Time
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(event) => setTime(event.target.value)}
          >
            <option></option>
            <option>Less than 3 hours per week</option>
            <option>between 3 and 6 hours per week</option>
            <option>More than 6 hours per week</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Age
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(event) => setAge(event.target.value)}
          >
            <option></option> <option>Less than 18 years old</option>
            <option>Between 18 and 30 years old</option>
            <option>Older than 30 years old</option>
          </Input>
        </Col>
        <Button color="dark" style={{ marginTop: "2rem" }} block>
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

export default Example;
