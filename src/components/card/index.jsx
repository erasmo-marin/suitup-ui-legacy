import React from 'react';
import classnames from 'classnames';
import CardContent from './cardContent';
import CardFooter from './cardFooter';
import CardAction from './cardAction';
import suitupable from '../component';

@suitupable(true, true)
class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { width, height, screen, settings, style, children, ...rest } = this.props;

        let classes = classnames({
            card: true,
            [screen]: true,
        });

        let cstyle = {
            maxWidth: width ? width : undefined,
            maxHeight: height ? height : undefined,
            width: width ? width : undefined,
            height: height ? height : undefined,
        };

        return (
            <div {...rest} className={classes} style={{ ...cstyle, ...style }}>
                {children}
            </div>
        );
    }
}

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Action = CardAction;

export default Card;
