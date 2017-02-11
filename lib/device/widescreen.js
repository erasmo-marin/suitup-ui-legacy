import React from "react";
import Device from "./device";

class Widescreen extends React.Component {
    constructor() {
        super(props);
    }

    render() {
        React.createElement(
            Device,
            { device: "widescreen" },
            this.props.children
        );
    }
}

export default Widescreen;
module.exports = exports["default"];