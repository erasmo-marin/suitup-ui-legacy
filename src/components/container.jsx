import React from "react";
import classnames from "classnames";
import Screen from "./device/screen";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.onScreenChange = ::this.onScreenChange;
        this.state = {
            screen: Screen.getScreen()
        }
    }

    componentDidMount() {
        this.screenListener = Screen.onScreenChange(this.onScreenChange);
    }

    componentWillUnmount() {
        this.screenListener.remove();
    }

    onScreenChange(screen) {
        this.setState({
            screen: screen
        });
    }

    render() {
        let { verticalExpand, children, ...rest } = this.props;

        let classes = {
            container: true,
            "full-height": verticalExpand,
            "mobile-wide": this.state.screen == 'mobile',
            "tablet-wide": this.state.screen == 'tablet',
            "desktop-wide": this.state.screen == 'desktop',
            "widescreen-wide": this.state.screen == 'widescreen'
        };

        classes = classnames(classes);

        return (
            <div {...rest} className={classes}>
                {children}
            </div>
        );
    }
}

export default Container;