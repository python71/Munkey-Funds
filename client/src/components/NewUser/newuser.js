import React, { Component } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core/";
import axios from "axios";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Header from "../header";

class NewUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    goal: ""
  };

  handleFormSubmit = event => {
<<<<<<< HEAD
    // API.loadStockQuotes({ symbol: "FB" }).then(res => console.log(res));
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("sign-up-form, username: ");
    console.log(this.state.username);
    let newUser = {
      firstname: this.state.username,
=======
    API.saveUser({
      firstname: this.state.firstname,
>>>>>>> origin/master
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      goal: this.state.goal
    }
    console.log(newUser)
    event.preventDefault();
    
    //request to server here
    API.saveUser(newUser)
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log('Sign up server error: ')
        console.log(error);
      })
  };

  // clickButton = event => {
  //   event.preventDefault();
  //   console.log("button clicked")
  // };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
              name="firstname"
              placeholder="First name"
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <FormControl margin="normal" required>
            <InputLabel>Last Name</InputLabel>
            <Input
              id="Last-name"
              label="Last name"
              type="name"
              name="lastname"
              placeholder="Last name"
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <FormControl margin="normal" required>
            <InputLabel>Email</InputLabel>
            <Input
              id="standard-email-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <FormControl margin="normal" required>
            <InputLabel>Password</InputLabel>
            <Input
              id="standard-password-input"
              label="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <FormControl margin="normal" fullwidth="true">
            <InputLabel>Goal</InputLabel>
            <Input
              id="financial-goal"
              label="Financial Goal"
              type="text"
              name="goal"
              placeholder="Set an investment goal for yourself."
              onChange={this.handleChange}
            />
          </FormControl>
          <br />
          <br />
          <Link to="/profile">
            <button onClick={() => this.handleFormSubmit()}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NewUser;
