import React, { Component } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Login.css";
import { FormControl, InputLabel, Input } from '@material-ui/core/';
import axios from 'axios';
import Header from '../header'
import API from '../utils/API'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      data:[],
      redirect: false,
      userData: []
    };

  }

  componentDidMount() {
    let self = this;

    fetch('/api/users', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data)
        self.setState({data: data})

    }).catch(err => {
    console.log('caught it!',err);
    }) 
  }

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
  }

  handleClick(event) {
    let self = this;
    console.log("email: ", this.state.email)
    console.log("password: ", this.state.password)
    console.log("data: ", this.state.data)
    this.state.data.forEach(function(e) {
     
      if(e.email === self.state.email && e.password === self.state.password) {
        // alert('logged in!')
        console.log("login successful!")
      
        self.setState({userData: e, redirect: true})
     
      }
    })
  
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect to={{
          pathname: '/profile',
          state: { userData: this.state.userData }
        }}
/>
      )
    }
  }

  handleSubmission() {

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
                name="email"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required="true">
              <InputLabel>Password</InputLabel>
              <Input
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
              />
            </FormControl>
            
              <br></br><br></br>
              <div>
              {this.renderRedirect()}
                <button
                  // disabled={!this.validateForm()}
                  type="submit"
                  onClick={(event) => this.handleClick(event)}
                >
                  Login
                </button>
              </div>
            <Link to="/newuser"><button>New User</button></Link>
          </form>
        </div >
      </div>
    )
  }
}

export default Login;