"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestModalUpdate = exports.requestModalUnmount = exports.requestModalMount = exports.Layout = undefined;

var _findIndex2 = require("lodash/findIndex");

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _without2 = require("lodash/without");

var _without3 = _interopRequireDefault(_without2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _fbemitter = require("fbemitter");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("./component");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalMountController = function (_EventEmitter) {
    _inherits(ModalMountController, _EventEmitter);

    function ModalMountController(args) {
        _classCallCheck(this, ModalMountController);

        var _this = _possibleConstructorReturn(this, (ModalMountController.__proto__ || Object.getPrototypeOf(ModalMountController)).call(this, args));

        _this.modals = [];
        _this.changeEvent = "modalsChanged";
        _this.requestModalUpdate = _this.requestModalUpdate.bind(_this);
        _this.requestModalMount = _this.requestModalMount.bind(_this);
        _this.requestModalUnmount = _this.requestModalUnmount.bind(_this);
        return _this;
    }

    _createClass(ModalMountController, [{
        key: "requestModalMount",
        value: function requestModalMount(component) {
            this.modals.push(component);
            this.emitChange(this.modals);
        }
    }, {
        key: "requestModalUpdate",
        value: function requestModalUpdate(component) {
            var modalIndex = (0, _findIndex3.default)(this.modals, { key: component.key });
            this.modals[modalIndex] = component;
            this.emitChange(this.modals);
        }
    }, {
        key: "requestModalUnmount",
        value: function requestModalUnmount(component) {
            this.modals = (0, _without3.default)(this.modals, component);
            this.emitChange(this.modals);
        }
    }, {
        key: "emitChange",
        value: function emitChange(modals) {
            this.emit(this.changeEvent, modals);
        }
    }, {
        key: "onModalsChange",
        value: function onModalsChange(callback) {
            return this.addListener(this.changeEvent, callback);
        }
    }]);

    return ModalMountController;
}(_fbemitter.EventEmitter);

var modalMountController = new ModalMountController();
var requestModalMount = modalMountController.requestModalMount;
var requestModalUnmount = modalMountController.requestModalUnmount;
var requestModalUpdate = modalMountController.requestModalUpdate;

var Layout = (0, _component2.default)(_class = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this2 = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

        _this2.onModalsChange = _this2.onModalsChange.bind(_this2);
        _this2.modalsController = modalMountController;
        _this2.state = {
            modals: []
        };
        return _this2;
    }

    _createClass(Layout, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.findHeader(this);
            this.modalsMountListener = modalMountController.onModalsChange(this.onModalsChange);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.modalsMountListener.remove();
        }
    }, {
        key: "onModalsChange",
        value: function onModalsChange() {
            this.setState({
                modals: this.modalsController.modals
            });
        }
    }, {
        key: "findHeader",
        value: function findHeader(x) {
            var _this3 = this;

            if (!x || !x.props) return;

            if (x.type && (x.type.name == "Header" || x.type.name == "Component(Header)")) {
                this.setState({
                    header: x
                });
                return;
            }

            _react2.default.Children.forEach(x.props.children, function (x) {
                if (x.type && (x.type.name == "Header" || x.type.name == "Component(Header)")) {
                    _this3.setState({
                        header: x
                    });
                    return;
                }
                _this3.findHeader(x);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                screen = _props.screen,
                rest = _objectWithoutProperties(_props, ["children", "screen"]);

            var classes = (0, _classnames2.default)({
                layout: true,
                "fixed-header": this.state.header && this.state.header.props.fixed ? true : false,
                "is-mobile": screen == 'mobile',
                "is-tablet": screen == 'tablet',
                "is-desktop": screen == 'desktop',
                "is-widescreen": screen == 'widescreen'
            });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    _extends({}, rest, { className: classes, id: "layout" }),
                    children
                ),
                _react2.default.createElement(
                    "div",
                    { className: "modal-mount-point" },
                    this.state.modals
                )
            );
        }
    }]);

    return Layout;
}(_react2.default.Component)) || _class;

exports.Layout = Layout;
exports.requestModalMount = requestModalMount;
exports.requestModalUnmount = requestModalUnmount;
exports.requestModalUpdate = requestModalUpdate;
var _default = Layout;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ModalMountController, "ModalMountController", "src/components/layout.jsx");

    __REACT_HOT_LOADER__.register(modalMountController, "modalMountController", "src/components/layout.jsx");

    __REACT_HOT_LOADER__.register(requestModalMount, "requestModalMount", "src/components/layout.jsx");

    __REACT_HOT_LOADER__.register(requestModalUnmount, "requestModalUnmount", "src/components/layout.jsx");

    __REACT_HOT_LOADER__.register(requestModalUpdate, "requestModalUpdate", "src/components/layout.jsx");

    __REACT_HOT_LOADER__.register(Layout, "Layout", "src/components/layout.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/layout.jsx");
}();

;