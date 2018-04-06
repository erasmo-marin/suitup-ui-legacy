"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Fullhd = exports.Widescreen = exports.Tablet = exports.Desktop = exports.Mobile = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _device = require("./device");

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mobile = exports.Mobile = function Mobile(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "mobile" },
        children
    );
};

var Desktop = exports.Desktop = function Desktop(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "desktop" },
        children
    );
};

var Tablet = exports.Tablet = function Tablet(_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "tablet" },
        children
    );
};

var Widescreen = exports.Widescreen = function Widescreen(_ref4) {
    var children = _ref4.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "widescreen" },
        children
    );
};

var Fullhd = exports.Fullhd = function Fullhd(_ref5) {
    var children = _ref5.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "fullhd" },
        children
    );
};