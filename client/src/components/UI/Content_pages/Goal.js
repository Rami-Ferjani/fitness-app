import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Example = (props) => {
  const [Goal, setGoal] = useState("");
  const [Age, setAge] = useState("");
  const [Sexe, setSexe] = useState("");
  const [Time, setTime] = useState("");
  const [Place, setPlace] = useState("");
  const person = useSelector((state) => state.auth.person);
  const handleSubmit = (e) => {
    e.preventDefault();
    let g, a, s, t, p;
    if (Goal === "Build Muscle") g = 1;
    else g = 2;
    if (Age === "Less than 18 years old") a = 10;
    else if (Age === "Between 18 and 30 years old") a = 20;
    else if (Age === "Older than 30 years old") a = 30;

    if (Sexe === "Male") s = 100;
    else s = 200;
    if (Place === "Gym") p = 1000;
    else if (Place === "Home workout") p = 2000;

    if (Time === "Less than 3 hours per week") t = 10000;
    else if (Time === "between 3 and 6 hours per week") t = 20000;
    else if (Time === "More than 6 hours per week") t = 30000;
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
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form onSubmit={handleSubmit}>
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
        <Button color="dark" style={{ marginTop: "2rem" }} block>
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

export default Example;
