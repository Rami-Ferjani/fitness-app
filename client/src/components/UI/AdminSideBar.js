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
        <h3>
          Planet <span>Fitness</span>
        </h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3 listed">
          <NavItem>
            <img
              className="profile_image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSMct6mmbHLDy0gyDyBjMBkVVRYWs4KZ8-A&usqp=CAU"
            ></img>
          </NavItem>
          <NavItem style={{ textDecoration: "none" }}>
            <NavLink
              tag={Link}
              to={"/createWorkout"}
              className="white"
              style={{ textDecoration: "none" }}
            >
              Create workout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to={"/manageWorkout"}
              className="white"
              style={{ textDecoration: "none" }}
            >
              Manage workout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to={"ManageUsers"}
              className="white"
              style={{ textDecoration: "none" }}
            >
              Manage Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/contact"} className="white">
              Profile
            </NavLink>
          </NavItem>
          <NavItem className="red white">
            <NavLink tag={Link} to={"logout"} className="white">
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
