import React, { useState } from "react";
import { Button } from "reactstrap";
import Exercice from "./Exercice";
const Day = (props) => {
  const [day, setDay] = useState(props.day);
  const [NumEx, setNumEx] = useState(0);
  const [Edit, setEdit] = useState(false);
  const [Exercices, setExercices] = useState([]);
  let TempEx = {};
  const AddExercice = (Name, Sets, Reps, Link) => {
    console.log('im running');
    TempEx = {
      name: `${Name}`,
      Reps: `${Reps}`,
      Sets: `${Sets}`,
      Link: `${Link}`,
    };
    
    let obj = Exercices;
    obj.push(TempEx);
    setExercices(obj);
    console.log(Exercices);
  };

  for (let i = 0; i < NumEx; i++) {
    Exercices[i] = i + 1;
  }
  let buttons = <div></div>;
  if (!Edit) {
    buttons = (
      <div>
        <Button
          size="sm"
          onClick={() => {
            setNumEx(NumEx + 1);
          }}
        >
          Add
        </Button>
        <Button color="info" onClick={() => setEdit(true)}>
          Save
        </Button>
      </div>
    );
  } else {
    buttons = <Button onClick={() => setEdit(false)}>Edit</Button>;
  }
  return (
    <div>
      <p> day {day}</p>
      <p>{NumEx}</p>
      {Exercices.map((exercice,i) => {
        return <Exercice AddExercice={AddExercice} key={i} />;
      })}
      {buttons}
    </div>
  );
};

export default Day;
