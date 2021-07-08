import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
function Topbar({ toggleSidebar }) {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
  const state = useSelector((state) => state);
  return (
    <div className="TopBar">
      <Navbar
        color="light"
        light
        className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        expand="md"
      >
        <Button color="info" onClick={toggleSidebar}>
          <BsReverseLayoutTextSidebarReverse />
        </Button>
        <NavbarToggler onClick={toggleTopbar} />
        <Collapse isOpen={topbarIsOpen} navbar>
          <Nav className="mr-auto nav-center" navbar>
            {" "}
            <NavItem>
              <NavLink tag={Link} to={"/Page-1"}>
                Workout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/Program"}>
                Program
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/page-3"}>
                Chat
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/LeaderBoard"}>
                LeaderBOard
              </NavLink>
            </NavItem>
          </Nav>

          <NavbarText>{/*<p>{state.auth.person.name}</p>*/}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;
