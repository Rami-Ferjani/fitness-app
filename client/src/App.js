import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/customers";
import "bootstrap/dist/js/bootstrap.bundle.js";
//import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import { Provider,useSelector } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
      <Provider store={store}>
        <div className="">
          {/*<Dashboard/>*/}
          <LandingPage />
          {/* <Login/>*/}
        </div>
      </Provider>
      </Router>
    );
  }
}

export default App;
