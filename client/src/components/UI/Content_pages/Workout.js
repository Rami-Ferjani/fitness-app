import React, { useState } from "react";
import "../../../css/Workout.css";
import Task from "./Task";


import ReactPlayer from "react-player";

function Workout(props) {
  const rep1 = { pushUp: "10", chinUp: "50", pullup: "100" };

  const [currentLink, setcurrentLink] = useState(
    "https://youtu.be/cij0pxAK9w0"
  );

  const all = Object.entries(rep1);
  console.log(all);
  let i = 0;
 let links=["https://www.youtube.com/watch?v=IODxDxX7oi4","https://www.youtube.com/watch?v=dYDJpuDiJGc","https://www.youtube.com/watch?v=eGo4IYlbE5g"]
  return (
    <div>
      <h1>Welcom to day {props.day}</h1>
      <div className="second">
        <p className="paragraph">{props.paragraph}</p>
        <p>( press on workout name to reveal the coresponding video)</p>
        <ul className="work">
          {all.map((element,i) => (
            <li className="work1"
              onClick={() => {
                setcurrentLink(links[i]);
              }}
            >
              {
                <Task
                  exercice={[element[0]]}
                  value={element[1]}
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
