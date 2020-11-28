import React from "react";
import Card from "./Card";
import { contacts } from "../contacts";

function App() {
	let contactList = contacts.map((contact) => (
		<Card key={contact.imgURL} contact={contact} />
	));

	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			{contactList}
		</div>
	);
}

export default App;
