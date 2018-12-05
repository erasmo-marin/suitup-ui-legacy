import React from 'react';
import classnames from 'classnames';
import suitupable from '../component';

@suitupable(true, true)
class CardContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = {
            'card-content': true,
        };

        classes = classnames(classes);

        let { children, screen, settings, ...rest } = this.props;

        return (
            <div {...rest} className={classes}>
                {children}
            </div>
        );
    }
}

export default CardContent;
