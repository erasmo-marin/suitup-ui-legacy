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

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.state = {
      pressed: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(e) {
      this.setState({
        pressed: true
      });
      if (this.props.onMouseDown) {
        this.props.onMouseDown(e);
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      this.setState({
        pressed: false
      });
      if (this.props.onMouseUp) {
        this.props.onMouseUp(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          children = _props.children,
          transparent = _props.transparent,
          circular = _props.circular,
          rounded = _props.rounded,
          menu = _props.menu,
          pressed = _props.pressed,
          type = _props.type,
          onClick = _props.onClick,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          rest = _objectWithoutProperties(_props, ['text', 'children', 'transparent', 'circular', 'rounded', 'menu', 'pressed', 'type', 'onClick', 'onMouseUp', 'onMouseDown']);

      var classes = {
        transparent: this.props.transparent,
        circular: this.props.circular,
        rounded: this.props.rounded,
        "menu-button": this.props.menu,
        pressed: this.state.pressed
      };

      classes = (0, _classnames2.default)(classes);

      return _react2.default.createElement(
        'button',
        _extends({}, rest, { type: type, className: classes, onClick: this.onClick, onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp }),
        children,
        text ? _react2.default.createElement(
          'span',
          null,
          text
        ) : null
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;