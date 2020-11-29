import React from "react";
import Input from "./Input";

export default class Login extends React.Component {
	render() {
		return (
			<form className="form">
				<Input type="text" placeholder="Username" />
				<Input type="password" placeholder="Password" />
				{!this.props.userIsRegistered && (
					<Input type="password" placeholder="Confirm Password" />
				)}
				<button type="submit">
					{this.props.userIsRegistered ? "Login" : "Register"}
				</button>
			</form>
		);
	}
}
