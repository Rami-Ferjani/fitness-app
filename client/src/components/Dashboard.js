import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import SideBar from "./UI/SideBar";
import AdminSideBar from "./UI/AdminSideBar";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../css/Dashboard.css";
import Content from "./UI/Content";

export const Dashboard = (props) => {
  const state = useSelector((state) => state);
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  let state1 = useSelector((st) => st);
  let auth = state.auth.isAuthenticated;
  let admin;
  if (auth) admin = state1.auth.person.admin;
  if (1) {
    return (
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    );
  } else {
    return (
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
