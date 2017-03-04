"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cloneDeep2 = require("lodash/cloneDeep");

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _map2 = require("lodash/map");

var _map3 = _interopRequireDefault(_map2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _screen = require("../device/screen");

var _screen2 = _interopRequireDefault(_screen);

var _settings = require("../settings");

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function suitupable(Child) {
    var Component = function (_React$Component) {
        _inherits(Component, _React$Component);

        function Component(props) {
            _classCallCheck(this, Component);

            var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

            _this.onScreenChange = _this.onScreenChange.bind(_this);
            _this.state = {
                screen: _screen2.default.getScreen(),
                settings: _settings2.default.getSettings()
            };
            return _this;
        }

        _createClass(Component, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.screenListener = _screen2.default.onScreenChange(this.onScreenChange);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.screenListener.remove();
            }
        }, {
            key: "onScreenChange",
            value: function onScreenChange(screen) {
                this.setState({ screen: screen });
            }
        }, {
            key: "onSettingsChange",
            value: function onSettingsChange(settings) {
                this.setState({ settings: settings });
            }
        }, {
            key: "render",
            value: function render() {
                var breakpoints = this.state.settings.Device.Breakpoints;
                var style = this.props.style;

                var originalStyle = (0, _cloneDeep3.default)(this.props.style);

                var responsiveStyles = {};

                (0, _map3.default)(breakpoints, function (breakpoint, breakpointName) {
                    (0, _map3.default)(style, function (property, propertyName) {
                        if (breakpointName == propertyName) {
                            responsiveStyles[breakpointName] = property;
                            delete originalStyle[propertyName];
                        }
                    });
                });

                var screenStyle = {};

                if (responsiveStyles[this.state.screen]) screenStyle = responsiveStyles[this.state.screen];

                var newStyle = _extends({}, originalStyle, screenStyle);

                return _react2.default.createElement(Child, _extends({}, this.props, { style: newStyle, screen: this.state.screen }));
            }
        }]);

        return Component;
    }(_react2.default.Component);

    Component.displayName = "Component(" + getDisplayName(Child) + ")";
    return Component;
}

exports.default = suitupable;