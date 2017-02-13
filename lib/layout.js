import _findIndex from "lodash/findIndex";
import _without from "lodash/without";
import _isArray from "lodash/isArray";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";

import { EventEmitter } from "events";
import classnames from "classnames";
import Screen from "./device/screen";

class ModalMountController extends EventEmitter {

    constructor(args) {
        super(args);
        this.modals = [];
        this.changeEvent = "modalsChanged";
        this.requestModalUpdate = this.requestModalUpdate.bind(this);
        this.requestModalMount = this.requestModalMount.bind(this);
        this.requestModalUnmount = this.requestModalUnmount.bind(this);
    }

    requestModalMount(component) {
        console.log(component);
        this.modals.push(component);
        this.emitChange(this.modals);
    }

    requestModalUpdate(component) {
        let modalIndex = _findIndex(this.modals, { key: component.key });
        this.modals[modalIndex] = component;
        this.emitChange(this.modals);
    }

    requestModalUnmount(component) {
        this.modals = _without(this.modals, component);
        this.emitChange(this.modals);
    }

    emitChange(modals) {
        this.emit(this.changeEvent, modals);
    }

    onModalsChange(callback) {
        this.on(this.changeEvent, callback);
    }

    offModalsChange(callback) {
        this.removeListener(this.changeEvent, callback);
    }
}

const modalMountController = new ModalMountController();
const requestModalMount = modalMountController.requestModalMount;
const requestModalUnmount = modalMountController.requestModalUnmount;
const requestModalUpdate = modalMountController.requestModalUpdate;

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.onModalsChange = this.onModalsChange.bind(this);
        this.modalsController = modalMountController;
        this.onScreenChange = this.onScreenChange.bind(this);
        this.state = {
            modals: [],
            screen: Screen.getScreen()
        };
    }

    componentDidMount() {
        modalMountController.onModalsChange(this.onModalsChange);
        Screen.onScreenChange(this.onScreenChange);
    }

    onScreenChange(screen) {
        this.setState({
            screen: screen
        });
    }

    componentWillUnmount() {
        modalMountController.offModalsChange(this.onModalsChange);
        Screen.offScreenChange(this.onScreenChange);
    }

    onModalsChange() {
        this.setState({
            modals: this.modalsController.modals
        });
    }

    findHeader(children) {
        if (_isArray(children)) {
            for (let i in children) {
                let child = children[i];
                if (child.type.name == "Header") {
                    return child;
                }
            }
        } else if (isObject(children)) {
            if (children.type.name == "Header") return children;
        }
        return null;
    }

    render() {
        let _props = this.props,
            { children } = _props,
            rest = _objectWithoutProperties(_props, ["children"]);

        let header = this.findHeader(children);
        let classes = classnames({
            layout: true,
            "fixed-header": header && header.props.fixed ? true : false,
            "is-mobile": this.state.screen == 'mobile',
            "is-tablet": this.state.screen == 'tablet',
            "is-desktop": this.state.screen == 'desktop',
            "is-widescreen": this.state.screen == 'widescreen'
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                _extends({}, rest, { className: classes, id: "layout" }),
                children
            ),
            React.createElement(
                "div",
                { className: "modal-mount-point" },
                this.state.modals
            )
        );
    }
}

export { Layout, requestModalMount, requestModalUnmount, requestModalUpdate };
export default Layout;