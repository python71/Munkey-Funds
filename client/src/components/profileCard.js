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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import SimpleTable from "../components/table";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import API from "./utils/API";
import Mood from "@material-ui/icons/Mood";
import StockChart from "./chart/stockChart";
import { CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP } from "@tensorflow/tfjs-layers/dist/constraints";

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
	},
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: "none"
	}
});
class ProfileCard extends Component {
<<<<<<< HEAD
  constructor(props) {
		super(props);
	
		this.state = { 
      expanded: false, 
      userData: [], 
      searchOne: "", 
      searchTwo: "", 
      searchThree: "",
      userData: this.props.userData,
      historicData: []
     };
	}
  
  componentWillMount() {
    this.setState({userData: this.props.userData});
    let historicData = [];
    this.getStocks() 


   
  
  

    
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  setSymbol = e => {
    // e.preventDefault();
    let symbol = e.target.value;
    this.setState({ searchOne: symbol });
    console.log(this.state.searchOne);
    API.loadStockQuotes({ symbol: this.state.searchOne }).then(res =>
      console.log(res)
    );
  };

  getStocks() {
    let historicData = [];
    let tickers = [];
    let self = this;
		fetch('/api/quotes', {
			method: 'GET'
		}).then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).then(function(data) {
      console.log(data)
      
      let userStocks = [];
      data.forEach(function(e) {
        if(e.ownerId == self.state.userData.id) {
          userStocks.push(e)
        }
      })
      self.setState({
        stocks: userStocks
      }, () => {
        self.state.stocks.forEach((el) => {
          historicData.push(self.getHistoricData(el.ticker))
          tickers.push(el.ticker)
        })
        self.setState({
          historicData: historicData,
          tickers: tickers
        });
      })
      

	
		}).catch(err => {
		console.log('caught it!',err);
    }) 
    console.log(self.state.stocks)
  }

  getHistoricData(ticker) {
    let historicData = []
    let self = this;
    let url = `https://api.iextrading.com/1.0/stock/${ticker}/chart/1y`
    fetch(url)
    .then(res => res.json())
    .then(function(data) {
      data.forEach((el) => {
        historicData.push(el.close)
      });
    

      console.log("stockChart Data: ", historicData)
      
      
    });
    return historicData;
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Profile" className={classes.avatar}>
                {this.state.userData.firstname.slice(0,1)}
							</Avatar>
            }
            action={<IconButton>{/* <MoreVertIcon /> */}</IconButton>}
            title={this.state.userData.firstname}
            subheader="Welcome Back!"
          />
          <CardMedia
            className={classes.media}
            image={require("../static/images/skyscrapers.jpg")}
            title="Financial Health"
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Overall Investment Performance:
=======
	state = { expanded: false, searchOne: "", searchTwo: "", searchThree: "" };
	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	setSymbol = e => {
		// e.preventDefault();
		let { name, value } = e.target;
		this.setState({ [name]: value });
	};

	_handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.searchOne);
		// Make api call with this.state.search

		// get users stock out of database
		const userId = 3
		// API.getQuotes({
		// 	UserId: userId 
		// }).then(res => 
		// 	console.log(res.data),
		// 	res.data.forEach(function(item) {
		// 		console.log("Symbol: ", item.stock);
		// 		 console.log("Shares", item.shares)
		// 		})
		// 	)

		API.loadMultipleQuotes({ symbol: this.state.searchOne }).then(res =>
			// adds users stock to database
			API.saveQuote({
				stock: res.data[0].id,
				UserId: userId
			})
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
								J
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
							Overall Investment Performance:
>>>>>>> origin/master
							<Mood
								style={{ fontSize: 40, float: "right", marginRight: 110 }}
							/>
						</Typography>
						<Grid>
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
							<Button
								variant="outlined"
								margin="normal"
								className={classes.button}
								style={{ marginTop: 23 }}
								onClick={e => this._handleSubmit(e)}
							>
								ADD
							</Button>
<<<<<<< HEAD
            </Grid>
            <Typography variant="h5" style={{ marginTop: 30 }} >
              {this.state.userData.goal}
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
              <SimpleTable
                stocks={this.state.stocks}
              />
              <StockChart 
                userStocks={this.state.stocks}
                userId={this.state.userData.id}
                historicData={this.state.historicData}
                stockBtns={this.state.tickers}
              />
              <br /><br /><br /><br /><br /><br /><br /><br />
              <Typography paragraph style={{ marginTop: 15 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
=======
						</Grid>
						<Typography variant="h5" style={{ marginTop: 30 }}>
							Investment Goal: Long-Term Growth
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
							<SimpleTable
								data={[]}
								header={
									[
										// {
										// 	stock: "Stock",
										// 	prop: "stockSymbol"
										// },
										// {
										// 	open: "Open",
										// 	prop: "openPrice"
										// },
										// {
										// 	close: "Close",
										// 	prop: "closePrice"
										// },
										// {
										// 	current: "Current Price",
										// 	prop: "currentPrice"
										// },
										// {
										// 	shares: "Number of Shares Held",
										// 	prop: "sharesHeld"
										// },
										// {
										// 	value: "Value of Holding",
										// 	prop: "currentValue"
										// }
									]
								}
							/>
							<StockChart />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<Typography paragraph style={{ marginTop: 15 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
>>>>>>> origin/master
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Typography>
							<Typography paragraph style={{ marginTop: 15 }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Typography>
							<Typography paragraph style={{ marginTop: 15 }}>
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
