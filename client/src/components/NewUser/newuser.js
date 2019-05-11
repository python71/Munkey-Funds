import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class NewUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    goal: "",

  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }


  

  render() {
    return (
      <div className="container">
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
        <Link to="/profile">
          <button
            onClick={(event) => this.handleClick(event)}
            >Submit</button>
        </Link>
      </div>
    )
  }
}

export default NewUser;