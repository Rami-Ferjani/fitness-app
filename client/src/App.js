import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Login/>
      </div>
    );
  }
}

export default App;
