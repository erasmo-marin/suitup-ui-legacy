import React from "react";
import classnames from "classnames";
import { isArray } from "lodash";
import Screen from "./screen";

class Device extends React.Component {
    constructor(props) {
        super(props);
        this.onScreenChange = ::this.onScreenChange;
        this.state = {
            screen: Screen.getScreen()
        };
    }

    componentDidMount() {
        Screen.onScreenChange(this.onScreenChange);
    }

    componentWillUnmount() {
        Screen.offScreenChange(this.onScreenChange);
    }

    onScreenChange(screen) {
        this.setState({ screen });
    }

    render() {
        let { device, devices, children } = this.props;
        if (!isArray(devices)) {
            devices = [device];
        }

        if (devices.indexOf(this.state.screen) < 0) {
            return null;
        }

        return React.Children.only(children);
    }
}

export default Device;
