import React from "react";
import { Button,Input,Form,FormGroup } from "reactstrap";

function smWorkout() {
  return (
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="name"
          id="exerciceName"
          placeholder="Exercice name"
        />
         <Input
          type="text"
          name="sets"
          id="sets"
          placeholder="Sets"
        />
         <Input
          type="text"
          name="reps"
          id="reps"
          placeholder="Reps"
        />
        <Button color="primary">Add</Button>
      </FormGroup>
      </Form>
   
  );
}

export default smWorkout;
