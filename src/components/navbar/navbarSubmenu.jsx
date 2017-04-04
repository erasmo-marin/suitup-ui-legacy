import React from "react";
import classnames from "classnames";
import { NavLink as Link } from "react-router-dom";

class NavbarSubmenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    onMouseEnter = () => this.setState({ hover: true });
    onMouseLeave = () => this.setState({ hover: false });

    render() {
        let { href, children, text, ...rest } = this.props;
        let { hover } = this.state;
        return (
            <Choose>
                <When condition={href}>
                    <Link
                        {...rest}
                        to={href}
                        exact
                        className="navbar-submenu-item"
                        activeClassName="active"
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <If condition={text}>
                            <span>{text}</span>
                        </If>
                        {children}
                    </Link>
                </When>
                <Otherwise>
                    <div
                        {...rest}
                        className="navbar-submenu-item"
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <If condition={text}>
                            <span>{text}</span>
                        </If>
                        {children}
                    </div>
                </Otherwise>
            </Choose>
        );
    }
}

export default NavbarSubmenu;
