import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	},
	table: {
		minWidth: 700
	}
});

let id = 0;
function createData(company, price, open, close, high, low) {
	id += 1;
	return { id, company, price, open, close, high, low };
}

const rows = [
	createData("Apple", 159, 6.0, 24, 4.0, 1),
	createData("Google", 237, 9.0, 37, 4.3, 1),
	createData("Facebook", 262, 16.0, 24, 6.0, 1),
	createData("Uber", 305, 3.7, 67, 4.3, 1),
	createData("Lyft", 356, 16.0, 49, 3.9, 1)
];

function SimpleTable(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Company</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Open</TableCell>
						<TableCell align="right">Close</TableCell>
						<TableCell align="right">High</TableCell>
						<TableCell align="right">Low</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}

SimpleTable.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
