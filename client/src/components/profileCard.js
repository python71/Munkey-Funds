import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

let profilePic = {
	src: "",
	alt: "Face",
	width: "150px"
};

class ProfileCard extends Component {
	render() {
		return (
			<div className="container">
				<img
					src={profilePic.src}
					alt={profilePic.alt}
					width={profilePic.width}
				/>
				<h1>Name Here</h1>
			</div>
		);
	}
}

//ProfilePage.propTypes = {};

export default ProfileCard;
