import React from "react";
import Header from "./Header/Header";
import Note from "./Note/Note";
import Footer from "./Footer/Footer";
import notes from "./Note/notes"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {notes.map((noteItem) => 
                    <Note 
                    key={noteItem.key} 
                    note={noteItem} 
                    />)}
                <Footer />
            </div>
        );
    }
}
