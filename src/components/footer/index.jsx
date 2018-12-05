import React from 'react';
import classnames from 'classnames';
import suitupable from '../component';

@suitupable(true, true)
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, screen, settings, ...rest } = this.props;

        let classes = classnames({
            footer: true,
            [screen]: true,
        });

        return (
            <footer {...rest} className={classes}>
                {children}
            </footer>
        );
    }
}

export default Footer;
