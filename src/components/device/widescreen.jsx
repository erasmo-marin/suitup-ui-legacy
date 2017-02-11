import React from "react";
import Device from "./device";

class Widescreen extends React.Component {
    constructor() {
        super(props);
    }

    render() {
        <Device device="widescreen">
            {this.props.children}
        </Device>;
    }
}

export default Widescreen;