import React from "react";
import Tab from "./tab";
import Box from "../box/box";
import classnames from "classnames";
import isObject from "lodash/fp/isObject";
import suitupable from "../component";

@suitupable(true, true)
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.onTabClick = ::this.onTabClick;

        let { children } = this.props;
        if (!children.map) children = [children];

        let activeTab = 1;
        if (this.props.active) {
            activeTab = this.props.active;
        }

        this.state = {
            activeTab: children[activeTab - 1],
            activeTabIndicatorOffset: (activeTab - 1) * 100 / children.length +
                "%",
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
        let { children, style, indicatorColor, screen, ...rest } = this.props;
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

        return (
            <div {...rest} className="tabs">
                <div style={style} className="tabs-buttons">
                    <Box horizontal gutter="0" columns={children.length}>
                        {children.map((child, index) => {
                            let classes = classnames({
                                tab: true,
                                active: this.state.activeTab == child
                            });

                            return (
                                <Box.Child key={index} wide={1}>
                                    <div
                                        style={
                                            child.props
                                                ? child.props.style
                                                : null
                                        }
                                        className={classes}
                                        onClick={() => {
                                            this.onTabClick(child, index);
                                        }}
                                    >
                                        {child.props.title}
                                    </div>
                                </Box.Child>
                            );
                        })}
                    </Box>
                    <div
                        className="active-tab-indicator"
                        style={indicatorStyle}
                    />
                </div>
                {activeTab}
            </div>
        );
    }
}

Tabs.Tab = Tab;

Tabs.propTypes = {
    children: function(props, propName, componentName) {
        const prop = props[propName];

        let error = null;
        React.Children.forEach(prop, function(child) {
            if (child.type.name != "Tabs.Tab" && child.type.name != "Tab") {
                error = new Error(
                    "`" +
                        componentName +
                        "` children should be of type `Tabs.Tab`, instead it was of type " +
                        child.type.name
                );
            }
        });
        return error;
    }
};

export default Tabs;
