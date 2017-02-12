import React from "react";
import classnames from "classnames";
import Button from "../button";

class ModalAction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { text, onClick, start, end, ...rest } = this.props;

        let classes = {
            "modal-action": true,
            start: start,
            end: end
        };

        classes = classnames(classes);

        return (
            <div {...rest} className={classes}>
                <Button text={text} onClick={onClick} />
            </div>
        );
    }
}

export default ModalAction;