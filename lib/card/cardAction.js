import React from "react";
import classnames from "classnames";
import Button from "../button";

class CardAction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = {
            "card-action": true,
            start: this.props.start,
            end: this.props.end
        };

        classes = classnames(classes);

        return React.createElement(
            "div",
            { className: classes },
            React.createElement(Button, { text: this.props.text, onClick: this.props.onClick })
        );
    }
}

export default CardAction;