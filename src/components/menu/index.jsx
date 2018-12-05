import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import suitupable from '../component';
import MenuHeader from './menuHeader';
import MenuItem from './menuItem';
import MenuSubItem from './menuSubItem';
import isArray from 'lodash/fp/isArray';

@suitupable(true, true)
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            focusedItem: -1,
        };
    }

    static childContextTypes = {
        hide: PropTypes.func,
    };

    getChildContext() {
        return {
            hide: this.hide,
        };
    }

    toggleItems = () =>
        this.setState({
            subItems: !this.state.subItems,
        });

    hide = () => {
        this.setState({
            visible: false,
        });
        this.props.onHide && this.props.onHide();
    };

    show = () => {
        this.setState({
            visible: true,
        });
        this.props.onShow && this.props.onShow();
    };

    setActiveItem = index =>
        this.setState({
            focusedItem: index,
        });

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible != null ? nextProps.visible : this.state.visible,
        });
    }

    render() {
        let { children, left, right, visible, onShow, onHide, style, screen, settings, ...rest } = this.props;

        if (!isArray(children)) {
            children = [children];
        }

        let classes = classnames({
            menu: true,
            fixed: true,
            left: left,
            right: right,
            visible: visible,
            [`is-${screen}`]: true,
        });

        let veilClasses = classnames({
            'menu-veil': true,
            visible: this.state.visible,
        });

        return (
            <div {...rest}>
                <div className={veilClasses} onClick={this.hide} />
                <nav className={classes}>{children}</nav>
            </div>
        );
    }
}

Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.SubItem = MenuSubItem;

export default Menu;
