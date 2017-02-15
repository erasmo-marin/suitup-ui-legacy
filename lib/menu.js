"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _screen = require("./device/screen");

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this.toggleItems = _this.toggleItems.bind(_this);
        _this.state = {
            subItems: false
        };
        return _this;
    }

    _createClass(MenuItem, [{
        key: "toggleItems",
        value: function toggleItems() {
            this.setState({
                subItems: !this.state.subItems
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                href = _props.href,
                text = _props.text,
                rest = _objectWithoutProperties(_props, ["href", "text"]);

            var subItemsClasses = (0, _classnames2.default)({
                "menu-sub-items": true,
                visible: this.state.subItems
            });

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { className: "menu-item" }),
                href ? _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: href },
                    text
                ) : _react2.default.createElement(
                    "span",
                    { onClick: this.toggleItems },
                    text
                ),
                this.props.children ? _react2.default.createElement(
                    "div",
                    { className: subItemsClasses },
                    _react2.default.createElement(
                        "div",
                        { className: "menu-sub-items-wrapper" },
                        this.props.children
                    )
                ) : null
            );
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

var MenuSubItem = function (_React$PureComponent) {
    _inherits(MenuSubItem, _React$PureComponent);

    function MenuSubItem() {
        _classCallCheck(this, MenuSubItem);

        return _possibleConstructorReturn(this, (MenuSubItem.__proto__ || Object.getPrototypeOf(MenuSubItem)).apply(this, arguments));
    }

    _createClass(MenuSubItem, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                text = _props2.text,
                href = _props2.href,
                rest = _objectWithoutProperties(_props2, ["text", "href"]);

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { className: "menu-sub-item" }),
                href ? _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: href },
                    text
                ) : _react2.default.createElement(
                    "span",
                    null,
                    text
                )
            );
        }
    }]);

    return MenuSubItem;
}(_react2.default.PureComponent);

var Menu = function (_React$Component2) {
    _inherits(Menu, _React$Component2);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this3 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this3.hide = _this3.hide.bind(_this3);
        _this3.onScreenChange = _this3.onScreenChange.bind(_this3);
        _this3.state = {
            visible: _this3.props.visible,
            screen: _screen2.default.getScreen()
        };
        return _this3;
    }

    _createClass(Menu, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            _screen2.default.onScreenChange(this.onScreenChange);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _screen2.default.offScreenChange(this.onScreenChange);
        }
    }, {
        key: "onScreenChange",
        value: function onScreenChange(screen) {
            this.setState({
                screen: screen
            });
        }
    }, {
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
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                visible: nextProps.visible != null ? nextProps.visible : this.state.visible
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                children = _props3.children,
                left = _props3.left,
                right = _props3.right,
                visible = _props3.visible,
                onShow = _props3.onShow,
                onHide = _props3.onHide,
                style = _props3.style,
                rest = _objectWithoutProperties(_props3, ["children", "left", "right", "visible", "onShow", "onHide", "style"]);

            var classes = (0, _classnames2.default)({
                menu: true,
                fixed: true,
                left: left,
                right: right,
                visible: visible,
                "is-mobile": this.state.screen == 'mobile',
                "is-tablet": this.state.screen == 'tablet',
                "is-desktop": this.state.screen == 'desktop',
                "is-widescreen": this.state.screen == 'widescreen'
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
                    children
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

var MenuHeader = function (_React$Component3) {
    _inherits(MenuHeader, _React$Component3);

    function MenuHeader(props) {
        _classCallCheck(this, MenuHeader);

        return _possibleConstructorReturn(this, (MenuHeader.__proto__ || Object.getPrototypeOf(MenuHeader)).call(this, props));
    }

    _createClass(MenuHeader, [{
        key: "render",
        value: function render() {
            var classes = (0, _classnames2.default)({
                "menu-header": true
            });

            var _props4 = this.props,
                icon = _props4.icon,
                title = _props4.title,
                rest = _objectWithoutProperties(_props4, ["icon", "title"]);

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { className: classes }),
                this.props.icon ? _react2.default.createElement(
                    "div",
                    { className: "menu-header-icon" },
                    icon
                ) : null,
                _react2.default.createElement(
                    "span",
                    { className: "menu-header-title" },
                    title
                )
            );
        }
    }]);

    return MenuHeader;
}(_react2.default.Component);

Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.SubItem = MenuSubItem;
var _default = Menu;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MenuItem, "MenuItem", "src/components/menu.jsx");

    __REACT_HOT_LOADER__.register(MenuSubItem, "MenuSubItem", "src/components/menu.jsx");

    __REACT_HOT_LOADER__.register(Menu, "Menu", "src/components/menu.jsx");

    __REACT_HOT_LOADER__.register(MenuHeader, "MenuHeader", "src/components/menu.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/menu.jsx");
}();

;