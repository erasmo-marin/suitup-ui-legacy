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

var _default = Desktop;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Desktop, "Desktop", "src/components/device/desktop.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/device/desktop.jsx");
}();

;