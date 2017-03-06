import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import suitupable from "../component";
import cloneDeep from "lodash/cloneDeep";

@suitupable class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItems = ::this.toggleItems;
        this.state = {
            subItemsVisible: false,
            subItemsStyle: {},
            shouldAnimate: false,
        };
    }

    toggleItems() {
        let style = cloneDeep(this.state.subItemsStyle);
        if (this.props.children)
            style.transition = `margin ${this.calculeAnimationTime(
                this.props.children.length,
            )}ms ease-in`;

        this.setState({
            subItemsVisible: !this.state.subItemsVisible,
            subItemsStyle: style,
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

    render() {
        let { href, text, screen, focused, ...rest } = this.props;
        let { subItemsStyle, subItemsVisible, shouldAnimate } = this.state;

        subItemsStyle.marginTop = "0px";
        let height = 0;

        if (this._subitems) {
            height = this._subitems.offsetHeight;
            if (this.state.subItemsVisible) {
                subItemsStyle.marginTop = "0px";
            } else {
                subItemsStyle.marginTop = `-${height}px`;
            }
        }
        this.state.subItemsStyle = cloneDeep(subItemsStyle);

        let buttonClasses = classnames({
            "menu-button": true,
            focus: focused,
        });

        return (
            <div {...rest} className="menu-item">
                <Choose>
                    <When condition={href}>
                        <Link to={href}>
                            <div className={buttonClasses}>{text}</div>
                        </Link>
                    </When>
                    <Otherwise>
                        <div
                            className={buttonClasses}
                            onClick={this.toggleItems}
                        >
                            {text}
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
                            {this.props.children}
                        </div>
                    </div>
                </If>
            </div>
        );
    }
}

export default MenuItem;
