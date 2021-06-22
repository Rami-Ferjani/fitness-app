import React, { useEffect, useState } from "react";
import "../../../css/Workout.css";
import Task from "./Task";
import ReactPlayer from "react-player";
import axios from "axios";
import { useSelector } from "react-redux";

function Workout(props) {
  const state = useSelector((state) => state);
  const workoutName = state.auth.person.workout;
  const day = state.auth.person.day;
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
  let currentWorkout;
  if (day != "0") {
    currentWorkout = workoutData[day];
  }
  console.log(`i am the data :${workoutData}`);
  const [paragraph, setParagraph] = useState("");
  const [everything, setEverything] = useState([]);
  const [currentLink, setcurrentLink] = useState("");

  if (day == "0") {
    return (
      <div>
        {" "}
        <h1>Welcome to day 0</h1>
      </div>
    );
  } else
    return (
      <div>
        <h1>Welcom to day {props.day}</h1>
        <div className="second">
          <p className="paragraph">{paragraph}</p>
          <p>( press on workout name to reveal the coresponding video)</p>
          <ul className="work">
            {currentWorkout.map((element) => (
              <li
                className="work1"
                onClick={() => {
                  setcurrentLink(element.Link);
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
