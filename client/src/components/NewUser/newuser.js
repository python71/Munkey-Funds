import React, { Component } from "react";
import { FormControl, InputLabel, Input } from '@material-ui/core/';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Header from '../header'

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
      <div>
        <Header />
        <div className="container">
          <FormControl margin="normal" required>
            <InputLabel>First Name</InputLabel>
            <Input
              id="first-name"
              label="First name"
              type="name"
              placeholder="First name"
            />
          </FormControl>
          <br></br>
          <FormControl margin="normal" required>
            <InputLabel>Last Name</InputLabel>
            <Input
              id="Last-name"
              label="Last name"
              type="name"
              placeholder="Last name"
            />
          </FormControl>
          <br></br>
          <FormControl margin="normal" required>
            <InputLabel>Email</InputLabel>
            <Input
              id="standard-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
            />
          </FormControl>
          <br></br>
          <FormControl margin="normal" required>
            <InputLabel>Password</InputLabel>
            <Input
              id="standard-password-input"
              label="Password"
              type="password"
            />
          </FormControl>
          <br></br>
          <FormControl margin="normal" fullwidth="true">
            <InputLabel>Goal</InputLabel>
            <Input
              id="financial-goal"
              label="Financial Goal"
              type="text"
              placeholder="Set an investment goal for yourself."
            />
          </FormControl>
          <br></br><br></br>
          <Link to="/api/signup">

            <button
              onClick={() => this.handleFormSubmit()}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NewUser;