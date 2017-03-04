import React from "react";
import classnames from "classnames";
import suitupable from "../component";
import MenuHeader from "./menuHeader";
import MenuItem from "./menuItem";
import MenuSubItem from "./menuSubItem";

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