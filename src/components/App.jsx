import React from "react";

function App() {
	const [time, setTime] = React.useState(new Date().toLocaleTimeString());

	function getTime() {
		let time = new Date().toLocaleTimeString();
		setTime(time);
	}

	setInterval(getTime, 1);
	return (
		<div className="container">
			<h1>{time}</h1>
			<button onClick={getTime}>Get Time</button>
		</div>
	);
}

export default App;
