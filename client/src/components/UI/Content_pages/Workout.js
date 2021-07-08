import React, { useEffect, useState } from "react";
import "../../../css/Workout.css";
import Task from "./Task";
import ReactPlayer from "react-player";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
function Workout(props) {
  const [workoutReady, setworkoutReady] = useState(false);
  const state = useSelector((state) => state);
  const [currentWorkout, setCurrentWorkout] = useState([
    { name: "Exercice 1", Sets: "10", Reps: "20" },
    { name: "Exercice 2", Sets: "10", Reps: "20" },
    { name: "Exercice 3", Sets: "10", Reps: "20" },
  ]);
  const workoutName = state.auth.person.workout;
  const [workoutLength, setWorkoutLengh] = useState(0);

  console.log(state.auth.person.startingDate);
  const date = new Date(state.auth.person.startingDate);
  let day = moment().diff(date, "days");

  //const days = moment().diff(c);

  const [workoutData, setWorkoutData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/workout/${state.auth.person.workoutref}`)
      .then((res) => {
        setWorkoutData(res.data.daysDB);
        if (day != "0") {
          setCurrentWorkout(res.data.daysDB[day]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(workoutData.length);
  // const workoutData = state.workout.payload.daysDB;
  // let currentWorkout; /*= workoutData[day];*/
  //let currentWorkout;
  /*if (day != "0") {
    currentWorkout = workoutData[2];
  }
  console.log(currentWorkout);
  currentWorkout = [
    { name: "Push up", Sets: "10", Reps: "20" },
    { name: "Chin  up", Sets: "10", Reps: "20" },
    { name: "Squats", Sets: "10", Reps: "20" },
  ];*/
  //console.log(`i am the data :${workoutData}`);
  const [paragraph, setParagraph] = useState("");
  const [everything, setEverything] = useState([]);
  // const [currentLink, setcurrentLink] = useState("");
  //setcurrentLink("https://www.youtube.com/watch?v=mGvzVjuY8SY");
  const currentLink = "https://www.youtube.com/watch?v=brhRXlOhsAM";

  if (state.auth.person.workoutref === null) {
    return (
      <div className="scroll">
        <h3>
          Welcome to PLanet Fitness,Please go and set your program conditions to
          receive a fitness program
        </h3>
      </div>
    );
  } else if (day == "0") {
    return (
      <div className="scroll">
        {" "}
        <h1>Welcome to day 0</h1>
        <h4>Strech a little today, and tomorow we begin</h4>
      </div>
    );
  } else
    return (
      <div className="scroll" key="1">
        <h1>Welcom to day {props.day}</h1>
        <div className="second">
          <p className="paragraph">{paragraph}</p>
          <p>( press on workout name to reveal the coresponding video)</p>
          <ul className="work">
            {currentWorkout.map((element) => (
              <li
                className="work1"
                onClick={() => {
                  //setcurrentLink(element.Link);
                }}
              >
                {
                  <Task
                    exercice={element.name}
                    value={element.Sets}
                    onClick={() => {
                      console.log("ramiiiiiiiiiiiii");
                    }}
                  />
                }
              </li>
            ))}
          </ul>
          <div className={currentLink}>
            <ReactPlayer url={currentLink} controls />
          </div>
        </div>
      </div>
    );
}

export default Workout;
