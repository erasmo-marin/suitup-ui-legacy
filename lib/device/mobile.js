import React from "react";
import Device from "./device";

const Mobile = ({ children }) => React.createElement(
    Device,
    { device: "mobile" },
    children
);

export default Mobile;
module.exports = exports["default"];