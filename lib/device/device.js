import _isArray from "lodash/isArray";
import React from "react";
import classnames from "classnames";


const Device = ({ device, devices, children }) => {
    if (!_isArray(devices)) {
        devices = [device];
    }

    let classes = classnames({
        device: true,
        mobile: devices.indexOf("mobile") < 0 ? false : true,
        tablet: devices.indexOf("tablet") < 0 ? false : true,
        desktop: devices.indexOf("desktop") < 0 ? false : true,
        widescreen: devices.indexOf("widescreen") < 0 ? false : true
    });

    return React.createElement(
        Device,
        { device: "desktop" },
        children
    );
};

export default Device;
module.exports = exports["default"];