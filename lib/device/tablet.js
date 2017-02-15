import React from "react";
import Device from "./device";

const Tablet = ({ children }) => React.createElement(
    Device,
    { device: "tablet" },
    children
);

export default Tablet;