import React from "react";
import emojipedia from "../emojipedia";

function Card(props) {
	return (
		<div className="term">
			<dt>
				<span className="emoji" role="img" aria-label="Tense Biceps">
					{props.emoji}
				</span>
				<span>{props.name}</span>
			</dt>
			<dd>{props.meaning}</dd>
		</div>
	);
}

function App() {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>

			<dl className="dictionary">
				{emojipedia.map((emoji) => (
					<Card
						id={emoji.id}
						emoji={emoji.emoji}
						name={emoji.name}
						meaning={emoji.meaning}
					/>
				))}
			</dl>
		</div>
	);
}

export default App;
