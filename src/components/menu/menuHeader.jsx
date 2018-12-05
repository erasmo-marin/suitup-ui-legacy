import React from 'react';
import classnames from 'classnames';
import suitupable from '../component';

@suitupable(true, true)
class MenuHeader extends React.Component {
    render() {
        let classes = classnames({
            'menu-header': true,
        });

        let { icon, title, screen, settings, ...rest } = this.props;

        return (
            <div {...rest} className={classes}>
                <If condition={this.props.icon}>
                    <div className="menu-header-icon">{icon}</div>
                </If>
                <span className="menu-header-title">{title}</span>
            </div>
        );
    }
}

export default MenuHeader;
