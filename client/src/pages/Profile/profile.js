import React from "react";
import ProfileCard from "../../components/profileCard";
import Header from "../../components/header";

class Profile extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			userData: []
		};
	}

	componentWillMount() {
		let newData = this.props.location.state.userData
		this.setState({ userData: newData})
	}

	render() {
		return (
			<div>
				<Header />
				<ProfileCard userData={this.state.userData}/>
			</div>
		);
	}
}

export default Profile;
