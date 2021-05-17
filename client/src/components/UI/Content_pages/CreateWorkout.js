import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Day from "./Day";
import { createWorkout } from "../../../actions/workoutActions";
import { useDispatch } from "react-redux";
import { CREATE_WORKOUT } from "../../../actions/types";
import axios from "axios";
function CreateWorkout(props) {
  const [duration, setDuration] = useState("");
  const [phase, setPhase] = useState(1);
  const [WorkoutName, setWorkoutName] = useState("");
  const [Description, setDescription] = useState("");
  const [workout, setWorkout] = useState({});
  const [daysDB, setDaysDB] = useState([]);
  const dispatch = useDispatch();

  const AddDay = (day, ExercicesDB) => {
    let obj = daysDB;
    obj[day] = ExercicesDB;
    setDaysDB(obj);
    console.log(day, ExercicesDB);
    console.log(daysDB);
  };
  const submit = () => {
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const body=JSON.stringify({WorkoutName,Description})
    axios.post("/api/workout")
    /*setWorkout({ name: WorkoutName });
    createWorkout(workout);*/
  };
  let numOfDays = parseInt(duration);

  let days = [];
  for (let i = 0; i < numOfDays; i++) {
    days[i] = i + 1;
  }
  function renderDays(day){
    return Object.entries(day).map(([key,value],i)=>{
      return (
        <div key={key}></div>
      )
    })
  }

  useEffect(() => {});

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
                setDescription(event.target.value);
              }}
              value={Description}
            />
          </FormGroup>
        </Form>
        <div>
          {days.map((day) => {
            return (
              <Day day={day} key={day} AddDay={AddDay} value={daysDB[day]} />
            );
          })}
          {/*<Button onClick={() => setPhase(2)}>Next</Button>*/}
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
        {daysDB.map((day, i) => {
          return <p>{day}</p>;
        })}
        <Button onClick={() => setPhase(1)}>Back</Button>
        <Button color="success">Submit</Button>
      </div>
    );
  }*/
}

export default CreateWorkout;
