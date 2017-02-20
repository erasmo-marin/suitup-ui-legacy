import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable
class ModalFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, screen, ...rest } = this.props;

        let classes = {
            "modal-footer": true
        };

        classes = classnames(classes);

        return (
            <div {...rest} className={classes}>
                {children}
            </div>
        );
    }
}

export default ModalFooter;