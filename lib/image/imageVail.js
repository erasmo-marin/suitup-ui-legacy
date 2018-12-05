'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageVail = function (_React$Component) {
    _inherits(ImageVail, _React$Component);

    function ImageVail(props) {
        _classCallCheck(this, ImageVail);

        return _possibleConstructorReturn(this, (ImageVail.__proto__ || Object.getPrototypeOf(ImageVail)).call(this, props));
    }

    _createClass(ImageVail, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                opacity = _props.opacity,
                style = _props.style,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['opacity', 'style', 'children']);

            var classes = (0, _classnames2.default)({
                'image-vail': true
            });

            var cstyle = {
                width: '100%',
                height: '100%',
                backgroundColor: opacity ? 'rgba(0,0,0,' + opacity + ')' : undefined
            };

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: classes, style: _extends({}, style, cstyle) }),
                children
            );
        }
    }]);

    return ImageVail;
}(_react2.default.Component);

exports.default = ImageVail;