import React, { Component } from "react";
import Header from './components/header'
import LoginForm from './components/login/login';
import "./components/style.css";
import NewUser from './components/login/newuser';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="form-side">
            <LoginForm />
            <br></br>
            <p>New User</p>
            <NewUser />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
