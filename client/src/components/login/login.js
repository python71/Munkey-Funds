import React, { Component } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Login.css";
import { FormControl, InputLabel, Input } from '@material-ui/core/';
import axios from 'axios';
import Header from '../header'

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
    var apiBaseUrl = "http://localhost:3001/api/";
    var self = this;
    
    var payload = {
      "firstname": this.state.firstname,
      "lastname": this.state.lastname,
      "email": this.state.username,
      "password": this.state.password,
      "goal": this.state.goal
    }

    axios.post(apiBaseUrl + 'login', payload)
      .then(function (response) {
        console.log(response);

        if (response.data.code == 200) {
          console.log("Login successfull");
          // var uploadScreen=[];
          // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
          // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
        else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      }).catch(function (error) {
        console.log(error);
      });
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
                id="standard-email-input"
                label="Email"
                autoFocus
                type="email"
                // value={this.state.email}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required="true">
              <InputLabel>Password</InputLabel>
              <Input
                id="password"
                // value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormControl>
            <Link to="/profile">
              <br></br><br></br>
              <button
                // disabled={!this.validateForm()}
                type="submit"
                onClick={(event) => this.handleClick(event)}
              >
                Login
          </button>
            </Link>
            <Link to="/newuser"><button>New User</button></Link>
          </form>
        </div >
      </div>
    )
  }
}

export default Login;