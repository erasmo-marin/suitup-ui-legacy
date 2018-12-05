import React from 'react';
import classnames from 'classnames';
import { NavLink as Link } from 'react-router-dom';

class NavbarSubmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            left: false
        };
    }

    onMouseEnter = () => this.setState({ hover: true });
    onMouseLeave = () => this.setState({ hover: false });

    checkSubMenuPosition = c => {
        this._submenu = c;
        if(!this._submenu || !this._submenu.getBoundingClientRect)
            return;
        const { x, width } = this._submenu.getBoundingClientRect();
        const limit = window.outerWidth;
        const boxEnd = x + width;
        const left = boxEnd > limit;
        this.setState({left});
    }

    render() {
        const { active, href, children, text, ...rest } = this.props;
        const { hover, left } = this.state;

        const menuClasses = classnames({
            active,
            'navbar-submenu-item': true
        });

        const subMenuClasses = classnames({
            "navbar-submenu": true,
            left
        });

        return (
            <Choose>
                <When condition={href}>
                    <Link
                        {...rest}
                        to={href}
                        exact
                        className={menuClasses}
                        activeClassName="active"
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <If condition={text}>
                            <span>{text}</span>
                        </If>
                        <div className={subMenuClasses}
                             style={{visibility: hover ? "visible" : "hidden" }}
                             ref={this.checkSubMenuPosition}>
                                {children}
                        </div>
                    </Link>
                </When>
                <Otherwise>
                    <div
                        {...rest}
                        className={menuClasses}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <If condition={text}>
                            <span>{text}</span>
                        </If>
                        <div className={subMenuClasses}
                             style={{visibility: hover ? "visible" : "hidden" }}
                             ref={this.checkSubMenuPosition}>
                                {children}
                        </div>
                    </div>
                </Otherwise>
            </Choose>
        );
    }
}

export default NavbarSubmenu;
