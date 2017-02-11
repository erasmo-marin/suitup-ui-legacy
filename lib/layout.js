import _isArray from "lodash/isArray";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";

import classnames from "classnames";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    findHeader(children) {
        if (_isArray(children)) {
            for (let i in children) {
                let child = children[i];
                if (child.type.name == "Header") {
                    console.log("es el header");
                    return child;
                }
            }
        } else if (isObject(children)) {
            console.log(children.type.name);
            if (children.type.name == "Header") return children;
        }
        return null;
    }

    render() {
        let _props = this.props,
            { children } = _props,
            rest = _objectWithoutProperties(_props, ["children"]);

        let header = this.findHeader(children);
        let classes = classnames({
            layout: true,
            "fixed-header": header && header.props.fixed ? true : false
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                _extends({}, rest, { className: classes, id: "layout" }),
                children
            ),
            React.createElement("div", { className: "modal-mount-point", id: "modalMountPoint" })
        );
    }
}

export default Layout;
module.exports = exports["default"];