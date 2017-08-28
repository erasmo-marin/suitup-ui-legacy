"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuSubItem = (_dec = (0, _component2.default)(true, true), _dec(_class = (_temp2 = _class2 = function (_React$PureComponent) {
    _inherits(MenuSubItem, _React$PureComponent);

    function MenuSubItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuSubItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuSubItem.__proto__ || Object.getPrototypeOf(MenuSubItem)).call.apply(_ref, [this].concat(args))), _this), _this.shouldHide = function () {
            if (_this.props.hideOnRedirect && _this.context.hide) {
                _this.context.hide();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuSubItem, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                children = _props.children,
                active = _props.active,
                hideOnRedirect = _props.hideOnRedirect,
                text = _props.text,
                href = _props.href,
                screen = _props.screen,
                settings = _props.settings,
                rest = _objectWithoutProperties(_props, ["children", "active", "hideOnRedirect", "text", "href", "screen", "settings"]);

            var subItemClasses = (0, _classnames2.default)({ active: active });

            var content = _react2.default.createElement(
                "div",
                _extends({}, rest, { className: "menu-sub-item" }),
                text ? _react2.default.createElement(
                    "span",
                    null,
                    text
                ) : children
            );

            return href ? _react2.default.createElement(
                _reactRouterDom.NavLink,
                { exact: true, to: href, activeClassName: "active", className: subItemClasses, onClick: this.shouldHide },
                content
            ) : _react2.default.createElement(
                "div",
                { className: subItemClasses },
                content
            );
        }
    }]);

    return MenuSubItem;
}(_react2.default.PureComponent), _class2.contextTypes = {
    hide: _propTypes2.default.func
}, _temp2)) || _class);
exports.default = MenuSubItem;