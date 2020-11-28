import React from "react";

export default class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <h1>{this.props.note.title}</h1>
                <p>{this.props.note.content}</p>
            </div>
        );
    }
}
