var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _props = this.props,
            { fixed, top, bottom, children } = _props,
            rest = _objectWithoutProperties(_props, ["fixed", "top", "bottom", "children"]);

        let classes = classnames({
            fixed: fixed,
            top: top,
            bottom: bottom
        });

        return React.createElement(
            "header",
            _extends({}, rest, { className: classes }),
            children
        );
    }
}

export default Header;
module.exports = exports["default"];