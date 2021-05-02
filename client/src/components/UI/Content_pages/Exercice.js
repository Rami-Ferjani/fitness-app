import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "../../../css/Exercice.css";
function Exercice() {
  const [saved, setSaved] = useState(false);
  const [Name, setName] = useState("");
  const [Sets, setSets] = useState("");
  const [Reps, setReps] = useState("");
  const [Link, setLink] = useState("");
  if (!saved) {
    return (
      <div>
        <Form>
          <FormGroup className="exercice">
            <Input
              type="text"
              name="name"
              id="exerciceName"
              placeholder="Exercice name"
              value={Name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <Input
              type="text"
              name="sets"
              id="sets"
              placeholder="Sets"
              value={Sets}
              onChange={(event) => {
                setSets(event.target.value);
              }}
            />
            <Input
              type="text"
              name="reps"
              id="reps"
              placeholder="Reps"
              value={Reps}
              onChange={(event) => {
                setReps(event.target.value);
              }}
            />
            <Input
              type="text"
              name="link"
              id="link"
              placeholder="Video Link"
              value={Link}
              onChange={(event) => {
                setLink(event.target.value);
              }}
            />
            <Button color="success" onClick={() => setSaved(true)}>
              Save
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  } else {
    return (
      <div className="exercice">
        <p>{Name}</p>
        <p>{Sets}</p>
        <p>{Reps}</p>
        <p>{Link}</p>
        <Button
          onClick={() => {
            setSaved(false);
          }}
          color="info"
        >
          Edit
        </Button>
      </div>
    );
  }
}

export default Exercice;
