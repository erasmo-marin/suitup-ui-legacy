var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import classnames from "classnames";
import Button from "../button";

class ModalAction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _props = this.props,
            { text, onClick, start, end } = _props,
            rest = _objectWithoutProperties(_props, ["text", "onClick", "start", "end"]);

        let classes = {
            "modal-action": true,
            start: start,
            end: end
        };

        classes = classnames(classes);

        return React.createElement(
            "div",
            _extends({}, rest, { className: classes }),
            React.createElement(Button, { text: text, onClick: onClick })
        );
    }
}

export default ModalAction;
module.exports = exports["default"];