'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps, _dec2, _class3;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactNotifyResize = require('@zippytech/react-notify-resize');

var _modalAction = require('./modalAction');

var _modalAction2 = _interopRequireDefault(_modalAction);

var _modalContent = require('./modalContent');

var _modalContent2 = _interopRequireDefault(_modalContent);

var _modalFooter = require('./modalFooter');

var _modalFooter2 = _interopRequireDefault(_modalFooter);

var _isEqual = require('lodash/fp/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _layout = require('../layout');

var _component = require('../component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_dec = (0, _component2.default)(true, true), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _initialiseProps.call(_this);

        _this.renderKey = Math.random();
        _this.modal = null;
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.modal = this.renderModal(this.props);
            (0, _layout.requestModalMount)(this.modal);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            (0, _layout.requestModalUnmount)(this.modal);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ((0, _isEqual2.default)(nextProps, this.props)) return;

            this.modal = this.renderModal(nextProps);
            (0, _layout.requestModalUpdate)(this.modal);
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Modal;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.renderModal = function (props) {
        return _react2.default.createElement(ModalImplementation, _extends({}, props, { key: _this2.renderKey }));
    };
}, _temp)) || _class);
var ModalImplementation = (_dec2 = (0, _component2.default)(true, true), _dec2(_class3 = function (_React$Component2) {
    _inherits(ModalImplementation, _React$Component2);

    function ModalImplementation() {
        var _ref;

        var _temp2, _this3, _ret;

        _classCallCheck(this, ModalImplementation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref = ModalImplementation.__proto__ || Object.getPrototypeOf(ModalImplementation)).call.apply(_ref, [this].concat(args))), _this3), _this3.preventPropagation = function (e) {
            if (!e) return;
            e.preventDefault();
            e.stopPropagation();
        }, _this3.centerVertically = function () {
            var diff = window.innerHeight - _this3.modalInner.offsetHeight;
            if (diff > 0) {
                _this3.modalInner.style.marginTop = diff / 2 + 'px';
            }
        }, _this3.show = function () {
            var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
            document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';
            document.body.style.overflow = 'hidden';
            _this3.centerVertically();
            _this3.modal.classList.add('visible');
            document.getElementById('layout').style.filter = 'blur(5px)';

            if (_this3.props.onShow) {
                _this3.props.onShow();
            }

            if (_this3.props.onChange) {
                _this3.props.onChange(true);
            }
        }, _this3.onBlur = function () {
            return _this3.props.hideOnBlur && _this3.hide();
        }, _this3.hide = function () {
            _this3.modal.classList.remove('visible');
            document.body.style.margin = '';
            document.body.style.overflow = '';
            document.getElementById('layout').style.filter = 'none';

            if (_this3.props.onHide) {
                _this3.props.onHide();
            }

            if (_this3.props.onChange) {
                _this3.props.onChange(false);
            }
        }, _temp2), _possibleConstructorReturn(_this3, _ret);
    }

    _createClass(ModalImplementation, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible) {
                this.show();
            } else {
                this.hide();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            if (this.props.visible) {
                setTimeout(function () {
                    _this4.show();
                }, 500);
            }
            window.addEventListener('resize', this.centerVertically);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.centerVertically);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props = this.props,
                visible = _props.visible,
                children = _props.children,
                screen = _props.screen,
                settings = _props.settings,
                style = _props.style,
                hideOnBlur = _props.hideOnBlur,
                rest = _objectWithoutProperties(_props, ['visible', 'children', 'screen', 'settings', 'style', 'hideOnBlur']);

            var modalStyle = _extends({ position: 'relative' }, style);

            return _react2.default.createElement(
                'div',
                _extends({}, rest, { className: 'modal-container', ref: function ref(c) {
                        return _this5.modal = c;
                    }, onClick: this.onBlur }),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'modal',
                        ref: function ref(c) {
                            return _this5.modalInner = c;
                        },
                        style: modalStyle,
                        onClick: this.preventPropagation
                    },
                    _react2.default.createElement(_reactNotifyResize.NotifyResize, { onResize: this.centerVertically }),
                    children
                )
            );
        }
    }]);

    return ModalImplementation;
}(_react2.default.Component)) || _class3);


Modal.Action = _modalAction2.default;
Modal.Content = _modalContent2.default;
Modal.Footer = _modalFooter2.default;

exports.default = Modal;