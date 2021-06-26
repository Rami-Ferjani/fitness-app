import React, { useEffect, useState } from "react";
import "../../../css/Workout.css";
import Task from "./Task";
import ReactPlayer from "react-player";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
function Workout(props) {
  const state = useSelector((state) => state);
  const workoutName = state.auth.person.workout;
  const day = "1";
  const c = moment(state.auth.person.startDate).format();
  console.log("c:" + c);
  const month = state.auth.person.startDate;
  console.log("month" + month);
  const days = moment().diff(c);
  console.log(days);
  const [workoutData, setWorkoutData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/workout/${state.auth.person.workoutRef}`)
      .then((res) => {
        setWorkoutData(res.data.payload.daysDB);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const workoutData = state.workout.payload.daysDB;
  currentWorkout = workoutData[day];
  let currentWorkout;
  if (day != "0") {
    currentWorkout = workoutData[2];
  }
  currentWorkout = [
    { name: "Push up", Sets: "10", Reps: "20" },
    { name: "Chin  up", Sets: "10", Reps: "20" },
    { name: "Squats", Sets: "10", Reps: "20" },
  ];
  console.log(`i am the data :${workoutData}`);
  const [paragraph, setParagraph] = useState("");
  const [everything, setEverything] = useState([]);
  // const [currentLink, setcurrentLink] = useState("");
  //setcurrentLink("https://www.youtube.com/watch?v=mGvzVjuY8SY");
  const currentLink = "https://www.youtube.com/watch?v=brhRXlOhsAM";
  if (day == "0") {
    return (
      <div className="scroll">
        {" "}
        <h1>Welcome to day 0</h1>
      </div>
    );
  } else
    return (
      <div className="scroll">
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
