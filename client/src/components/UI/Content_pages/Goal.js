import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("button clicked");
};
const Example = (props) => {
  return (
    <Form onClick={handleSubmit}>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Goal
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
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
          <Input type="select" name="select" id="exampleSelect">
            <option>Less than 18 years old</option>
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
          <Input type="select" name="select" id="exampleSelect">
            <option>Male</option>
            <option>Female</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>
          Available Time
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
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
