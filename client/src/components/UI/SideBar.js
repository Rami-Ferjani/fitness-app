import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
//import {Link} from "react-router-dom";
import "../../css/SideBar.css";
import Logout from "../auth/Logout";
const SideBar = ({ isOpen, toggle }) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <h3>Bootstrap Sidebar</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p>Dummy Heading</p>
          <NavItem>
            <NavLink tag={Link} to={"/about"}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"faq"}>
              FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/contact"}>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Logout/>
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      <hr />
    </div>
  );
};

export default SideBar;
