import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import TrendingUp from "@material-ui/icons/TrendingUp";
import IconButton from "@material-ui/core/IconButton";
import { Component } from "react";

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		width: "100%",
// 		marginTop: theme.spacing(3),
// 		overflowX: "auto"
// 	},
// 	table: {
// 		minWidth: 650
// 	}
// }));


class SimpleTable extends Component {
	construnctor(props) {
		this.state = {
			stocks: []
		}
	}

	componentWillMount(){
		// this.setState({stocks: this.props.stocks})
		console.log("stocks: ", this.props.stocks)
	}

	// const rows = [
	// 	// createData(),
	// 	// // { data.data.companyName },
	// 	// // { data.data.close },
	// 	// // { data.data.iexRealtimePrice },
	// 	// // { shares },
	// 	// // { (data.data.iexRealtimePrice * shares) }
	// 	createData("Facebook Inc", 184.17, 4, 736.68),
	// 	createData("Apple Inc", 178.23, 24, 4277.52),
	// 	createData("Vangaurd Total Stock Market Index", 70.31, 67, 4710.77)
	// ];


	


		// const classes = useStyles();
		render() {
			return (
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Company</TableCell>
							<TableCell>Current Price</TableCell>
							<TableCell>Number of Shares</TableCell>
							<TableCell>Current Total Value</TableCell>
							<TableCell>Check Outlook</TableCell>
							<TableCell>Remove</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.stocks.map(row => (
							<TableRow key={row.name}>
								{/* <TableCell component="th" scope="row">
									{row.name}
								</TableCell> */}
								<TableCell>{row.company}</TableCell>
								<TableCell>##</TableCell>
								<TableCell>{row.shares}</TableCell>
								<TableCell>$$</TableCell>
								<TableCell>
									<IconButton aria-label="Delete">
										<TrendingUp fontSize="small" />
									</IconButton>
								</TableCell>
								<TableCell>
									<IconButton aria-label="Delete">
										<DeleteIcon fontSize="small" style={{ marginLeft: 1 }} />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
			);
		};
	

}

export default SimpleTable;
