var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import classnames from "classnames";

class Icon extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let _props = this.props,
            { size, circle, name } = _props,
            rest = _objectWithoutProperties(_props, ["size", "circle", "name"]);

        let classes = {
            "material-icons": true,
            "md-18": size == 18,
            "md-24": size == 24,
            "md-36": size == 36,
            "md-48": size == 48,
            circle: circle
        };

        classes = classnames(classes);

        return React.createElement(
            "i",
            _extends({}, rest, { className: classes }),
            name
        );
    }
}

export default Icon;
module.exports = exports["default"];