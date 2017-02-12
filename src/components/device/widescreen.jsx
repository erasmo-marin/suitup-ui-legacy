import React from "react";
import Device from "./device";

const Widescreen = ({children}) => (
        <Device device="widescreen">
            {children}
        </Device>
);

export default Widescreen;