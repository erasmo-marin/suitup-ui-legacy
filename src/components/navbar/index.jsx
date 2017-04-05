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

Navbar.propTypes = {
    children: function(props, propName, componentName) {
        const prop = props[propName];

        let error = null;
        React.Children.forEach(prop, function(child) {
            if (
                child.type.name != "Navbar.Menu" &&
                child.type.name != "NavbarMenu"
            ) {
                error = new Error(
                    "`" +
                        componentName +
                        "` children should be of type `Navbar.Menu`, instead it was of type " +
                        child.type.name
                );
            }
        });
        return error;
    }
};

export default Navbar;
