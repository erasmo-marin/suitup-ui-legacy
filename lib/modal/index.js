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

var _reactNotifyResize = require('react-notify-resize');

var _modalAction = require('./modalAction');

var _modalAction2 = _interopRequireDefault(_modalAction);

var _modalContent = require('./modalContent');

var _modalContent2 = _interopRequireDefault(_modalContent);

var _modalFooter = require('./modalFooter');

var _modalFooter2 = _interopRequireDefault(_modalFooter);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this.centerVertically = _this.centerVertically.bind(_this);
    window.cv = _this.centerVertically;
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var c = this.renderModal(this.props);
      _reactDom2.default.render(c, document.getElementById('modalMountPoint'));
      if (this.props.visible) {
        setTimeout(function () {
          _this2.modal.classList.add("visible");
        }, 500);
      }
      window.addEventListener('resize', this.centerVertically);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if (!(0, _reactAddonsShallowCompare2.default)(this, nextProps)) {
        return;
      }

      var c = this.renderModal(nextProps);
      _reactDom2.default.render(c, document.getElementById('modalMountPoint'));

      if (nextProps.visible) {
        this.show();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.centerVertically);
    }
  }, {
    key: 'show',
    value: function show() {
      var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
      document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';
      document.body.style.overflow = 'hidden';
      this.centerVertically();
      this.modal.classList.add("visible");
      document.getElementById("layout").style.filter = "blur(5px)";

      if (this.props.onShow) {
        this.props.onShow();
      }

      if (this.props.onChange) {
        this.props.onChange(true);
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.modal.classList.remove("visible");
      document.body.style.margin = '';
      document.body.style.overflow = '';
      document.getElementById("layout").style.filter = "none";

      if (this.props.onHide) {
        this.props.onHide();
      }

      if (this.props.onChange) {
        this.props.onChange(false);
      }
    }
  }, {
    key: 'centerVertically',
    value: function centerVertically() {
      var diff = window.innerHeight - this.modalInner.offsetHeight;
      if (diff > 0) {
        this.modalInner.style.marginTop = diff / 2 + "px";
      }
    }
  }, {
    key: 'preventPropagation',
    value: function preventPropagation(e) {
      if (!e) return;
      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: 'renderModal',
    value: function renderModal(props) {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          onHide = _props.onHide,
          onShow = _props.onShow,
          onChange = _props.onChange,
          visible = _props.visible,
          rest = _objectWithoutProperties(_props, ['children', 'onHide', 'onShow', 'onChange', 'visible']);

      var classes = (0, _classnames2.default)({
        "modal-container": true
      });

      return _react2.default.createElement(
        'div',
        _extends({}, rest, { className: classes, ref: function ref(c) {
            return _this3.modal = c;
          }, onClick: this.hide }),
        _react2.default.createElement(
          'div',
          { className: 'modal', ref: function ref(c) {
              return _this3.modalInner = c;
            }, style: { position: "relative" }, onClick: this.preventPropagation },
          _react2.default.createElement(_reactNotifyResize.NotifyResize, { onResize: this.centerVertically }),
          children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.Action = _modalAction2.default;
Modal.Content = _modalContent2.default;
Modal.Footer = _modalFooter2.default;

exports.default = Modal;