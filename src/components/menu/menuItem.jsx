import React from "react";
import PropTypes from 'prop-types';
import { NavLink as Link } from "react-router-dom";
import classnames from "classnames";
import suitupable from "../component";
import cloneDeep from "lodash/fp/cloneDeep";

@suitupable(true, true)
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItems = ::this.toggleItems;
        this.state = {
            subItemsVisible: false,
            subItemsStyle: {},
            shouldAnimate: false
        };
    }

    static contextTypes = {
        hide: PropTypes.func
    }

    toggleItems() {
        let style = cloneDeep(this.state.subItemsStyle);
        if (this.props.children)
            style.transition = `margin ${this.calculeAnimationTime(this.props.children.length)}ms ease-in`;

        this.setState({
            subItemsVisible: !this.state.subItemsVisible,
            subItemsStyle: style
        });
    }

    /*
     * Calcule animation time in miliseconds depending on children number
     */
    calculeAnimationTime(items) {
        const base = 100;
        const max = 600;
        const min = 300;

        if (!items) return min;
        if (base * items > max) return max;
        if (base * items < min) return min;
        return base * items;
    }

    componentDidMount() {
        this.state.shouldAnimate = true;
    }

    shouldHide = () => {
        if(this.props.hideOnRedirect && this.context.hide) {
            this.context.hide();
        }
    }

    render() {
        let { active, hideOnRedirect, children, href, text, screen, settings, focused, ...rest } = this.props;
        let { subItemsStyle, subItemsVisible, shouldAnimate } = this.state;

        subItemsStyle.marginTop = "0px";
        let height = 0;

        if (this._subitems) {
            height = this._subitems.offsetHeight;
            if (subItemsVisible) {
                subItemsStyle.marginTop = "0px";
            } else {
                subItemsStyle.marginTop = `-${height}px`;
            }
        }
        this.state.subItemsStyle = cloneDeep(subItemsStyle);

        const buttonClasses = classnames({
            "menu-button": true,
            "focus": focused
        });

        const itemClasses = classnames({
            "menu-item": true,
            "active": subItemsVisible || active
        })

        return (
            <div>
                <Choose>
                    <When condition={href}>
                        <Link exact to={href} activeClassName="active" onClick={this.shouldHide}>
                            <div {...rest} className={itemClasses}>
                                <div className={buttonClasses}><span>{text}</span></div>
                            </div>
                        </Link>
                    </When>
                    <Otherwise>
                        <div {...rest} className={itemClasses}>
                            <div
                                className={buttonClasses}
                                onClick={this.toggleItems}
                            >
                                <span>{text}</span>
                            </div>
                        </div>
                    </Otherwise>
                </Choose>
                <If condition={this.props.children}>
                    <div className="menu-sub-items">
                        <div
                            className="menu-sub-items-wrapper"
                            ref={c => this._subitems = c}
                            style={subItemsStyle}
                        >
                            {children}
                        </div>
                    </div>
                </If>
            </div>
        );
    }
}

export default MenuItem;
