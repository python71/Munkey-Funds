import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

class NewUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    goal: "",

  };

  render() {
    return (
      <div>
        <form className="newuser-form">
          <TextField
            id="standard-name"
            label="Name"
            type="name"
            placeholder="name"
            value={this.state.name}
          />
          <br></br>
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
          <br></br>
          <TextField
            id="financial-goal"
            label="Financial Goal"
            type="text"
            placeholder="Set an investment goal for yourself."
          />
        </form>
      </div>
    )
  }
}

export default NewUser;