import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";

function Header() {
	return (
		<div className="header-bg">
			<AppBar position="static" color="default">
				<Grid container justify="center">
					<h2>Monkey Money</h2>
				</Grid>
			</AppBar>
		</div>
	);
}
export default Header;
