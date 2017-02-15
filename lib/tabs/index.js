var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import Tab from "./tab";
import Box from "../box/box";


class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.onTabClick = this.onTabClick.bind(this);

        let { children } = this.props;
        if (!children.map) children = [children];

        let activeTab = 1;
        if (this.props.active) {
            activeTab = this.props.active;
        }

        this.state = {
            activeTab: null,
            activeTabIndicatorOffset: (activeTab - 1) * 100 / children.length + "%",
            activeTabIndicatorWidth: 100 / children.length + "%"
        };
    }

    onTabClick(tab, index) {
        if (tab == this.state.activeTab) return;

        let { children, onChange } = this.props;
        if (!children.map) children = [children];

        let activeTabIndicatorWidth = 100 / children.length + "%";
        let activeTabIndicatorOffset = index * (100 / children.length) + "%";

        this.setState({
            activeTab: tab,
            activeTabIndex: index,
            activeTabIndicatorOffset: activeTabIndicatorOffset,
            activeTabIndicatorWidth: activeTabIndicatorWidth
        });

        if (onChange) {
            onchange(index);
        }
    }

    /*
     * Style tag is applyied only to tabs buttons,
     * that's the expected behavior. But at the same
     * time, other props like className are applied
     * to the root container.
     */
    render() {
        let _props = this.props,
            { children, style, indicatorColor } = _props,
            rest = _objectWithoutProperties(_props, ["children", "style", "indicatorColor"]);
        let {
            activeTab,
            activeTabIndicatorOffset,
            activeTabIndicatorWidth
        } = this.state;

        if (!activeTab) {
            activeTab = children[0];
        }

        if (!children.map) {
            children = [children];
        }

        let indicatorStyle = {
            width: activeTabIndicatorWidth,
            marginLeft: activeTabIndicatorOffset,
            background: indicatorColor
        };

        return React.createElement(
            "div",
            _extends({}, rest, { className: "tabs" }),
            React.createElement(
                "div",
                { style: style, className: "tabs-buttons" },
                React.createElement(
                    Box,
                    { horizontal: true, gutter: "0", columns: children.length },
                    children.map((child, index) => {
                        return React.createElement(
                            Box.Child,
                            { key: index, wide: 1 },
                            React.createElement(
                                "div",
                                {
                                    style: child.props ? child.props.style : null,
                                    className: "tab",
                                    onClick: () => {
                                        this.onTabClick(child, index);
                                    }
                                },
                                child.props.title
                            )
                        );
                    })
                ),
                React.createElement("div", {
                    className: "active-tab-indicator",
                    style: indicatorStyle
                })
            ),
            activeTab
        );
    }
}

Tabs.Tab = Tab;

Tabs.propTypes = {
    children: function (props, propName, componentName) {
        const prop = props[propName];

        let error = null;
        React.Children.forEach(prop, function (child) {
            if (child.type.name != "Tabs.Tab" && child.type.name != "Tab") {
                error = new Error("`" + componentName + "` children should be of type `Tabs.Tab`, instead it was of type " + child.type.name);
            }
        });
        return error;
    }
};

export default Tabs;