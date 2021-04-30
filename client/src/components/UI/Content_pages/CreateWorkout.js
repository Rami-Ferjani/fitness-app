import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import smWorkout from "./smWorkout";
import sw from "./sw";
const CreateWorkout = (props) => {
  return (
      <div>
    <Form>
      <FormGroup>
        <Label for="Workout">Workout Name</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
        />
        
        <smWorkout/>
      </FormGroup>
      <smWorkout/>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleText">Workout description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      

      <Button>Submit</Button>
    </Form>
    <smWorkout/>
    <sw/>
    <p>hhhhh</p>
    </div>
  );
};

export default CreateWorkout;
