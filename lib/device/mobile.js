"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _device = require("./device");

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mobile = function Mobile(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        _device2.default,
        { device: "mobile" },
        children
    );
};

var _default = Mobile;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Mobile, "Mobile", "src/components/device/mobile.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/device/mobile.jsx");
}();

;