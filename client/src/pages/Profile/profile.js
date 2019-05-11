import React from "react";
import ProfileCard from "../../components/profileCard";
import Header from "../../components/header";

class Profile extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<ProfileCard />
			</div>
		);
	}
}

export default Profile;
