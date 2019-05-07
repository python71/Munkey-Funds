import React, { Component } from "react";
import Header from './components/header'
import LoginForm from './components/login/login';
import "./components/style.css";
import NewUser from './components/login/NewUser';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/newuser" component={NewUser} />
        {/* <Route exact path="/profile" component={Profile} /> */}

      </Router>
    );
  }
}

export default App;
