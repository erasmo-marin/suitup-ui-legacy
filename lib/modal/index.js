"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactNotifyResize = require("@zippytech/react-notify-resize");

var _modalAction = require("./modalAction");

var _modalAction2 = _interopRequireDefault(_modalAction);

var _modalContent = require("./modalContent");

var _modalContent2 = _interopRequireDefault(_modalContent);

var _modalFooter = require("./modalFooter");

var _modalFooter2 = _interopRequireDefault(_modalFooter);

var _isEqual = require("lodash/fp/isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _layout = require("../layout");

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.renderKey = Math.random();
        _this.modal = null;
        return _this;
    }

    _createClass(Modal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.modal = this.renderModal(this.props);
            (0, _layout.requestModalMount)(this.modal);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            (0, _layout.requestModalUnmount)(this.modal);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {

            if ((0, _isEqual2.default)(nextProps, this.props)) return;

            this.modal = this.renderModal(nextProps);
            (0, _layout.requestModalUpdate)(this.modal);
        }
    }, {
        key: "renderModal",
        value: function renderModal(props) {
            return _react2.default.createElement(ModalImplementation, _extends({}, props, { key: this.renderKey }));
        }
    }, {
        key: "render",
        value: function render() {
            return null;
        }
    }]);

    return Modal;
}(_react2.default.Component)) || _class);
var ModalImplementation = (_dec2 = (0, _component2.default)(true, true), _dec2(_class2 = function (_React$Component2) {
    _inherits(ModalImplementation, _React$Component2);

    function ModalImplementation(props) {
        _classCallCheck(this, ModalImplementation);

        var _this2 = _possibleConstructorReturn(this, (ModalImplementation.__proto__ || Object.getPrototypeOf(ModalImplementation)).call(this, props));

        _this2.show = _this2.show.bind(_this2);
        _this2.hide = _this2.hide.bind(_this2);
        _this2.centerVertically = _this2.centerVertically.bind(_this2);
        return _this2;
    }

    _createClass(ModalImplementation, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible) {
                this.show();
            } else {
                this.hide();
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            if (this.props.visible) {
                setTimeout(function () {
                    _this3.show();
                }, 500);
            }
            window.addEventListener("resize", this.centerVertically);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.centerVertically);
        }
    }, {
        key: "preventPropagation",
        value: function preventPropagation(e) {
            if (!e) return;
            e.preventDefault();
            e.stopPropagation();
        }
    }, {
        key: "centerVertically",
        value: function centerVertically() {
            var diff = window.innerHeight - this.modalInner.offsetHeight;
            if (diff > 0) {
                this.modalInner.style.marginTop = diff / 2 + "px";
            }
        }
    }, {
        key: "show",
        value: function show() {
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
    }, {
        key: "hide",
        value: function hide() {
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
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                visible = _props.visible,
                children = _props.children,
                screen = _props.screen,
                style = _props.style,
                rest = _objectWithoutProperties(_props, ["visible", "children", "screen", "style"]);

            var modalStyle = _extends({ position: "relative" }, style);

            return _react2.default.createElement(
                "div",
                _extends({}, rest, {
                    className: "modal-container",
                    ref: function ref(c) {
                        return _this4.modal = c;
                    },
                    onClick: this.hide
                }),
                _react2.default.createElement(
                    "div",
                    {
                        className: "modal",
                        ref: function ref(c) {
                            return _this4.modalInner = c;
                        },
                        style: modalStyle,
                        onClick: this.preventPropagation
                    },
                    _react2.default.createElement(_reactNotifyResize.NotifyResize, { onResize: this.centerVertically }),
                    children
                )
            );
        }
    }]);

    return ModalImplementation;
}(_react2.default.Component)) || _class2);


Modal.Action = _modalAction2.default;
Modal.Content = _modalContent2.default;
Modal.Footer = _modalFooter2.default;

exports.default = Modal;