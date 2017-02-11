function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _props = this.props,
            { children } = _props,
            rest = _objectWithoutProperties(_props, ["children"]);

        return React.createElement(
            "footer",
            rest,
            children
        );
    }
}

export default Footer;
module.exports = exports["default"];