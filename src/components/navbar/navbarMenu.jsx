import React from 'react';
import classnames from 'classnames';
import { NavLink as Link } from 'react-router-dom';

class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    onMouseEnter = () => this.setState({ hover: true });
    onMouseLeave = () => this.setState({ hover: false });

    render() {
        const { active, href, children, text, left, ...rest } = this.props;
        const { hover } = this.state;

        const menuClasses = classnames({
            active,
            'navbar-menu': true,
        });

        const subMenuClasses = classnames({
            "navbar-submenu": true,
            left
        });

        return (
            <Choose>
                <When condition={href}>
                    <li>
                        <Link
                            {...rest}
                            to={href}
                            exact
                            className={menuClasses}
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
                            className={menuClasses}
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                        >
                            <span>{text}</span>
                            <If condition={hover}>
                                <div className={subMenuClasses}>{children}</div>
                            </If>
                        </div>
                    </li>
                </Otherwise>
            </Choose>
        );
    }
}

export default NavbarMenu;
