import React, { Component } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Login.css";
import { FormControl, InputLabel, Input } from '@material-ui/core/';
import axios from 'axios';
import Header from '../header'
import API from '../utils/API'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

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

  handleClick(event) {
    API.getAllUsers().then(
      (response) => {
        console.log(response)
      }
      ).catch(
        (err) => {
          console.log(err);
        }
      );
  
    

    // var payload = {
    //   "firstname": this.state.firstname,
    //   "lastname": this.state.lastname,
    //   "email": this.state.username,
    //   "password": this.state.password,
    //   "goal": this.state.goal
    // }

  //   API.getAllUsers().then(
  //     (response) => {
        
  //         console.log(response)
  //     }
  // ).catch(
  //     (err) => {
  //         console.log(err);
  //     }
  // );



  }



  render() {
    return (
      <div>
        <Header />
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required="true">
              <InputLabel>Email</InputLabel>
              <Input
                id="email"
                label="Email"
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required="true">
              <InputLabel>Password</InputLabel>
              <Input
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormControl>
            {/* <Link to="/profile"> */}
              <br></br><br></br>
              <button
                // disabled={!this.validateForm()}
                type="submit"
                onClick={(event) => this.handleClick(event)}
              >
                Login
          </button>
            {/* </Link> */}
            <Link to="/newuser"><button>New User</button></Link>
          </form>
        </div >
      </div>
    )
  }
}

export default Login;