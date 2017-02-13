import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Screen from "./device/screen";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItems = ::this.toggleItems;
        this.state = {
            subItems: false,
        };
    }

    toggleItems() {
        this.setState({
            subItems: !this.state.subItems
        });
    }

    render() {
        let { href, text, ...rest } = this.props;

        let subItemsClasses = classnames({
            "menu-sub-items": true,
            visible: this.state.subItems
        });

        return (
            <div {...rest} className="menu-item">
                <Choose>
                    <When condition={href}>
                        <Link to={href}>{text}</Link>
                    </When>
                    <Otherwise>
                        <span onClick={this.toggleItems}>{text}</span>
                    </Otherwise>
                </Choose>
                <If condition={this.props.children}>
                    <div className={subItemsClasses}>
                        <div className="menu-sub-items-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                </If>
            </div>
        );
    }
}

class MenuSubItem extends React.PureComponent {
    render() {
        let { text, href, ...rest } = this.props;
        return (
            <div {...rest} className="menu-sub-item">
                <Choose>
                    <When condition={href}>
                        <Link to={href}>{text}</Link>
                    </When>
                    <Otherwise>
                        <span>{text}</span>
                    </Otherwise>
                </Choose>
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.hide = ::this.hide;
        this.onScreenChange = ::this.onScreenChange;
        this.state = {
            visible: this.props.visible,
            screen: Screen.getScreen()
        };
    }

    componentDidMount() {
        Screen.onScreenChange(this.onScreenChange);
    }

    componentWillUnmount() {
        Screen.offScreenChange(this.onScreenChange);
    }

    onScreenChange(screen) {
        this.setState({
            screen: screen
        });
    }

    toggleItems() {
        this.setState({
            subItems: !this.state.subItems
        });
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
            visible: (
                nextProps.visible != null
                    ? nextProps.visible
                    : this.state.visible
            )
        });
    }

    render() {
        let {
            children,
            left,
            right,
            visible,
            onShow,
            onHide,
            style,
            ...rest
        } = this.props;

        let classes = classnames({
            menu: true,
            fixed: true,
            left: left,
            right: right,
            visible: visible,
            "is-mobile": this.state.screen == 'mobile',
            "is-tablet": this.state.screen == 'tablet',
            "is-desktop": this.state.screen == 'desktop',
            "is-widescreen": this.state.screen == 'widescreen'
        });

        let veilClasses = classnames({
            "menu-veil": true,
            visible: this.state.visible
        });

        return (
            <div {...rest}>
                <div className={veilClasses} onClick={this.hide} />
                <nav className={classes}>
                    {children}
                </nav>
            </div>
        );
    }
}

class MenuHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = classnames({
            "menu-header": true
        });

        let { icon, title, ...rest } = this.props;

        return (
            <div {...rest} className={classes}>
                <If condition={this.props.icon}>
                    <div className="menu-header-icon">
                        {icon}
                    </div>
                </If>
                <span className="menu-header-title">{title}</span>
            </div>
        );
    }
}

Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.SubItem = MenuSubItem;
export default Menu;