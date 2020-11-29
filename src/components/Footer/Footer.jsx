import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Copyright ⓒ {new Date().getFullYear()}</p>
            </footer>
        );
    }
}