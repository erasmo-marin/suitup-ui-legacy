import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable
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
        if (this.props.onClick && !this.props.disabled) {
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
            primary,
            primaryDark,
            primaryLight,
            accent,
            flat,
            raised,
            inverted,
            text,
            disabled,
            fullWidth,
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
            floating,
            icon,
            screen,
            ...rest
        } = this.props;

        let classes = {
            "transparent": transparent,
            "circular": circular,
            "rounded": rounded,
            "menu-button": menu,
            "pressed": this.state.pressed,
            "colored": (primary || primaryDark || primaryLight || accent),
            "primary": primary,
            "primary-dark": primaryDark,
            "primary-light": primaryLight,
            "accent": accent,
            "flat": flat,
            "raised": raised,
            "inverted": inverted,
            "disabled": disabled,
            "full-width": fullWidth
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
                <div className="light-frame">
                    {children}
                    <If condition={text}>
                        <span>{text}</span>
                    </If>
                </div>
            </button>
        );
    }
}

export default Button;