import React from "react";
import AddNote from "./AddNote";
import ItemNote from "./ItemNote";
// import notes from "./notes"

export default function Note() {

    const [ note, setNote ] = React.useState([]);

    let onAddNote = (newNote) => {
        console.log("ADDING");
        console.log(newNote);
        setNote((prevNotes) => {
            return [
                ...prevNotes,
                newNote
            ];
        });
    }

    let onDeleteNote = (id) => {
                setNote((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <React.Fragment>
            <AddNote onSubmit={onAddNote}/>
            {note.map((noteItem, index) => 
                <ItemNote 
                key={index}
                id={index}
                note={noteItem} 
                onDelete={onDeleteNote}
                />)}
        </React.Fragment>
    );
}

