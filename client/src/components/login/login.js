import React, { Component } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import "./Login.css";
import "../style.css";
import { FormControl, InputLabel, Input } from '@material-ui/core/';
import axios from 'axios';
import Header from '../header';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import NewUser from '../NewUser/newuser'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const styles = theme => ({
  card: {
    maxWidth: 800
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

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
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Grid container justify="center">
          <Card className={classes.card}>
            <CardHeader
              title="Login"
              subheader=""
            />
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
                <Link className="page-link" to="/profile">
                  <br></br><br></br>
                  <Button className="page-button"
                    // disabled={!this.validateForm()}
                    variant="outlined"
                    size="small"
                    type="submit"
                    onClick={(event) => this.handleClick(event)}>
                    Login</Button>
                </Link>
                <Link className="page-link" to="/newuser" underline="none">
                  <Button className="page-button"
                    variant="outlined"
                    size="small">
                    New User</Button>
                </Link>
              </form>
            </div >
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <NewUser />
            </Collapse>
          </Card>
        </Grid>
      </div>
    )
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
