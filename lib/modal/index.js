var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import { NotifyResize } from "react-notify-resize";
import ModalAction from "./modalAction";
import ModalContent from "./modalContent";
import ModalFooter from "./modalFooter";
import shallowCompare from "react-addons-shallow-compare";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.centerVertically = this.centerVertically.bind(this);
        window.cv = this.centerVertically;
    }

    componentDidMount() {
        let c = this.renderModal(this.props);
        ReactDOM.render(c, document.getElementById("modalMountPoint"));
        if (this.props.visible) {
            setTimeout(() => {
                this.modal.classList.add("visible");
            }, 500);
        }
        window.addEventListener("resize", this.centerVertically);
    }

    shouldComponentUpdate(nextProps) {
        return shallowCompare(this, nextProps);
    }

    componentWillReceiveProps(nextProps) {
        if (!shallowCompare(this, nextProps)) {
            return;
        }

        let c = this.renderModal(nextProps);
        ReactDOM.render(c, document.getElementById("modalMountPoint"));

        if (nextProps.visible) {
            this.show();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.centerVertically);
    }

    show() {
        var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
        document.body.style.margin = "0px " + scrollBarWidth + "px 0px 0px";
        document.body.style.overflow = "hidden";
        this.centerVertically();
        this.modal.classList.add("visible");
        document.getElementById("layout").style.filter = "blur(5px)";

        if (this.props.onShow) {
            this.props.onShow();
        }

        if (this.props.onChange) {
            this.props.onChange(true);
        }
    }

    hide() {
        this.modal.classList.remove("visible");
        document.body.style.margin = "";
        document.body.style.overflow = "";
        document.getElementById("layout").style.filter = "none";

        if (this.props.onHide) {
            this.props.onHide();
        }

        if (this.props.onChange) {
            this.props.onChange(false);
        }
    }

    centerVertically() {
        let diff = window.innerHeight - this.modalInner.offsetHeight;
        if (diff > 0) {
            this.modalInner.style.marginTop = diff / 2 + "px";
        }
    }

    preventPropagation(e) {
        if (!e) return;
        e.preventDefault();
        e.stopPropagation();
    }

    renderModal(props) {
        let _props = this.props,
            {
            children,
            onHide,
            onShow,
            onChange,
            visible
        } = _props,
            rest = _objectWithoutProperties(_props, ["children", "onHide", "onShow", "onChange", "visible"]);

        let classes = classnames({
            "modal-container": true
        });

        return React.createElement(
            "div",
            _extends({}, rest, {
                className: classes,
                ref: c => this.modal = c,
                onClick: this.hide
            }),
            React.createElement(
                "div",
                {
                    className: "modal",
                    ref: c => this.modalInner = c,
                    style: { position: "relative" },
                    onClick: this.preventPropagation
                },
                React.createElement(NotifyResize, { onResize: this.centerVertically }),
                children
            )
        );
    }

    render() {
        return null;
    }
}

Modal.Action = ModalAction;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
module.exports = exports["default"];