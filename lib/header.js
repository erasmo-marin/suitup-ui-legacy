var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import classnames from "classnames";
import Screen from "./device/screen";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onScreenChange = this.onScreenChange.bind(this);
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
        this.setState({
            screen: screen
        });
    }

    render() {
        let _props = this.props,
            { fixed, top, bottom, children } = _props,
            rest = _objectWithoutProperties(_props, ["fixed", "top", "bottom", "children"]);

        let classes = classnames({
            "fixed": fixed,
            "top": top,
            "bottom": bottom,
            "is-mobile": this.state.screen == 'mobile',
            "is-tablet": this.state.screen == 'tablet',
            "is-desktop": this.state.screen == 'desktop',
            "is-widescreen": this.state.screen == 'widescreen'
        });

        return React.createElement(
            "header",
            _extends({}, rest, { className: classes }),
            children
        );
    }
}

export default Header;