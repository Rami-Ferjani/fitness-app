import classNames from "classnames";
import React from "react";
import { Switch,Route } from "react-router";
import { Container } from "reactstrap";
import Topbar from "./Topbar";

import Profile from "./Content_pages/Profile";
import Workout from "./Content_pages/Workout";
function AdminContent({ sidebarIsOpen, toggleSidebar }) {
  const paragraph="I am a Paragraph describing  the workout";
  const day=1;
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
        <Route exact path="/Page-1" component={() => <Workout paragraph={paragraph} day={day}/>} />
        <Route exact path="/Page-2" component={() => "page-2"} />
        <Route exact path="/page-1" component={() => "page-1"} />
        <Route exact path="/page-2" component={() => "page-2"} />
        <Route exact path="/page-3" component={() => "page-3"} />
        <Route exact path="/page-4" component={() => "page-4"} />
      </Switch>
    </Container>
  );
}

export default AdminContent;
