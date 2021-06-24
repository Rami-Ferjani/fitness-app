import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";
import { useSelector } from "react-redux";
import "../../../css/Profile.css";
const Profile = (props) => {
  const state = useSelector((state) => state);
  const name = state.auth.person.name;
  const email = state.auth.person.email;
  const handleClick=()=>{
    
  }
  return (
    <div className="scroll">
      <Form onSubmit={handleClick}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                value={name}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Last Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                value={name}
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
                placeholder="with a placeholder"
                value={email}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleSelect">Sexe</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Profile Picture</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Profile;
