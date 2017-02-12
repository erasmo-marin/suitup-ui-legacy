var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import classnames from "classnames";

class BoxChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cstyle = {};
        let _props = this.props,
            {
            verticalExpand,
            columns,
            wide,
            wides,
            width,
            children,
            style,
            gutter
        } = _props,
            rest = _objectWithoutProperties(_props, ["verticalExpand", "columns", "wide", "wides", "width", "children", "style", "gutter"]);

        let classes = {
            "box-child": true,
            "full-height": verticalExpand
        };

        if (wide && columns) {
            cstyle.width = `${100 / columns * wide}%`;
            cstyle.padding = gutter;
        }

        classes = classnames(classes);

        return React.createElement(
            "div",
            _extends({}, rest, { className: classes, style: _extends({}, style, cstyle) }),
            children
        );
    }
}

export default BoxChild;
module.exports = exports["default"];