"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isArray2 = require("lodash/isArray");

var _isArray3 = _interopRequireDefault(_isArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Device = function Device(_ref) {
    var device = _ref.device,
        devices = _ref.devices,
        children = _ref.children;

    if (!(0, _isArray3.default)(devices)) {
        devices = [device];
    }

    var classes = (0, _classnames2.default)({
        device: true,
        mobile: devices.indexOf("mobile") < 0 ? false : true,
        tablet: devices.indexOf("tablet") < 0 ? false : true,
        desktop: devices.indexOf("desktop") < 0 ? false : true,
        widescreen: devices.indexOf("widescreen") < 0 ? false : true
    });

    return _react2.default.createElement(
        "div",
        { className: classes },
        children
    );
};

var _default = Device;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Device, "Device", "src/components/device/device.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/device/device.jsx");
}();

;