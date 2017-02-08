var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classnames from 'classnames';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.toggleItems = this.toggleItems.bind(this);
        this.state = {
            subItems: false
        };
    }

    toggleItems() {
        this.setState({
            subItems: !this.state.subItems
        });
    }

    render() {
        let _props = this.props,
            { href, text } = _props,
            rest = _objectWithoutProperties(_props, ['href', 'text']);

        let subItemsClasses = classnames({
            "menu-sub-items": true,
            "visible": this.state.subItems
        });

        return React.createElement(
            'div',
            _extends({}, rest, { className: 'menu-item' }),
            href ? React.createElement(
                Link,
                { to: href },
                text
            ) : React.createElement(
                'span',
                { onClick: this.toggleItems },
                text
            ),
            this.props.children ? React.createElement(
                'div',
                { className: subItemsClasses },
                React.createElement(
                    'div',
                    { className: 'menu-sub-items-wrapper' },
                    this.props.children
                )
            ) : null
        );
    }
}

class SubItem extends React.Component {
    render() {
        let _props2 = this.props,
            { text, href } = _props2,
            rest = _objectWithoutProperties(_props2, ['text', 'href']);
        return React.createElement(
            'div',
            _extends({}, rest, { className: 'menu-sub-item' }),
            href ? React.createElement(
                Link,
                { to: href },
                text
            ) : React.createElement(
                'span',
                null,
                text
            )
        );
    }
}

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this);
        this.state = {
            visible: this.props.visible
        };
    }

    hide() {
        this.setState({
            visible: false
        });
        if (this.props.onHide) {
            this.props.onHide();
        }
    }

    show() {
        this.setState({
            visible: true
        });
        if (this.props.onShow) {
            this.props.onShow();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible != null ? nextProps.visible : this.state.visible
        });
    }

    render() {

        let _props3 = this.props,
            { children, left, right, visible, onShow, onHide, style } = _props3,
            rest = _objectWithoutProperties(_props3, ['children', 'left', 'right', 'visible', 'onShow', 'onHide', 'style']);

        let classes = classnames({
            menu: true,
            fixed: true,
            left: left,
            right: right,
            visible: visible
        });

        let veilClasses = classnames({
            "menu-veil": true,
            visible: this.state.visible
        });

        return React.createElement(
            'div',
            rest,
            React.createElement('div', { className: veilClasses, onClick: this.hide }),
            React.createElement(
                'nav',
                { className: classes },
                children
            )
        );
    }
}

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let classes = classnames({
            "menu-header": true
        });

        let _props4 = this.props,
            { icon, title } = _props4,
            rest = _objectWithoutProperties(_props4, ['icon', 'title']);

        return React.createElement(
            'div',
            _extends({}, rest, { className: classes }),
            this.props.icon ? React.createElement(
                'div',
                { className: 'menu-header-icon' },
                icon
            ) : null,
            React.createElement(
                'span',
                { className: 'menu-header-title' },
                title
            )
        );
    }
}

Menu.Header = Header;
Menu.Item = Item;
Menu.SubItem = SubItem;
export default Menu;
module.exports = exports['default'];