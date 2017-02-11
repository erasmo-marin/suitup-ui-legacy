import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { verticalExpand, children, ...rest } = this.props;

        let classes = {
            container: true,
            "full-height": verticalExpand
        };

        classes = classnames(classes);

        return (
            <div {...rest} className={classes}>
                {children}
            </div>
        );
    }
}

export default Container;