import React from "react";
import { isArray, without, findIndex } from "lodash";
import { EventEmitter } from "events";
import classnames from "classnames";
import Screen from "./device/screen";

class ModalMountController extends EventEmitter {

    constructor(args) {
        super(args);
        this.modals = [];
        this.changeEvent = "modalsChanged";
        this.requestModalUpdate = ::this.requestModalUpdate;
        this.requestModalMount = ::this.requestModalMount;
        this.requestModalUnmount = ::this.requestModalUnmount;
    }

    requestModalMount(component) {
        this.modals.push(component);
        this.emitChange(this.modals);
    }

    requestModalUpdate(component) {
        let modalIndex = findIndex(this.modals, {key: component.key});
        this.modals[modalIndex] = component;
        this.emitChange(this.modals);
    }

    requestModalUnmount(component) {
        this.modals = without(this.modals, component);
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
        this.onModalsChange = ::this.onModalsChange;
        this.modalsController = modalMountController;
        this.onScreenChange = ::this.onScreenChange;
        this.state = {
            modals: [],
            screen: Screen.getScreen()
        }
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
        if (isArray(children)) {
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
        let { children, ...rest } = this.props;

        let header = this.findHeader(children);
        let classes = classnames({
            layout: true,
            "fixed-header": header && header.props.fixed ? true : false,
            "is-mobile": this.state.screen == 'mobile',
            "is-tablet": this.state.screen == 'tablet',
            "is-desktop": this.state.screen == 'desktop',
            "is-widescreen": this.state.screen == 'widescreen'
        });

        return (
            <div>
                <div {...rest} className={classes} id="layout">
                    {children}
                </div>
                <div className="modal-mount-point">
                    {this.state.modals}
                </div>
            </div>
        );
    }
}

export { Layout, requestModalMount, requestModalUnmount, requestModalUpdate };
export default Layout;