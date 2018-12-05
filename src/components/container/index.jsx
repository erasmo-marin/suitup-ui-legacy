import React from 'react';
import classnames from 'classnames';
import suitupable from '../component';

@suitupable(true, true)
class Container extends React.Component {
    render() {
        let { verticalExpand, children, screen, settings, ...rest } = this.props;

        let classes = {
            container: true,
            'full-height': verticalExpand,
            [`${screen}-wide`]: true,
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
