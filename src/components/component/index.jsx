import React from "react";
import Screen from "../device/screen";
import Settings from "../settings";
import mapKeys from "lodash/mapKeys";
import cloneDeep from "lodash/fp/cloneDeep";

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const suitupable = (
    listenScreen = true,
    listenSettings = true
) =>
    Child => {
        class Component extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    screen: listenScreen ? Screen.getScreen() : undefined,
                    settings: listenSettings
                        ? Settings.getSettings()
                        : undefined
                };
            }

            componentDidMount() {
                if (listenScreen)
                    this.screenListener = Screen.onScreenChange(
                        this.onScreenChange
                    );
                if (listenSettings)
                    this.settingsListener = Settings.onSettingsChange(
                        this.onSettingsChange
                    );
            }

            onViewChange = value => {
                this.setState({
                    onView: value
                });
            };

            componentWillUnmount() {
                if (this.screenListener) this.screenListener.remove();
                if (this.settingsListener) this.settingsListener.remove();
            }

            onScreenChange = screen => {
                this.setState({ screen });
            };

            onSettingsChange = settings => {
                this.setState({ settings });
            };

            render() {
                let breakpoints = this.state.settings.Device.Breakpoints;
                let { style } = this.props;
                let originalStyle = cloneDeep(this.props.style);
                let screenStyle = {};
                let responsiveStyles = {};

                mapKeys(breakpoints, (breakpoint, breakpointName) => {
                    mapKeys(style, (property, propertyName) => {
                        if (breakpointName == propertyName) {
                            responsiveStyles[breakpointName] = property;
                            delete originalStyle[propertyName];
                        }
                    });
                });

                if (responsiveStyles[this.state.screen])
                    screenStyle = responsiveStyles[this.state.screen];

                return (
                    <Child
                        ref={c => this._child = c}
                        {...this.props}
                        style={{ ...originalStyle, ...screenStyle }}
                        screen={this.state.screen}
                        settings={this.state.settings}
                    />
                );
            }
        }
        Component.displayName = `Component(${getDisplayName(Child)})`;
        return Component;
    };

export default suitupable;
