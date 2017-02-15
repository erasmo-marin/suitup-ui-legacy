import React from "react";
import Device from "./device";

const Widescreen = ({ children }) => React.createElement(
    Device,
    { device: "widescreen" },
    children
);

export default Widescreen;