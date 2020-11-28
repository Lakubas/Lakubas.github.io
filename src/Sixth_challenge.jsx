//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";

class App extends React.Component {
	render() {
		const h1_style = {
			color: "black",
			textAlign: "center"
		};

		let h1_content = undefined;
		let current_time = new Date().toLocaleTimeString("en-US").split(" ");

		current_time = ["7:28:14", "PM"];
		console.log(current_time);

		let current_time_of_day = current_time[1];
		let current_hour = parseInt(current_time[0].split(":")[0]);
		current_hour = current_hour == 12 ? 0 : current_hour;

		if (
			0 <= current_hour &&
			current_hour < 12 &&
			current_time_of_day === "AM"
		) {
			h1_content = "Good Morning";
			h1_style.color = "red";
		}
		if (
			0 <= current_hour &&
			current_hour < 6 &&
			current_time_of_day === "PM"
		) {
			h1_content = "Good Afternoon";
			h1_style.color = "green";
		}
		if (
			6 <= current_hour &&
			current_hour < 12 &&
			current_time_of_day === "PM"
		) {
			h1_content = "Good Evening";
			h1_style.color = "blue";
		}

		return (
			<div>
				<h1 className="heading" style={h1_style}>
					{h1_content}
				</h1>
			</div>
		);
	}
}

export default App;
