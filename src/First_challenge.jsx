//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
var React = require("react");
var ReactDOM = require("react-dom");

class DisplayHtml extends React.Component {
	render() {
		return (
			<div>
				<h1>H1 HEADING!!</h1>
				<ul>
					<li>First list element</li>
					<li>Second list element</li>
					<li>Third list element</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<DisplayHtml />, document.getElementById("root"));
