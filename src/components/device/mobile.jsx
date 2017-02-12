import React from "react";
import Device from "./device";

const Mobile = ({children}) => (
        <Device device="mobile">
            {children}
        </Device>
);

export default Mobile;