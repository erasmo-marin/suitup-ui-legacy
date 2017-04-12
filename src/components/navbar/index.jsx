import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import suitupable from "../component";
import NavbarMenu from "./navbarMenu";
import NavbarSubmenu from "./navbarSubmenu";

@suitupable(true, true)
class Navbar extends React.Component {

    render() {
        let { screen, settings, ...rest } = this.props;

        let classes = classnames({
            navbar: true,
            [screen]: true
        });

        return (
            <nav {...rest} className={classes}>
                <ul>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

Navbar.Menu = NavbarMenu;
Navbar.Submenu = NavbarSubmenu;

export default Navbar;
