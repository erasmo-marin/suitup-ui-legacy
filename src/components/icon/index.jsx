import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable(true, true)
class Icon extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { size, circle, name, screen, settings, ...rest } = this.props;

        let classes = {
            "material-icons": true,
            [`md-${size}`]: true,
            circle: circle,
            [screen]: true
        };

        classes = classnames(classes);

        return (
            <i {...rest} className={classes}>
                {name}
            </i>
        );
    }
}

export default Icon;