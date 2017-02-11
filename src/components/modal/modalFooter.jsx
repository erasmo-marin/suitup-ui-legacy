import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

class ModalFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, ...rest } = this.props;

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