import React from "react";
import Device from "./device";

const Tablet = ({children}) => (
        <Device device="tablet">
            {children}
        </Device>
);

export default Tablet;