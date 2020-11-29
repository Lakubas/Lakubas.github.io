import React from "react";

export default function AddNote(props) {
    const [addNote, setAddNote] = React.useState({
        title: "",
        content: ""
    });

    let onChange = (event) => {
        const {name, value} = event.target;
        setAddNote({...addNote, [name]: value});
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.onSubmit(addNote);
            setAddNote({title: "", content: ""});
        }}>
            <input type="text" name="title" placeholder="Title" value={addNote.title} onChange={onChange}/>
            <textarea type="text" name="content" placeholder="Take a note..." value={addNote.content} onChange={onChange}/>
            <button type="submit">Add</button>
        </form>
    )
}