import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function AddNote(props) {
	const [addNote, setAddNote] = React.useState({
		title: "",
		content: ""
	});

	const [formExpanded, setformExpanded] = React.useState(false);

	let onChange = (event) => {
		const { name, value } = event.target;
		setAddNote({ ...addNote, [name]: value });
	}

	let onClick = (state) => {
		console.log(state);
		setformExpanded(state);
		console.log(formExpanded);
		if (!state) {
			console.log("Hide form");
			document.getElementsByName("content")[0].setAttribute("rows", 1);
			document.getElementsByName("content")[0].style.resize = "none";
			document.getElementsByName("content")[0].style.height = "";
		} else {
			console.log("Show form");
			document.getElementsByName("content")[0].setAttribute("rows", 3);
			document.getElementsByName("content")[0].style.resize = "vertical";
		}
		console.log("State: " + formExpanded);
	}

	return (
		<form onSubmit={(event) => {
			event.preventDefault();
			props.onSubmit(addNote);
			setAddNote({ title: "", content: "" });
			onClick(false);
			console.log("WHY ME?");
		}}>
			{formExpanded ?
				(<input type="text" name="title" placeholder="Title" value={addNote.title} onChange={onChange} />
				) : null}


			<textarea type="text" name="content" placeholder="Take a note..." value={addNote.content} onChange={onChange} rows="1" onFocus={() => { onClick(true) }} />
			<Zoom in={formExpanded}>
				<Fab type="submit" className="button">
					<AddIcon />
				</Fab>
			</Zoom>
		</form>
	)
}