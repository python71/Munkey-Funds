import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import API from '../utils/API';

class NewUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    goal: "",
  };


  handleFormSubmit = (newUser) => {
    API.saveUser({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      goal: this.state.goal
    })
      .then(res => console.log(res.data))
      // console.log("new user:" + newUser))
      .catch(err => console.log(err));
  };

  // clickButton = event => {
  //   event.preventDefault();
  //   console.log("button clicked")
  // };

  render() {
    return (
      <div className="container">
        <form className="newuser-form">
          <TextField
            id="first-name"
            label="First name"
            type="name"
            placeholder="First name"
          />
          <TextField
            id="Last-name"
            label="Last name"
            type="name"
            placeholder="Last name"
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
        <Link to="/api/signup"><button type="button" onClick={this.handleFormSubmit}>Create</button></Link>
      </div>
    );
  }
}

export default NewUser;