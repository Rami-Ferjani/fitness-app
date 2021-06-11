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
        <Route exact path="/faq" component={() => "FAQ"} />
        <Route exact path="/contact" component={() => <Profile />} />
        <Route exact path="/Home-1" component={() => "Home-1"} />
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
        <Route exact path="/page-4" component={() => "page-4"} />
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
