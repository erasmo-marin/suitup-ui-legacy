import React from "react";
import classnames from "classnames";

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = {
            slide: true
        };

        classes = classnames(classes);

        return React.createElement(
            "div",
            { className: classes },
            this.props.children
        );
    }
}

export default Slide;
module.exports = exports["default"];