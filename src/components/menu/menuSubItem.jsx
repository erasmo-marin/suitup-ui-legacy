import React from "react";
import suitupable from "../component";
import { NavLink as Link } from "react-router-dom";

@suitupable(true, true)
class MenuSubItem extends React.PureComponent {
    render() {
        let { text, href, screen, settings, ...rest } = this.props;

        const content = (
            <div {...rest} className="menu-sub-item">
                <span>{text}</span>
            </div>
        );

        return (
            <Choose>
                <When condition={href}>
                    <Link exact to={href} activeClassName="active">
                        {content}
                    </Link>
                </When>
                <Otherwise>
                    <div>
                        {content}
                    </div>
                </Otherwise>
            </Choose>
        );
    }
}

export default MenuSubItem;
