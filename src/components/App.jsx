import React from "react";

function App() {
	const [hover, setHover] = React.useState(false);
	function handleMouseOut() {
		setHover(false);
	}
	function handleMouseOver() {
		setHover(true);
	}
	return (
		<div className="container">
			<h1>Hello</h1>
			<input type="text" placeholder="What's your name?" />
			<button
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				style={{ backgroundColor: hover ? "black" : "white" }}
			>
				Submit
			</button>
		</div>
	);
}

export default App;
