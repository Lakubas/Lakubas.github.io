import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1> <HighlightIcon/> Keeper </h1>
            </header>
        );
    }
}
