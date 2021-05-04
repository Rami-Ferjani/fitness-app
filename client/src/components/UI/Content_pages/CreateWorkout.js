import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Exercice from "./Exercice";
import Day from "./Day";
import { createWorkout } from "../../../actions/workoutActions";
import { useDispatch } from 'react-redux';
import { CREATE_WORKOUT } from "../../../actions/types";
function CreateWorkout(props) {
  const [duration, setDuration] = useState("");
  const [phase, setPhase] = useState(1);
  const [WorkoutName, setWorkoutName] = useState("");
  const [Paragraph, setParagraph] = useState("");
  const [workout, setWorkout] = useState({});
  const dispatch=useDispatch();
  const submit = () => {
    dispatch({
      type:CREATE_WORKOUT,
    })
    /*setWorkout({ name: WorkoutName });
    createWorkout(workout);*/
  };
  let numOfDays = parseInt(duration);
  console.log(numOfDays);
  let days = [];
  for (let i = 0; i < numOfDays; i++) {
    days[i] = i + 1;
  }
  console.log(days);
  useEffect(() => {
    console.log("im running");
  });

  if (phase == 1) {
    return (
      <div>
        <h3>Phase 1</h3>
        <Form>
          <FormGroup>
            <Label for="Workout">Workout Name</Label>
            <Input
              type="text"
              name="text"
              id="name"
              onChange={(event) => {
                setWorkoutName(event.target.value);
              }}
              value={WorkoutName}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Duration</Label>
            <Input
              type="text"
              name="duration"
              id="duration"
              onChange={(event) => setDuration(event.target.value)}
              value={duration}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Workout description</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              onChange={(event) => {
                setParagraph(event.target.value);
              }}
              value={Paragraph}
            />
          </FormGroup>
        </Form>
        <div>
          {days.map((day) => {
            return <Day day={day} key={day} />;
          })}

          <Button
            color="success"
            onClick={() => {
              submit();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  } /*else if (phase == 2) {
    return (
      <div>
        <h3>Phase 2</h3>
        {days.map((day) => {
          return <Day day={day} key={day} />;
        })}
        <Button onClick={() => setPhase(1)}>Back</Button>
        <Button color="success">Submit</Button>
      </div>
    );
  }*/
}

export default CreateWorkout;
