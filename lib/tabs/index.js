function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import Box from '../box/box';

class Tabs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let _props = this.props,
            { children } = _props,
            rest = _objectWithoutProperties(_props, ["children"]);

        return React.createElement(
            "div",
            { className: "tabs" },
            React.createElement(
                "div",
                { className: "tabs-buttons" },
                React.createElement(
                    Box,
                    { horizontal: true, gutter: "0" },
                    children.map((child, index) => {
                        return React.createElement(
                            Box.Child,
                            { key: index },
                            child
                        );
                    })
                ),
                React.createElement("div", { className: "active-tab-indicator" })
            )
        );
    }

}

export default Tabs;
module.exports = exports["default"];