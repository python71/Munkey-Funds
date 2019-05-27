import React, { Component } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Login.css";
import { FormControl, InputLabel, Input } from '@material-ui/core/';
import axios from 'axios';
import API from "../utils/API";
import Header from '../header'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this)
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
    var apiBaseUrl = "http://localhost:3001/api/";
    var self = this;
    
    var payload = {
      "email": this.state.email,
      "password": this.state.password,
    }
    API.testUser({
      email: this.state.email,
      password: this.state.password,
    })
    // axios.post(apiBaseUrl + 'login', payload)
    // axios
    // .post(apiBaseUrl, '/user/login', payload)
    .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
            // update App.js state
            this.props.updateUser({
                loggedIn: true,
                email: response.data.email
            })
            // update the state to redirect to home
            this.setState({
                redirectTo: '/profile'
            })
        }
    }).catch(error => {
        console.log('login error: ')
        console.log(error);
        
    })
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
            {/* <Link> */}
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