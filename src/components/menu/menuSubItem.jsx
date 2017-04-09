import React from "react";
import PropTypes from 'prop-types';
import suitupable from "../component";
import { NavLink as Link } from "react-router-dom";

@suitupable(true, true)
class MenuSubItem extends React.PureComponent {

    static contextTypes = {
        hide: PropTypes.func
    }

    shouldHide = () => {
        if(this.props.hideOnRedirect && this.context.hide) {
            this.context.hide();
        }
    }

    render() {
        let { hideOnRedirect, text, href, screen, settings, ...rest } = this.props;

        const content = (
            <div {...rest} className="menu-sub-item">
                <span>{text}</span>
            </div>
        );

        return (
            <Choose>
                <When condition={href}>
                    <Link exact to={href} activeClassName="active" onClick={this.shouldHide}>
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
