import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class AccountList extends Component {
	render() {
		if (this.props.isAuthorized == true) {
			return (
				<div>
					<div style="margin: 24px 0;">
						<a href="#">
							<i class="" />
						</a>
						<a href="#">
							<i class="" />
						</a>
						<a href="#">
							<i class="" />
						</a>
						<a href="#">
							<i class="" />
						</a>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Authentication Required</h1>
				</div>
			);
		}
	}
}

export default AccountList;
