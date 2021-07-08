import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
//import {Link} from "react-router-dom";
import "../../css/SideBar.css";
import Logout from "../auth/Logout";
import { BsBrightnessHighFill } from "react-icons/bs";
const SideBar = ({ isOpen, toggle }) => {
  const state = useSelector((state) => state);
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
            <img
              className="profile_image"
              src={
                state.auth.person.imgLink
                  ? state.auth.person.imgLink
                  : "https://www.web2present.com/wp-content/uploads/2017/02/no-avatar-350x350.jpg"
              }
            ></img>
          </NavItem>
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
              Leaderboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/contact"}>
              Profile
            </NavLink>
          </NavItem>
          <NavItem classname="red">
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

export default SideBar;
