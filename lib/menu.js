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

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          text = _props.text,
          rest = _objectWithoutProperties(_props, ['href', 'text']);

      return _react2.default.createElement(
        'div',
        _extends({}, rest, { className: 'menu-item' }),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: href },
          text
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

var Menu = function (_React$Component2) {
  _inherits(Menu, _React$Component2);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this2.hide = _this2.hide.bind(_this2);
    _this2.state = {
      visible: _this2.props.visible
    };
    return _this2;
  }

  _createClass(Menu, [{
    key: 'hide',
    value: function hide() {
      this.setState({
        visible: false
      });
      if (this.props.onHide) {
        this.props.onHide();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({
        visible: true
      });
      if (this.props.onShow) {
        this.props.onShow();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        visible: nextProps.visible != null ? nextProps.visible : this.state.visible
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          left = _props2.left,
          right = _props2.right,
          visible = _props2.visible,
          onShow = _props2.onShow,
          onHide = _props2.onHide,
          style = _props2.style,
          rest = _objectWithoutProperties(_props2, ['children', 'left', 'right', 'visible', 'onShow', 'onHide', 'style']);

      var classes = (0, _classnames2.default)({
        menu: true,
        fixed: true,
        left: left,
        right: right,
        visible: visible
      });

      var veilClasses = (0, _classnames2.default)({
        "menu-veil": true,
        visible: this.state.visible
      });

      return _react2.default.createElement(
        'div',
        rest,
        _react2.default.createElement('div', { className: veilClasses, onClick: this.hide }),
        _react2.default.createElement(
          'nav',
          { className: classes },
          children
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

var Header = function (_React$Component3) {
  _inherits(Header, _React$Component3);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {

      var classes = (0, _classnames2.default)({
        "menu-header": true
      });

      var _props3 = this.props,
          icon = _props3.icon,
          title = _props3.title,
          rest = _objectWithoutProperties(_props3, ['icon', 'title']);

      return _react2.default.createElement(
        'div',
        _extends({}, rest, { className: classes }),
        this.props.icon ? _react2.default.createElement(
          'div',
          { className: 'menu-header-icon' },
          icon
        ) : null,
        _react2.default.createElement(
          'span',
          { className: 'menu-header-title' },
          title
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Menu.Header = Header;
Menu.Item = Item;
exports.default = Menu;
module.exports = exports['default'];