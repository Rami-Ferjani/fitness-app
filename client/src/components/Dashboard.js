import React,{useState} from "react";
import { connect, useSelector } from "react-redux";
import SideBar from "./UI/SideBar";
import { Nav, NavItem, NavLink } from 'reactstrap';
import "../css/Dashboard.css";
import Content from "./UI/Content";

export const Dashboard = (props) => {
  const state = useSelector((state) => state);
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
     
    <div className="App wrapper">
         <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen}/>
         <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}/>
     
      
    </div>
    
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
