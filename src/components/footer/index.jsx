import React from "react";
import suitupable from "../component";

@suitupable
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, screen, ...rest } = this.props;

        return (
            <footer {...rest}>
                {children}
            </footer>
        );
    }
}

export default Footer;