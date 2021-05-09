import React, { useState } from "react";
import { Button } from "reactstrap";
import Exercice from "./Exercice";
import { useDispatch } from "react-redux";
import { ADD_DAY } from "../../../actions/types";
const Day = (props) => {
  const [day, setDay] = useState(props.day);
  const [NumEx, setNumEx] = useState(0);
  const [Edit, setEdit] = useState(false);
  const [ExercicesDB, setExercicesDB] = useState([]);
  const dispatch = useDispatch();
  const AddExercice = (Name, Sets, Reps, Link) => {
    TempEx = {
      name: `${Name}`,
      Reps: `${Reps}`,
      Sets: `${Sets}`,
      Link: `${Link}`,
    };

    let obj = ExercicesDB;
    obj.push(TempEx);
    setExercicesDB(obj);
  };
  let TempEx = {};
  let Exercices = [];
  for (let i = 0; i < NumEx; i++) {
    Exercices[i] = i + 1;
  }
  let buttons = <div></div>;
  let payload = { day: ExercicesDB };
  const handleClick = () => {
    setEdit(true);
    props.AddDay(day, ExercicesDB);
  };
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
        <Button color="info" onClick={() => handleClick()}>
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
      {Exercices.map((exercice, i) => {
        return <Exercice AddExercice={AddExercice} key={i} />;
      })}
      {buttons}
    </div>
  );
};

export default Day;
