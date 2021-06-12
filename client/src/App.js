import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/customers";
import "bootstrap/dist/js/bootstrap.bundle.js";
//import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import CreateWorkout from "./components/UI/Content_pages/CreateWorkout";

function App(props) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="">
          {/*<Dashboard/>*/}
          {<LandingPage />}
          {/* <Login/>*/}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
