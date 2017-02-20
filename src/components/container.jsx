import React from "react";
import classnames from "classnames";
import suitupable from "./component";

@suitupable
class Container extends React.Component {

    render() {
        let { verticalExpand, children, screen, ...rest } = this.props;

        let classes = {
            container: true,
            "full-height": verticalExpand,
            "mobile-wide": screen == 'mobile',
            "tablet-wide": screen == 'tablet',
            "desktop-wide": screen == 'desktop',
            "widescreen-wide": screen == 'widescreen'
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