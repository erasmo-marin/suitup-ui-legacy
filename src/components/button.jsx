import React from "react";
import classnames from "classnames";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = ::this.onClick;
        this.onMouseDown = ::this.onMouseDown;
        this.onMouseUp = ::this.onMouseUp;
        this.state = {
            pressed: false
        };
    }

    onClick(e) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    onMouseDown(e) {
        this.setState({
            pressed: true
        });
        if (this.props.onMouseDown) {
            this.props.onMouseDown(e);
        }
    }

    onMouseUp(e) {
        this.setState({
            pressed: false
        });
        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    }

    render() {
        let {
            text,
            children,
            transparent,
            circular,
            rounded,
            menu,
            pressed,
            type,
            onClick,
            onMouseUp,
            onMouseDown,
            flat,
            raised,
            floating,
            icon,
            ...rest
        } = this.props;

        let classes = {
            transparent: this.props.transparent,
            circular: this.props.circular,
            rounded: this.props.rounded,
            "menu-button": this.props.menu,
            pressed: this.state.pressed
        };

        classes = classnames(classes);

        return (
            <button
                {...rest}
                type={type}
                className={classes}
                onClick={this.onClick}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
            >
                {children}
                <If condition={text}>
                    <span>{text}</span>
                </If>
            </button>
        );
    }
}

export default Button;