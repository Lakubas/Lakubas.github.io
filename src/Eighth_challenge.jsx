import React from "react";
import * as Calculator from "./Eighth_challenge_components/Calculator";

export default class App extends React.Component {
	render() {
		return (
			<ul>
				<li>{Calculator.add(1, 2)}</li>
				<li>{Calculator.multiply(2, 3)}</li>
				<li>{Calculator.subtract(7, 2)}</li>
				<li>{Calculator.divide(5, 2)}</li>
			</ul>
		);
	}
}
