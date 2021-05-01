import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Exercice from "./Exercice";

function CreateWorkout (props)  {
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
        
        
      </FormGroup>
      <smWorkout/>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="text" name="duration" id="duration" placeholder="Duration of the workout"/>
        
      
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleText">Workout description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      

      
      <Exercice/>
      <Button>Submit</Button>
    </Form>
   
   
    </div>
  );
};

export default CreateWorkout;
