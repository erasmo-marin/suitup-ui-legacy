'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _cardContent = require('./cardContent');

var _cardContent2 = _interopRequireDefault(_cardContent);

var _cardFooter = require('./cardFooter');

var _cardFooter2 = _interopRequireDefault(_cardFooter);

var _cardAction = require('./cardAction');

var _cardAction2 = _interopRequireDefault(_cardAction);

var _component = require('../component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                width = _props.width,
                height = _props.height,
                screen = _props.screen,
                settings = _props.settings,
                style = _props.style,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['width', 'height', 'screen', 'settings', 'style', 'children']);

            var classes = (0, _classnames3.default)(_defineProperty({
                card: true
            }, screen, true));

            var cstyle = {
                maxWidth: width ? width : undefined,
                maxHeight: height ? height : undefined,
                width: width ? width : undefined,
                height: height ? height : undefined
            };

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: classes, style: _extends({}, cstyle, style) }),
                children
            );
        }
    }]);

    return Card;
}(_react2.default.Component)) || _class);


Card.Content = _cardContent2.default;
Card.Footer = _cardFooter2.default;
Card.Action = _cardAction2.default;

exports.default = Card;