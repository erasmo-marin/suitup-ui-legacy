"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _device = require("./device");

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tablet = function Tablet(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "tablet" },
        children
    );
};

exports.default = Tablet;