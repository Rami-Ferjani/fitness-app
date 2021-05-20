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
  const workoutData = state.workout.payload.daysDB;
  const currentWorkout = workoutData[day];
  console.log(`i am the data :${workoutData}`);
  const [paragraph, setParagraph] = useState("");
  const [everything, setEverything] = useState([]);
  /*useEffect(() => {
    axios.get(`/api/workout/${workoutName}`).then((res) => {
      workoutData = res.data;
      setParagraph(workoutData.Description);
      setEverything(workoutData.daysDB);

      console.log(workoutData);
    });
  });*/
  const rep1 = {
    pushUp: "10X5",
    chinUp: "50",
    pullup: "100",
    diamon: "50",
    flower: "100",
  };
  const all = Object.entries(rep1);
  const [currentLink, setcurrentLink] = useState(
    "https://youtu.be/cij0pxAK9w0"
  );

  let i = 0;
  let links = [
    "https://www.youtube.com/watch?v=IODxDxX7oi4",
    "https://www.youtube.com/watch?v=dYDJpuDiJGc",
    "https://www.youtube.com/watch?v=eGo4IYlbE5g",
  ];
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
