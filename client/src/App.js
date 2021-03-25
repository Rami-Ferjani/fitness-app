import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import { Provider} from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        
        <Login/>
      </div>
      </Provider>
    );
  }
}

export default App;
