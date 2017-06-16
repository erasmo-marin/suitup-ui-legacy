import React from "react";
import classnames from "classnames";
import { NotifyResize } from "@zippytech/react-notify-resize";
import ModalAction from "./modalAction";
import ModalContent from "./modalContent";
import ModalFooter from "./modalFooter";
import isEqual from "lodash/fp/isEqual";
import {
    requestModalMount,
    requestModalUnmount,
    requestModalUpdate
} from "../layout";
import suitupable from "../component";

@suitupable(true, true)
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.renderKey = Math.random();
        this.modal = null;
    }

    componentDidMount() {
        this.modal = this.renderModal(this.props);
        requestModalMount(this.modal);
    }

    componentWillUnmount() {
        requestModalUnmount(this.modal);
    }

    componentWillReceiveProps(nextProps) {
        if (isEqual(nextProps, this.props)) return;

        this.modal = this.renderModal(nextProps);
        requestModalUpdate(this.modal);
    }

    renderModal(props) {
        return <ModalImplementation {...props} key={this.renderKey} />;
    }

    render() {
        return null;
    }
}

@suitupable(true, true)
class ModalImplementation extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    componentDidMount() {
        if (this.props.visible) {
            setTimeout(
                () => {
                    this.show();
                },
                500
            );
        }
        window.addEventListener("resize", this.centerVertically);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.centerVertically);
    }

    preventPropagation = (e) => {
        if (!e) return;
        e.preventDefault();
        e.stopPropagation();
    }

    centerVertically = () => {
        let diff = window.innerHeight - this.modalInner.offsetHeight;
        if (diff > 0) {
            this.modalInner.style.marginTop = diff / 2 + "px";
        }
    }

    show = () => {
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

    onBlur = () => (this.props.hideOnBlur && this.hide());

    hide = () => {
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
        let { visible, children, screen, settings, style, hideOnBlur, ...rest } = this.props;
        let modalStyle = { position: "relative", ...style };

        return (
            <div
                {...rest}
                className="modal-container"
                ref={c => this.modal = c}
                onClick={this.onBlur}
            >
                <div
                    className="modal"
                    ref={c => this.modalInner = c}
                    style={modalStyle}
                    onClick={this.preventPropagation}
                >
                    <NotifyResize onResize={this.centerVertically} />
                    {children}
                </div>
            </div>
        );
    }
}

Modal.Action = ModalAction;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
