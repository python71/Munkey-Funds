import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import SimpleTable from "../components/table";
import FormControl from "@material-ui/core/FormControl";
import API from "./utils/API";

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
	avatar: {
		backgroundColor: red[500]
	}
});

class ProfileCard extends Component {
	state = { expanded: false, searchOne: "", searchTwo: "", searchThree: "" };
	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	setSymbol = e => {
		// e.preventDefault();
		this.setState({ searchOne: e.target.value });
		console.log(this.state.searchOne);
		API.loadStockQuotes({ symbol: this.state.searchOne }).then(res =>
			console.log(res)
		);
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid container justify="center">
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Avatar aria-label="Profile" className={classes.avatar}>
								A
							</Avatar>
						}
						action={<IconButton>{/* <MoreVertIcon /> */}</IconButton>}
						title="Jesse Doe"
						subheader="Welcome Back!"
					/>
					<CardMedia
						className={classes.media}
						image={require("../static/images/skyscrapers.jpg")}
						title="Financial Health"
					/>
					<CardContent>
						<Typography variant="h4" gutterBottom>
							Current Financial Health: [+]
						</Typography>
						<Typography variant="h4" gutterBottom>
							Overall Investment Performance: [+]
						</Typography>
						<FormControl>
							<TextField
								id="searchOne"
								label="Stock Symbol Search"
								type="search"
								name="searchOne"
								value={this.state.searchOne}
								className={classes.textField}
								margin="normal"
								variant="outlined"
								onChange={this.setSymbol}
							/>
							{/* <IconButton size="small" color="inherit">
								<SearchIcon />
							</IconButton> */}
							{/* <TextField
								id="standard-search2"
								label="Stock Symbol Search"
								type="search"
								name="searchTwo"
								value={this.state.searchTwo}
								className={classes.textField}
								margin="normal"
								variant="outlined"
							/>
							<IconButton size="small" color="inherit">
								<SearchIcon />
							</IconButton> */}
							{/* <TextField
								id="standard-search3"
								label="Stock Symbol Search"
								type="search"
								name="searchThree"
								value={this.state.searchThree}
								className={classes.textField}
								margin="normal"
								variant="outlined"
							/>
							<IconButton size="small" color="inherit">
								<SearchIcon />
							</IconButton> */}
						</FormControl>
						<Typography component="p">
							Your current financial goal is: To become more financially
							self-aware and improve my overall financial health.
						</Typography>
					</CardContent>
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
						<CardContent>
							<SimpleTable />
							<Typography paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Typography>
							<Typography paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Typography>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</Grid>
		);
	}
}

ProfileCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCard);
