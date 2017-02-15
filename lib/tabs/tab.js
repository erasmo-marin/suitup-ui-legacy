"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Tab = function Tab(_ref) {
  var children = _ref.children,
      name = _ref.name,
      rest = _objectWithoutProperties(_ref, ["children", "name"]);

  return _react2.default.createElement(
    "div",
    _extends({}, rest, { className: "tab" }),
    children
  );
};

var _default = Tab;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tab, "Tab", "src/components/tabs/tab.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/tabs/tab.jsx");
}();

;