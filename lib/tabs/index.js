"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tab = require("./tab");

var _tab2 = _interopRequireDefault(_tab);

var _box = require("../box/box");

var _box2 = _interopRequireDefault(_box);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _isObject = require("lodash/fp/isObject");

var _isObject2 = _interopRequireDefault(_isObject);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.onTabClick = _this.onTabClick.bind(_this);

        var children = _this.props.children;

        if (!children.map) children = [children];

        var activeTab = 1;
        if (_this.props.active) {
            activeTab = _this.props.active;
        }

        _this.state = {
            activeTab: children[activeTab - 1],
            activeTabIndex: activeTab || 0,
            activeTabIndicatorOffset: (activeTab - 1) * 100 / children.length + "%",
            activeTabIndicatorWidth: 100 / children.length + "%"
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: "onTabClick",
        value: function onTabClick(tab, index) {
            if (tab == this.state.activeTab) return;

            var _props = this.props,
                children = _props.children,
                onChange = _props.onChange;

            if (!children.map) children = [children];

            var activeTabIndicatorWidth = 100 / children.length + "%";
            var activeTabIndicatorOffset = index * (100 / children.length) + "%";

            this.setState({
                activeTab: tab,
                activeTabIndex: index,
                activeTabIndicatorOffset: activeTabIndicatorOffset,
                activeTabIndicatorWidth: activeTabIndicatorWidth
            });

            if (onChange) {
                onchange(index);
            }
        }

        /*
         * Style tag is applyied only to tabs buttons,
         * that's the expected behavior. But at the same
         * time, other props like className are applied
         * to the root container.
         */

    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                children = _props2.children,
                style = _props2.style,
                indicatorColor = _props2.indicatorColor,
                screen = _props2.screen,
                settings = _props2.settings,
                rest = _objectWithoutProperties(_props2, ["children", "style", "indicatorColor", "screen", "settings"]);

            var _state = this.state,
                activeTab = _state.activeTab,
                activeTabIndicatorOffset = _state.activeTabIndicatorOffset,
                activeTabIndicatorWidth = _state.activeTabIndicatorWidth;


            if (!activeTab) {
                activeTab = children[0];
            }

            if (!children.map) {
                children = [children];
            }

            var indicatorStyle = {
                width: activeTabIndicatorWidth,
                marginLeft: activeTabIndicatorOffset,
                background: indicatorColor
            };

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { className: "tabs" }),
                _react2.default.createElement(
                    "div",
                    { style: style, className: "tabs-buttons" },
                    _react2.default.createElement(
                        _box2.default,
                        { horizontal: true, gutter: "0", columns: children.length },
                        children.map(function (child, index) {
                            var classes = (0, _classnames2.default)({
                                tab: true,
                                active: _this2.state.activeTabIndex == index
                            });

                            return _react2.default.createElement(
                                _box2.default.Child,
                                { key: index, wide: 1 },
                                _react2.default.createElement(
                                    "div",
                                    {
                                        style: child.props ? child.props.style : null,
                                        className: classes,
                                        onClick: function onClick() {
                                            _this2.onTabClick(child, index);
                                        }
                                    },
                                    child.props.title
                                )
                            );
                        })
                    ),
                    _react2.default.createElement("div", {
                        className: "active-tab-indicator",
                        style: indicatorStyle
                    })
                ),
                activeTab
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component)) || _class);


Tabs.Tab = _tab2.default;

exports.default = Tabs;