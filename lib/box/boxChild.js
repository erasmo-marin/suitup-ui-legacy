'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxChild = function (_React$Component) {
  _inherits(BoxChild, _React$Component);

  function BoxChild(props) {
    _classCallCheck(this, BoxChild);

    return _possibleConstructorReturn(this, (BoxChild.__proto__ || Object.getPrototypeOf(BoxChild)).call(this, props));
  }

  _createClass(BoxChild, [{
    key: 'render',
    value: function render() {

      var cstyle = {};

      var _props = this.props,
          rows = _props.rows,
          wide = _props.wide,
          width = _props.width,
          children = _props.children,
          style = _props.style,
          rest = _objectWithoutProperties(_props, ['rows', 'wide', 'width', 'children', 'style']);

      var classes = {
        "box-child": true
      };

      if (wide && rows) {
        cstyle.width = 'calc(' + 100 / rows * wide + '% - 1rem)';
      }

      classes = (0, _classnames2.default)(classes);

      return _react2.default.createElement(
        'div',
        _extends({}, rest, { className: classes, style: _extends({}, style, cstyle) }),
        children
      );
    }
  }]);

  return BoxChild;
}(_react2.default.Component);

exports.default = BoxChild;