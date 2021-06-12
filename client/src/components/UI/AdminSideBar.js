import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
//import {Link} from "react-router-dom";
import "../../css/SideBar.css";
import Logout from "../auth/Logout";
import { BsBrightnessHighFill } from "react-icons/bs";
const AdminSideBar = ({ isOpen, toggle }) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <h3>Planet Fitness</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to={"/createWorkout"}>
              Create workout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/manageWorkout"}>
              Manage workout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"ManageUsers"}>
              Manage Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/contact"}>
              Profile
            </NavLink>
          </NavItem>
          <NavItem className="red">
            <NavLink tag={Link} to={"logout"}>
              <Logout />
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      <hr />
    </div>
  );
};

export default AdminSideBar;
