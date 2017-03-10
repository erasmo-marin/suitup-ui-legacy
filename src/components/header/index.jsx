import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable class Header extends React.Component {
    render() {
        let { fixed, top, bottom, children, screen, ...rest } = this.props;

        let classes = classnames({
            fixed: fixed,
            top: top,
            bottom: bottom,
            "is-mobile": screen == "mobile",
            "is-tablet": screen == "tablet",
            "is-desktop": screen == "desktop",
            "is-widescreen": screen == "widescreen"
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
