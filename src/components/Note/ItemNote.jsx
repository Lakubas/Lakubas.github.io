import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"

export default function ItemNote(props) {
    return (
        <div className="note">
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
            <button onClick={() => {
                props.onDelete(props.id);
            }}>
                <DeleteIcon /></button>
        </div>
    );
}