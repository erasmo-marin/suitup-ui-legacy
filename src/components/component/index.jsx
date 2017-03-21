import React from "react";
import Screen from "../device/screen";
import Settings from "../settings";
import map from "lodash/fp/map";
import cloneDeep from "lodash/fp/cloneDeep";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || 
         WrappedComponent.name || 
         'Component'
}

function suitupable(Child) {
    class Component extends React.Component {
        constructor(props) {
            super(props);
            this.onScreenChange = ::this.onScreenChange;
            this.state = {
                screen: Screen.getScreen(),
                settings: Settings.getSettings()
            }
        }

        componentDidMount() {
            this.screenListener = Screen.onScreenChange(this.onScreenChange);
        }

        componentWillUnmount() {
            this.screenListener.remove();   
        }

        onScreenChange(screen) {
            this.setState({screen})
        }

        onSettingsChange(settings) {
            this.setState({settings});
        }

        render() {
            let breakpoints = this.state.settings.Device.Breakpoints;
            let { style } = this.props;
            let originalStyle = cloneDeep(this.props.style);
            let screenStyle = {};
            let responsiveStyles = {};

            map((breakpoint, breakpointName) => {
                map((property, propertyName) => {
                    if(breakpointName == propertyName) {
                        responsiveStyles[breakpointName] = property;
                        delete originalStyle[propertyName];
                    }
                }, style);
            }, breakpoints);

            if(responsiveStyles[this.state.screen])
                screenStyle = responsiveStyles[this.state.screen];

            return <Child {...this.props} style={{...originalStyle, ...screenStyle}} screen={this.state.screen}/>
        }
    }

    Component.displayName = `Component(${getDisplayName(Child)})`;
    return Component;
}

export default suitupable;