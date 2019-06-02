import React, { Component } from "react";
import { FormControl, InputLabel, Input, Form } from "@material-ui/core/";
import { Link } from "react-router-dom";
import API from "../utils/API";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import "../style.css";
import "./NewUser.css";

class NewUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    goal: ""
  };

  handleFormSubmit = event => {
    API.saveUser({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      goal: this.state.goal
    })
      .then(response => {
        console.log(response)
        if (response.data) {
          console.log('successful signup')
          this.setState({
            redirectTo: '/'
          })
        }
        else {
          console.log('Sign-up error');
        }
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
        <div className="newuser-form">
          <FormControl margin="normal" required fullWidth="true">
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
          <FormControl margin="normal" required fullWidth="true">
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
          <FormControl margin="normal" required fullWidth="true">
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
          <FormControl margin="normal" required fullWidth="true">
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
          <FormControl margin="normal" fullWidth="true">
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
          <CardActions>
            <Link className="page-link" to="/profile">
              <Button className="page-button"
                variant="outlined"
                size="small"
                onClick={() => this.handleFormSubmit()}>
                Submit</Button>
            </Link>
          </CardActions>
        </div>
      </div >
    );
  }
}

export default NewUser;
