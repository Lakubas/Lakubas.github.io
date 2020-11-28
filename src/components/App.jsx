import React from "react";
import Header from "./Header/Header";
import Note from "./Note/Note";
import Footer from "./Footer/Footer";


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Note />
                <Footer />
            </div>
        );
    }
}
