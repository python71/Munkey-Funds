import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Header from "../header";
import PropTypes from 'prop-types';
import '../style.css';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffe082'
    },
  },
  typography: {
    useNextVariants: true,
  },
});


class NewUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    goal: ""
  };

  handleFormSubmit = event => {

    // API.saveUser({
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   email: this.state.email,
    //   password: this.state.password,
    //   goal: this.state.goal
    // })
    //   .then(res => console.log(res.data))
    //   // console.log("new user:" + newUser))
    //   .catch(err => console.log(err));
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
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <FormControl margin="normal" required={true}>
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
          <FormControl margin="normal" required={true}>
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
          <FormControl margin="normal" required={true} fullwidth={true}>
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
          <FormControl margin="normal" fullwidth={true}>
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
          <MuiThemeProvider theme={theme}>
            <Link to="/profile">
              <Button variant='contained' color='primary' size="small"
                onClick={() => this.handleFormSubmit()}>Submit</Button>
            </Link>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default (NewUser);
