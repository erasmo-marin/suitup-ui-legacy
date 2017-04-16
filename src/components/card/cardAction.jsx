import React from "react";
import classnames from "classnames";
import Button from "../button";
import suitupable from "../component";

@suitupable(true, true)
class CardAction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let { text, onClick, start, end, ...rest } = this.props;

        let classes = {
            "card-action": true,
            start: start,
            end: end
        };

        classes = classnames(classes);

        return (
            <div {...rest} className={classes}>
                <Button text={text} onClick={onClick} />
            </div>
        );
    }
}

export default CardAction;