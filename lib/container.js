"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _screen = require("./device/screen");

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container(props) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

        _this.onScreenChange = _this.onScreenChange.bind(_this);
        _this.state = {
            screen: _screen2.default.getScreen()
        };
        return _this;
    }

    _createClass(Container, [{
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
        key: "render",
        value: function render() {
            var _props = this.props,
                verticalExpand = _props.verticalExpand,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ["verticalExpand", "children"]);

            var classes = {
                container: true,
                "full-height": verticalExpand,
                "mobile-wide": this.state.screen == 'mobile',
                "tablet-wide": this.state.screen == 'tablet',
                "desktop-wide": this.state.screen == 'desktop',
                "widescreen-wide": this.state.screen == 'widescreen'
            };

            classes = (0, _classnames2.default)(classes);

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { className: classes }),
                children
            );
        }
    }]);

    return Container;
}(_react2.default.Component);

var _default = Container;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Container, "Container", "src/components/container.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/container.jsx");
}();

;