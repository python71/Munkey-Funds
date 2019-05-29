import React, { Component } from "react";
import LoginForm from "./components/login/login";
import "./components/style.css";
import NewUser from "./components/NewUser/newuser";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./pages/Profile/profile";
import axios from "axios";


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/login').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <Route exact path="/" 
          render={() => 
            <LoginForm
              updateUser={this.updateUser}
            />}
         />
        <Route exact path="/newuser" component={NewUser} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    );
  }
}

export default App;
