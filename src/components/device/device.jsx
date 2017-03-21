import React from "react";
import classnames from "classnames";
import isArray from "lodash/fp/isArray";
import suitupable from "../component";

@suitupable
class Device extends React.Component {
    render() {
        let { device, devices, children, screen } = this.props;

        if (!isArray(devices))
            devices = [device];

        if (devices.indexOf(screen) < 0)
            return null;

        return React.Children.only(children);
    }
}

export default Device;
