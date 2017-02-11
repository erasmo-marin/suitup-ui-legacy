import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

class ModalContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, ...rest } = this.props;

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