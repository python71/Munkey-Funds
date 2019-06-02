import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import './style.css';
import IconButton from '@material-ui/core/IconButton';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80deea'
    },
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar className="top-header" position="static" color="primary">
          <Toolbar>
            {/* img src={require("../static/images/monkeylogo-02.png")}> */}
            <Grid container justify="center">
               <Typography variant="h6" color="inherit">
                Monkey Money
            </Typography> 
            </Grid> 
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(Header);

