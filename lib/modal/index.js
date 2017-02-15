import _isEqual from "lodash/isEqual";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import classnames from "classnames";
import { NotifyResize } from "react-notify-resize";
import ModalAction from "./modalAction";
import ModalContent from "./modalContent";
import ModalFooter from "./modalFooter";

import { requestModalMount, requestModalUnmount, requestModalUpdate } from "../layout";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.renderKey = Math.random();
        this.modal = null;
    }

    componentDidMount() {
        console.log("modal mount");
        this.modal = this.renderModal(this.props);
        requestModalMount(this.modal);
    }

    componentWillUnmount() {
        requestModalUnmount(this.modal);
    }

    componentWillReceiveProps(nextProps) {

        if (_isEqual(this.props, nextProps)) return;

        console.log("modal receive props");
        this.modal = this.renderModal(nextProps);
        requestModalUpdate(this.modal);
    }

    renderModal(props) {
        return React.createElement(ModalImplementation, _extends({}, props, { key: this.renderKey }));
    }

    render() {
        return null;
    }
}

class ModalImplementation extends React.Component {
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.centerVertically = this.centerVertically.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    componentDidMount() {
        if (this.props.visible) {
            setTimeout(() => {
                this.show();
            }, 500);
        }
        window.addEventListener("resize", this.centerVertically);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.centerVertically);
    }

    preventPropagation(e) {
        if (!e) return;
        e.preventDefault();
        e.stopPropagation();
    }

    centerVertically() {
        let diff = window.innerHeight - this.modalInner.offsetHeight;
        if (diff > 0) {
            this.modalInner.style.marginTop = diff / 2 + "px";
        }
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

    render() {
        console.log("rendering modal");
        let _props = this.props,
            { visible, children } = _props,
            rest = _objectWithoutProperties(_props, ["visible", "children"]);

        return React.createElement(
            "div",
            _extends({}, rest, {
                className: "modal-container",
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
}

Modal.Action = ModalAction;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;