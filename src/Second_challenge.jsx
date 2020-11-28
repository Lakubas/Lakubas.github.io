import React from "react";
import ReactDOM from "react-dom";

class DisplayHtml extends React.Component {
	parameters = {
		fname: "Andżej",
		lname: "Bogena"
	};

	render() {
		return (
			<div>
				<h1>
					Hello {this.parameters.fname + " " + this.parameters.lname}!
				</h1>
				<p>
					Your lucky number is{" "}
					<strong>{Math.floor(Math.random() * 100)}</strong>!
				</p>
			</div>
		);
	}
}

ReactDOM.render(<DisplayHtml />, document.getElementById("root"));
