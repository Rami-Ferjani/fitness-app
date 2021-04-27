import React from "react";
import "../../../css/Workout.css";
import Task from "./Task";
import { Router, Route } from "react-router-dom";
import YoutubePlayer from "reactjs-media";
import ReactPlayer from "react-player";
function Workout(props) {
  const rep1 = { pushUp: "10", chinUp: "50", pullup: "100" };
  let currentLink = "https://youtu.be/UZCO5k1Nu70";
  const ChangeLink = (link) => {
    currentLink = link;
    console.log("new link");
  };
  const all = Object.entries(rep1);
  console.log(all);
  let i = 0;
  return (
    <div>
      <h1 >Welcom to day {props.day}</h1>
      <div className="second">
        <p className="paragraph">{props.paragraph}</p>
    
        <ul>
          {all.map((element) => (
            <li onClick={() => {ChangeLink("https://youtu.be/cij0pxAK9w0")}}>
              {
                <Task
                  exercice={[element[0]]}
                  value={element[1]}
                  
                  onClick={() => {console.log('ramiiiiiiiiiiiii')}}
                />
              }
            </li>
          ))}
        </ul>
        <div className={currentLink}>
        <YoutubePlayer url={currentLink} controls /></div>
      </div>
    </div>
  );
}

export default Workout;
