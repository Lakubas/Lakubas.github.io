import React from "react";

class App extends React.Component {
	render() {
		const NAME = "KECCAK";

		return (
			<div>
				<p>Created by {NAME}</p>
				<p>Copyright {new Date().getFullYear()}.</p>
			</div>
		);
	}
}

export default App;
