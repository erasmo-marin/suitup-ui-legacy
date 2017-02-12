import React from "react";
import classnames from "classnames";
import { isArray } from "lodash";

const Device = ({ device, devices, children }) => {
    if (!isArray(devices)) {
        devices = [device];
    }

    let classes = classnames({
        device: true,
        mobile: devices.indexOf("mobile") < 0 ? false : true,
        tablet: devices.indexOf("tablet") < 0 ? false : true,
        desktop: devices.indexOf("desktop") < 0 ? false : true,
        widescreen: devices.indexOf("widescreen") < 0 ? false : true
    });

    return (
        <Device device="desktop">
            {children}
        </Device>
    );
};

export default Device;