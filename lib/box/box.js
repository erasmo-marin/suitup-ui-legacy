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

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _boxChild = require('./boxChild');

var _boxChild2 = _interopRequireDefault(_boxChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box(props) {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));
  }

  _createClass(Box, [{
    key: 'setupChildProps',
    value: function setupChildProps(props) {
      if (props.children && props.rows) {
        if ((0, _isArray2.default)(props.children)) {
          return props.children.map(function (element) {

            var wide = element.props.wide ? element.props.wide : 1;

            return _react2.default.cloneElement(element, {
              rows: props.rows,
              gutter: props.gutter ? props.gutter : "0.5rem"
            });
          }, this);
        } else {
          return _react2.default.cloneElement(props.children, {
            rows: props.rows,
            gutter: props.gutter ? props.gutter : "0.5rem"
          });
        }
      } else {
        return props.children;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          horizontal = _props.horizontal,
          vertical = _props.vertical,
          autoFill = _props.autoFill,
          centered = _props.centered,
          justify = _props.justify,
          children = _props.children,
          rows = _props.rows,
          gutter = _props.gutter,
          rest = _objectWithoutProperties(_props, ['horizontal', 'vertical', 'autoFill', 'centered', 'justify', 'children', 'rows', 'gutter']);

      if (!gutter) {
        gutter = '0.5rem';
      }

      var classes = (0, _classnames2.default)({
        box: true,
        horizontal: vertical == null ? true : false,
        vertical: vertical,
        "fill-space": autoFill,
        centered: justify == 'center',
        left: justify == 'left',
        right: justify == 'right'
      });

      var cstyle = {
        marginLeft: '-' + gutter,
        marginRight: '-' + gutter
      };

      return _react2.default.createElement(
        'div',
        _extends({}, rest, { style: cstyle, className: classes }),
        this.setupChildProps(this.props)
      );
    }
  }]);

  return Box;
}(_react2.default.Component);

Box.Child = _boxChild2.default;

Box.propTypes = {
  children: function children(props, propName, componentName) {
    var prop = props[propName];

    var error = null;
    _react2.default.Children.forEach(prop, function (child) {
      if (child.type !== _boxChild2.default) {
        error = new Error('`' + componentName + '` children should be of type `Box.Child`.');
      }
    });
    return error;
  }
};

exports.default = Box;
module.exports = exports['default'];