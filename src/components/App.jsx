import React from "react";
import Login from "./Login";

var isLoggedIn = false;
var userIsRegistered = false;

function App() {
	return (
		<div className="container">
			{isLoggedIn ? (
				<h1> HELLO </h1>
			) : (
				<Login userIsRegistered={userIsRegistered} />
			)}
		</div>
	);
}

export default App;
