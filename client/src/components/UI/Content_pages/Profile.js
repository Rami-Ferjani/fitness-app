import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  Alert,
} from "reactstrap";
import { useSelector } from "react-redux";
import "../../../css/Profile.css";
import axios from "axios";
const Profile = (props) => {
  const state = useSelector((state) => state);
  const person = state.auth.person;
  const name = state.auth.person.name;
  const email = state.auth.person.email;
  const [Name, setName] = useState(name);
  const [lastName, setLastName] = useState(person.lastName);
  const [Email, setEmail] = useState(person.email);
  const [Sexe, setSexe] = useState(person.sexe);
  const [Weight, setWeight] = useState(person.weight);
  const [description, setDescription] = useState(person.description);
  const [ImgLink, setImgLink] = useState(person.imgLink);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      name: `${Name}`,
      lastName: `${lastName}`,
      sexe: `${Sexe}`,
      email: `${Email}`,
      weight: `${Weight}`,
      description: `${description}`,
      imgLink: `${ImgLink}`,
    });
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    axios
      .put(`/api/persons/${person._id}`, body, config)
      .then((res) => {
        console.log(res.data);
        setSuccessMsg("Your Profile was updated");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("something went wrong ,please try again Later");
      });
  };
  return (
    <div className="scroll">
      {ErrorMsg ? <Alert color="danger">{ErrorMsg}</Alert> : null}
      {SuccessMsg ? <Alert color="success">{SuccessMsg}</Alert> : null}
      <Form onSubmit={handleClick}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="Text"
                name="Name"
                id="exampleEmail"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Last Name</Label>
              <Input
                type="Text"
                name="LastName"
                id="exampleEmail"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Weight</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Weight"
                onChange={(event) => setWeight(event.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleSelect">Sexe</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(event) => setSexe(event.target.value)}
          >
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Profile Image Link</Label>
          <Input
            type="Text"
            name="ImgLink"
            id="exampleSelect"
            onChange={(event) => setImgLink(event.target.value)}
          ></Input>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleFile">Profile Picture</Label>
          <Input type="file" name="file" id="exampleFile" />
       </FormGroup>*/}

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Profile;
