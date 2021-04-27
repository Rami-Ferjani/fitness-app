import React from "react";

function Task(props) {
    
  return (
    <div>
      <p>
        {" "}
        {props.exercice} : {props.value}
      </p>
    </div>
  );
}

export default Task;
