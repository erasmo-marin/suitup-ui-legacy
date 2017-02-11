import React from "react";
import Device from "./device";

class Tablet extends React.Component {
    constructor() {
        super(props);
    }

    render() {
        React.createElement(
            Device,
            { device: "tablet" },
            this.props.children
        );
    }
}

export default Tablet;
module.exports = exports["default"];