import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable
class CardContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = {
            "card-content": true
        };

        classes = classnames(classes);

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

export default CardContent;