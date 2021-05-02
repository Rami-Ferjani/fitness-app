import React, { useState } from "react";
import { Button } from "reactstrap";
import Exercice from "./Exercice";
const Day = (props) => {
  const [day, setDay] = useState(props.day);
  const [NumEx, setNumEx] = useState(0);

  let Exercices = [];

  for (let i = 0; i < NumEx; i++) {
    Exercices[i] = i + 1;
  }
  return (
    <div>
      <p> day {day}</p>
      <p>{NumEx}</p>
      {Exercices.map((exercice) => {
        return <Exercice />;
      })}
      <Button
        size="sm"
        onClick={() => {
          setNumEx(NumEx + 1);
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Day;
