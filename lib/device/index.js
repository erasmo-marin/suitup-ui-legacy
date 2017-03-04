"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Screen = exports.Widescreen = exports.Tablet = exports.Mobile = exports.Device = exports.Desktop = undefined;

var _desktop = require("./desktop");

var _desktop2 = _interopRequireDefault(_desktop);

var _device = require("./device");

var _device2 = _interopRequireDefault(_device);

var _mobile = require("./mobile");

var _mobile2 = _interopRequireDefault(_mobile);

var _tablet = require("./tablet");

var _tablet2 = _interopRequireDefault(_tablet);

var _widescreen = require("./widescreen");

var _widescreen2 = _interopRequireDefault(_widescreen);

var _screen = require("./screen");

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _device2.default;
exports.Desktop = _desktop2.default;
exports.Device = _device2.default;
exports.Mobile = _mobile2.default;
exports.Tablet = _tablet2.default;
exports.Widescreen = _widescreen2.default;
exports.Screen = _screen2.default;