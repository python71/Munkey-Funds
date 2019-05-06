import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default LoginForm;