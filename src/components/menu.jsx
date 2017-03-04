import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import suitupable from "./component";
import cloneDeep from "lodash/cloneDeep";

@suitupable class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItems = ::this.toggleItems;
        this.state = {
            subItemsVisible: false,
            subItemsStyle: {},
            shouldAnimate: false,
        };
    }

    toggleItems() {
        let style = cloneDeep(this.state.subItemsStyle);
        if (this.props.children)
            style.transition = `margin ${this.calculeAnimationTime(
                this.props.children.length,
            )}ms ease-in`;

        this.setState({
            subItemsVisible: !this.state.subItemsVisible,
            subItemsStyle: style,
        });
    }

    /*
     * Calcule animation time in miliseconds depending on children number
     */
    calculeAnimationTime(items) {
        const base = 100;
        const max = 600;
        const min = 300;

        if (!items) return min;
        if (base * items > max) return max;
        if (base * items < min) return min;
        return base * items;
    }

    componentDidMount() {
        this.state.shouldAnimate = true;
    }

    render() {
        let { href, text, screen, ...rest } = this.props;
        let { subItemsStyle, subItemsVisible, shouldAnimate } = this.state;

        subItemsStyle.marginTop = "0px";
        let height = 0;

        if (this._subitems) {
            height = this._subitems.offsetHeight;
            if (this.state.subItemsVisible) {
                subItemsStyle.marginTop = "0px";
            } else {
                subItemsStyle.marginTop = `-${height}px`;
            }
        }
        this.state.subItemsStyle = cloneDeep(subItemsStyle);

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
                    <div className="menu-sub-items">
                        <div
                            className="menu-sub-items-wrapper"
                            ref={c => this._subitems = c}
                            style={subItemsStyle}
                        >
                            {this.props.children}
                        </div>
                    </div>
                </If>
            </div>
        );
    }
}

@suitupable class MenuSubItem extends React.PureComponent {
    render() {
        let { text, href, screen, ...rest } = this.props;
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

@suitupable class MenuHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = classnames({
            "menu-header": true,
        });

        let { icon, title, screen, ...rest } = this.props;

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

@suitupable class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.hide = ::this.hide;
        this.state = {
            visible: this.props.visible,
        };
    }

    toggleItems() {
        this.setState({
            subItems: !this.state.subItems,
        });
    }

    hide() {
        this.setState({
            visible: false,
        });
        if (this.props.onHide) {
            this.props.onHide();
        }
    }

    show() {
        this.setState({
            visible: true,
        });
        if (this.props.onShow) {
            this.props.onShow();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible != null
                ? nextProps.visible
                : this.state.visible,
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
            screen,
            ...rest
        } = this.props;

        let classes = classnames({
            menu: true,
            fixed: true,
            left: left,
            right: right,
            visible: visible,
            "is-mobile": screen == "mobile",
            "is-tablet": screen == "tablet",
            "is-desktop": screen == "desktop",
            "is-widescreen": screen == "widescreen",
        });

        let veilClasses = classnames({
            "menu-veil": true,
            visible: this.state.visible,
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

Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.SubItem = MenuSubItem;
export default Menu;
