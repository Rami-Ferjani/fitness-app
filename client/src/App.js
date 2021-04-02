import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import { Provider} from 'react-redux';
import store from './store';
import { loadUser } from'./actions/authActions';
import LandingPage from './components/LandingPage';
class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <LandingPage/>
       {/* <Login/>*/}
      </div>
      </Provider>
    );
  }
}

export default App;
