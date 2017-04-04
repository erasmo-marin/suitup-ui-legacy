import React from "react";
import classnames from "classnames";
import { NavLink as Link } from "react-router-dom";

class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    onMouseEnter = () => this.setState({ hover: true });
    onMouseLeave = () => this.setState({ hover: false });

    render() {
        let { href, children, text, ...rest } = this.props;
        let { hover } = this.state;
        return (
            <Choose>
                <When condition={href}>
                    <li>
                        <Link
                            {...rest}
                            to={href}
                            exact
                            className="navbar-menu"
                            activeClassName="active"
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                        >
                            <span>{text}</span>
                        </Link>
                    </li>
                </When>
                <Otherwise>
                    <li>
                        <div
                            {...rest}
                            className="navbar-menu"
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                        >
                            <span>{text}</span>
                            <If condition={hover}>
                                <div className="navbar-submenu">
                                    {children}
                                </div>
                            </If>
                        </div>
                    </li>
                </Otherwise>
            </Choose>
        );
    }
}

export default NavbarMenu;
