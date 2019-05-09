import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <div className="container">
        <form className="login-form">
          <TextField
            id="standard-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <br></br>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
          />
        </form>
        <Link to="/profile"><button>New User</button></Link>
        <Link to="/newuser"><button>New User</button></Link>
      </div>
    )
  }
}

export default LoginForm;