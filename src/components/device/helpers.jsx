import React from "react";
import Device from "./device";

export const Mobile = ({children}) => (
        <Device device="mobile">
            {children}
        </Device>
);

export const Desktop = ({children}) => (
        <Device device="desktop">
            {children}
        </Device>
);

export const Tablet = ({children}) => (
        <Device device="tablet">
            {children}
        </Device>
);

export const Widescreen = ({children}) => (
        <Device device="widescreen">
            {children}
        </Device>
);