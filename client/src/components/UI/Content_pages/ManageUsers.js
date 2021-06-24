import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "reactstrap";
import "../../../css/ManageWorkout.css";
const ManageWorkouts = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/persons/")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("working");
  }, [List]);
  const handleClick = (item) => {
    const newList = List.filter((workout) => workout._id !== item._id);

    setList(newList);
    axios
      .delete(`/api/persons/${item._id}`)
      .then(() => console.log("succefful"));
  };
  return (
    <div className="scroll">
      <Table>
        <thead>
          <th>#</th>
          <th> Name</th>
          <th>Email</th>
          <th>Workout Reference</th>
          <th>Day</th>
        </thead>
        <tbody>
          {List.map((item, i) => (
            <tr>
              <td>{i}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.Workoutref}</td>
              <td>{item.day}</td>
              <td>
                <Button color="danger" onClick={() => handleClick(item)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageWorkouts;
