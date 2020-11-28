import React from "react";

class App extends React.Component {
	render() {
		const h1_style = {
			color: "red",
			fontSize: "40px",
			border: "1px solid black",
			textAlign: "right"
		};

		h1_style.color = "green";
		h1_style.textAlign = "center";

		return (
			<div>
				<h1 style={h1_style}>Hello World!</h1>
			</div>
		);
	}
}

export default App;
