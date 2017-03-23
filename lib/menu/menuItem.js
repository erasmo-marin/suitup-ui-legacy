"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

var _cloneDeep = require("lodash/fp/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this.toggleItems = _this.toggleItems.bind(_this);
        _this.state = {
            subItemsVisible: false,
            subItemsStyle: {},
            shouldAnimate: false
        };
        return _this;
    }

    _createClass(MenuItem, [{
        key: "toggleItems",
        value: function toggleItems() {
            var style = (0, _cloneDeep2.default)(this.state.subItemsStyle);
            if (this.props.children) style.transition = "margin " + this.calculeAnimationTime(this.props.children.length) + "ms ease-in";

            this.setState({
                subItemsVisible: !this.state.subItemsVisible,
                subItemsStyle: style
            });
        }

        /*
         * Calcule animation time in miliseconds depending on children number
         */

    }, {
        key: "calculeAnimationTime",
        value: function calculeAnimationTime(items) {
            var base = 100;
            var max = 600;
            var min = 300;

            if (!items) return min;
            if (base * items > max) return max;
            if (base * items < min) return min;
            return base * items;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.state.shouldAnimate = true;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                href = _props.href,
                text = _props.text,
                screen = _props.screen,
                focused = _props.focused,
                rest = _objectWithoutProperties(_props, ["href", "text", "screen", "focused"]);

            var _state = this.state,
                subItemsStyle = _state.subItemsStyle,
                subItemsVisible = _state.subItemsVisible,
                shouldAnimate = _state.shouldAnimate;


            subItemsStyle.marginTop = "0px";
            var height = 0;

            if (this._subitems) {
                height = this._subitems.offsetHeight;
                if (this.state.subItemsVisible) {
                    subItemsStyle.marginTop = "0px";
                } else {
                    subItemsStyle.marginTop = "-" + height + "px";
                }
            }
            this.state.subItemsStyle = (0, _cloneDeep2.default)(subItemsStyle);

            var buttonClasses = (0, _classnames2.default)({
                "menu-button": true,
                focus: focused
            });

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { className: "menu-item" }),
                href ? _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: href },
                    _react2.default.createElement(
                        "div",
                        { className: buttonClasses },
                        text
                    )
                ) : _react2.default.createElement(
                    "div",
                    {
                        className: buttonClasses,
                        onClick: this.toggleItems
                    },
                    text
                ),
                this.props.children ? _react2.default.createElement(
                    "div",
                    { className: "menu-sub-items" },
                    _react2.default.createElement(
                        "div",
                        {
                            className: "menu-sub-items-wrapper",
                            ref: function ref(c) {
                                return _this2._subitems = c;
                            },
                            style: subItemsStyle
                        },
                        this.props.children
                    )
                ) : null
            );
        }
    }]);

    return MenuItem;
}(_react2.default.Component)) || _class);
exports.default = MenuItem;