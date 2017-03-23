import React from "react";
import suitupable from "../component";
import { Link } from "react-router-dom";

@suitupable(true, true)
class MenuSubItem extends React.PureComponent {
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

export default MenuSubItem;
