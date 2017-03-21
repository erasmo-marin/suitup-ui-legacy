"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _isArray = require("lodash/fp/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Device = (0, _component2.default)(_class = function (_React$Component) {
    _inherits(Device, _React$Component);

    function Device() {
        _classCallCheck(this, Device);

        return _possibleConstructorReturn(this, (Device.__proto__ || Object.getPrototypeOf(Device)).apply(this, arguments));
    }

    _createClass(Device, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                device = _props.device,
                devices = _props.devices,
                children = _props.children,
                screen = _props.screen;


            if (!(0, _isArray2.default)(devices)) devices = [device];

            if (devices.indexOf(screen) < 0) return null;

            return _react2.default.Children.only(children);
        }
    }]);

    return Device;
}(_react2.default.Component)) || _class;

exports.default = Device;