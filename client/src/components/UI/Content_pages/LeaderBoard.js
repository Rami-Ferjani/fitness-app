import { Table, Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../css/Leaderboard.css";
const Example = (props) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/persons/")
      .then((res) => {
        res.data.sort((a, b) => (a.day > b.day ? -1 : 1));
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("working");
  }, [List]);
  return (
    <div className="scroll">
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Email</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {List.map((item, i) => (
          <tr>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            
            <td>{item.day}</td>
          </tr>
        ))}
      </tbody>
    </Table></div>
  );
};

export default Example;
