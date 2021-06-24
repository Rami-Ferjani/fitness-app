import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "reactstrap";
import "../../../css/ManageWorkout.css";
const ManageWorkouts = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/workout/")
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("working");
  }, [List]);
  const handleClick = (item) => {
    //e.preventDefault;
    const newList = List.filter((workout) => workout._id !== item._id);
    console.log(newList);
    setList(newList);
    axios
      .delete(`/api/workout/${item._id}`)
      .then(() => console.log("succefful"));
  };
  return (
    <div className="scroll">
      <Table>
        <thead>
          <th>#</th>
          <th> Name</th>
          <th>Reference</th>
          <th>Duration</th>
          <th>Remove</th>
        </thead>
        <tbody>
          {List.map((item, i) => (
            <tr>
              <td>{i}</td>
              <td>{item.name}</td>
              <td>{item.Workoutref}</td>
              <td>20</td>
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
