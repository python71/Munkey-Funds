import React, { Component } from "react";
import LoginForm from "./components/login/login";
import "./components/style.css";
import NewUser from "./components/NewUser/newuser";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./pages/Profile/profile";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/newuser" component={NewUser} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    );
  }
}

export default App;
