import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable
class ModalContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, screen, ...rest } = this.props;

        let classes = {
            "modal-content": true
        };

        classes = classnames(classes);

        return (
            <div {...rest} className={classes}>
                {children}
            </div>
        );
    }
}

export default ModalContent;