"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

var _menuHeader = require("./menuHeader");

var _menuHeader2 = _interopRequireDefault(_menuHeader);

var _menuItem = require("./menuItem");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _menuSubItem = require("./menuSubItem");

var _menuSubItem2 = _interopRequireDefault(_menuSubItem);

var _isArray = require("lodash/fp/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.setActiveItem = _this.setActiveItem.bind(_this);
        _this.hide = _this.hide.bind(_this);
        _this.state = {
            visible: _this.props.visible,
            focusedItem: -1
        };
        return _this;
    }

    _createClass(Menu, [{
        key: "toggleItems",
        value: function toggleItems() {
            this.setState({
                subItems: !this.state.subItems
            });
        }
    }, {
        key: "hide",
        value: function hide() {
            this.setState({
                visible: false
            });
            if (this.props.onHide) {
                this.props.onHide();
            }
        }
    }, {
        key: "show",
        value: function show() {
            this.setState({
                visible: true
            });
            if (this.props.onShow) {
                this.props.onShow();
            }
        }
    }, {
        key: "setActiveItem",
        value: function setActiveItem(index) {
            this.setState({
                focusedItem: index
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                visible: nextProps.visible != null ? nextProps.visible : this.state.visible
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                left = _props.left,
                right = _props.right,
                visible = _props.visible,
                onShow = _props.onShow,
                onHide = _props.onHide,
                style = _props.style,
                screen = _props.screen,
                rest = _objectWithoutProperties(_props, ["children", "left", "right", "visible", "onShow", "onHide", "style", "screen"]);

            if (!(0, _isArray2.default)(children)) {
                children = [children];
            }

            var classes = (0, _classnames2.default)({
                menu: true,
                fixed: true,
                left: left,
                right: right,
                visible: visible,
                "is-mobile": screen == "mobile",
                "is-tablet": screen == "tablet",
                "is-desktop": screen == "desktop",
                "is-widescreen": screen == "widescreen"
            });

            var veilClasses = (0, _classnames2.default)({
                "menu-veil": true,
                visible: this.state.visible
            });

            return _react2.default.createElement(
                "div",
                rest,
                _react2.default.createElement("div", { className: veilClasses, onClick: this.hide }),
                _react2.default.createElement(
                    "nav",
                    { className: classes },
                    children.map(function (child, index) {
                        if (child.type.name == "MenuItem" || child.type.name == "Component(MenuItem)") {
                            var focused = index == _this2.state.focusedItem;

                            return _react2.default.createElement(_menuItem2.default, _extends({
                                key: child.key
                            }, child.props, {
                                onClick: function onClick() {
                                    _this2.setActiveItem(index);
                                },
                                focused: focused
                            }));
                        } else {
                            return child;
                        }
                    })
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component)) || _class);


Menu.Header = _menuHeader2.default;
Menu.Item = _menuItem2.default;
Menu.SubItem = _menuSubItem2.default;
exports.default = Menu;