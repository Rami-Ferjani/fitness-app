import classNames from "classnames";
import React from "react";
import { Switch, Route } from "react-router";
import { Container } from "reactstrap";
import Topbar from "./Topbar";
import SideBar from "./SideBar";
import Profile from "./Content_pages/Profile";
import Workout from "./Content_pages/Workout";
import CreateWorkout from "./Content_pages/CreateWorkout";
import Messenger from "./Content_pages/Messenger";
import Goal from "./Content_pages/Goal";
import ManageWorkouts from "./Content_pages/ManageWorkouts";
import ManageUsers from "./Content_pages/ManageUsers";
import LeaderBoard from "./Content_pages/LeaderBoard";
import "../../css/content.css";
function Content({ sidebarIsOpen, toggleSidebar }) {
  const paragraph = "I am a Paragraph describing  the workout";
  const day = 1;
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} />
      <Switch>
        <Route exact path="/" component={() => "Hello"} />
        <Route exact path="/about" component={() => "About"} />

        <Route exact path="/Logout" component={() => "Pages"} />
        <Route
          exact
          path="/manageWorkout"
          component={() => <ManageWorkouts />}
        />
        <Route exact path="/contact" component={() => <Profile />} />
        <Route exact path="/ManageUsers" component={() => <ManageUsers />} />
        <Route exact path="/" component={() => "Home-2"} />
        <Route exact path="/Home-3" component={() => "Home-3"} />
        <Route
          exact
          path="/Page-1"
          component={() => <Workout paragraph={paragraph} day={day} />}
        />
        <Route exact path="/Program" component={() => <Goal />} />
        <Route exact path="/page-1" component={() => "page-1"} />
        <Route exact path="/page-2" component={() => <Goal />} />
        <Route exact path="/page-3" component={() => <Messenger />} />
        <Route exact path="/LeaderBoard" component={() => <LeaderBoard />} />
        {/* Admin Router}*/}
        <Route
          exact
          path="/createWorkout"
          component={() => <CreateWorkout />}
        />
      </Switch>
    </Container>
  );
}

export default Content;
