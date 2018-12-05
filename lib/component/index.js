'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _screen = require('../device/screen');

var _screen2 = _interopRequireDefault(_screen);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _mapKeys = require('lodash/mapKeys');

var _mapKeys2 = _interopRequireDefault(_mapKeys);

var _cloneDeep = require('lodash/fp/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var suitupable = function suitupable() {
    var listenScreen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var listenSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return function (Child) {
        var Component = function (_React$Component) {
            _inherits(Component, _React$Component);

            function Component(props) {
                _classCallCheck(this, Component);

                var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

                _this.onViewChange = function (value) {
                    _this.setState({
                        onView: value
                    });
                };

                _this.onScreenChange = function (screen) {
                    _this.setState({ screen: screen });
                };

                _this.onSettingsChange = function (settings) {
                    _this.setState({ settings: settings });
                };

                _this.state = {
                    screen: listenScreen ? _screen2.default.getScreen() : undefined,
                    settings: listenSettings ? _settings2.default.getSettings() : undefined
                };
                return _this;
            }

            _createClass(Component, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    if (listenScreen) this.screenListener = _screen2.default.onScreenChange(this.onScreenChange);
                    if (listenSettings) this.settingsListener = _settings2.default.onSettingsChange(this.onSettingsChange);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    if (this.screenListener) this.screenListener.remove();
                    if (this.settingsListener) this.settingsListener.remove();
                }
            }, {
                key: 'render',
                value: function render() {
                    var _this2 = this;

                    var breakpoints = this.state.settings.Device.Breakpoints;
                    var style = this.props.style;

                    var originalStyle = (0, _cloneDeep2.default)(this.props.style);
                    var screenStyle = {};
                    var responsiveStyles = {};

                    (0, _mapKeys2.default)(breakpoints, function (breakpoint, breakpointName) {
                        (0, _mapKeys2.default)(style, function (property, propertyName) {
                            if (breakpointName == propertyName) {
                                responsiveStyles[breakpointName] = property;
                                delete originalStyle[propertyName];
                            }
                        });
                    });

                    if (responsiveStyles[this.state.screen]) screenStyle = responsiveStyles[this.state.screen];

                    return _react2.default.createElement(Child, _extends({
                        ref: function ref(c) {
                            return _this2._child = c;
                        }
                    }, this.props, {
                        style: _extends({}, originalStyle, screenStyle),
                        screen: this.state.screen,
                        settings: this.state.settings
                    }));
                }
            }]);

            return Component;
        }(_react2.default.Component);

        Component.displayName = 'Component(' + getDisplayName(Child) + ')';
        return Component;
    };
};

exports.default = suitupable;