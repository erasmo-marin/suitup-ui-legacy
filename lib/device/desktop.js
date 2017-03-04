"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _device = require("./device");

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Desktop = function Desktop(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "desktop" },
        children
    );
};

exports.default = Desktop;