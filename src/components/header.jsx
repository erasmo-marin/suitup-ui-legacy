import React from "react";
import classnames from "classnames";
import Screen from "./device/screen";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onScreenChange = ::this.onScreenChange;
        this.state = {
            screen: Screen.getScreen()
        }
    }

    componentDidMount() {
        Screen.onScreenChange(this.onScreenChange);
    }

    componentWillUnmount() {
        Screen.offScreenChange(this.onScreenChange);
    }

    onScreenChange(screen) {
        this.setState({
            screen: screen
        });
    }

    render() {
        let { fixed, top, bottom, children, ...rest } = this.props;

        let classes = classnames({
            "fixed": fixed,
            "top": top,
            "bottom": bottom,
            "is-mobile": this.state.screen == 'mobile',
            "is-tablet": this.state.screen == 'tablet',
            "is-desktop": this.state.screen == 'desktop',
            "is-widescreen": this.state.screen == 'widescreen'
        });

        return (
            <header {...rest} className={classes}>
                {children}
            </header>
        );
    }
}

export default Header;