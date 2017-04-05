import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable (true, true)
class Header extends React.Component {
    render() {
        let { fixed, top, bottom, children, screen, settings, ...rest } = this.props;

        let classes = classnames({
            fixed: fixed,
            top: top,
            bottom: bottom,
            [`is-${screen}`]: true
        });

        return (
            <header {...rest} className={classes}>
                {children}
            </header>
        );
    }
}

Header.displayName = "Header";
export default Header;
