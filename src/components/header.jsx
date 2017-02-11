import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { fixed, top, bottom, children, ...rest } = this.props;

        let classes = classnames({
            fixed: fixed,
            top: top,
            bottom: bottom
        });

        return (
            <header {...rest} className={classes}>
                {children}
            </header>
        );
    }
}

export default Header;