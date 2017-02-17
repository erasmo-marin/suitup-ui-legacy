import React from "react";
import Device from './device';

const Desktop = ({children}) => (
        <Device device="desktop">
            {children}
        </Device>
);

export default Desktop;