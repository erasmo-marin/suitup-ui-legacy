import React from "react";
import Tab from "./tab";
import Box from "../box/box";
import { isObject } from "lodash";

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
            activeTab: null,
            activeTabIndicatorOffset: (
                (activeTab - 1) * 100 / children.length + "%"
            ),
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

    render() {
        let { children, ...rest } = this.props;
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
            marginLeft: activeTabIndicatorOffset
        };

        return (
            <div {...rest} className="tabs">
                <div className="tabs-buttons">
                    <Box horizontal gutter="0" columns={children.length}>
                        {children.map((child, index) => {
                            return (
                                <Box.Child key={index} wide={1}>
                                    <div
                                        className="tab"
                                        onClick={() => {
                                            this.onTabClick(child, index);
                                        }}
                                    >
                                        <span>{child.props.title}</span>
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