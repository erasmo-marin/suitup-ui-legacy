"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isObject2 = require("lodash/fp/isObject");

var _isObject3 = _interopRequireDefault(_isObject2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _imageVail = require("./imageVail");

var _imageVail2 = _interopRequireDefault(_imageVail);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

var _reactInviewJs = require("react-inview-js");

var _reactInviewJs2 = _interopRequireDefault(_reactInviewJs);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = (_dec = (0, _reactInviewJs2.default)({ fullElementInView: false }), _dec2 = (0, _component2.default)(true, true), _dec(_class = _dec2(_class = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.onHQLoad = function () {
            return _this.setState({
                src: _this.state.hqSrc ? _this.state.hqSrc : _this.state.lqSrc,
                hqSrcLoaded: true
            });
        };

        _this.recalculeSize = _this.recalculeSize.bind(_this);

        var src = props.src;


        var lqSrc = void 0,
            hqSrc = void 0;

        if ((0, _isObject3.default)(src)) {
            lqSrc = src.lq;
            hqSrc = src.hq;
            src = lqSrc;
        }

        _this.state = {
            width: _this.props.width ? _this.props.width : 0,
            height: _this.props.height ? _this.props.height : 0,
            lqSrc: lqSrc,
            hqSrc: hqSrc,
            src: src,
            hqSrcLoaded: false
        };
        return _this;
    }

    _createClass(Image, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                _this2.recalculeSize();
            }, 1);
            window.addEventListener("resize", this.recalculeSize);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.recalculeSize);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            var src = props.src;


            if (src == this.state.src) return;

            var hqSrcLoaded = this.state.hqSrcLoaded;

            var lqSrc = void 0,
                hqSrc = void 0;

            if ((0, _isObject3.default)(src)) {
                if (this.state.lqSrc == src.lq && this.state.hqSrc == src.hq) return;

                if (hqSrcLoaded && this.state.hqSrc == src.hq) return;
                lqSrc = src.lq;
                hqSrc = src.hq;
                src = lqSrc;
            }

            this.setState({
                lqSrc: lqSrc,
                hqSrc: hqSrc,
                src: src,
                hqSrcLoaded: false
            });
        }
    }, {
        key: "recalculeSize",
        value: function recalculeSize() {
            var width = void 0,
                height = 0;
            var dimensions = void 0;
            var sizes = (0, _get2.default)(this, "props.settings.Image.aspectRatios");

            if (this.props.type) {
                dimensions = (0, _get2.default)(sizes, this.props.type);
            }

            if (this.props.width && !this.props.height) {
                width = this.computeSizeInPixels(this.props.width, "x");
                height = this.getHeightFromWidth(dimensions, width);
            } else if (this.props.height && !this.props.width) {
                height = this.computeSizeInPixels(this.props.height, "y");
                width = this.getWidthFromHeight(dimensions, height);
            } else {
                width = this.computeSizeInPixels(this.props.width, "x");
                height = this.computeSizeInPixels(this.props.height, "y");
            }

            this.setState({
                width: width + "px",
                height: height + "px"
            });
        }
    }, {
        key: "getHeightFromWidth",
        value: function getHeightFromWidth(dimensions, width) {
            return width / (dimensions.width / dimensions.height);
        }
    }, {
        key: "getWidthFromHeight",
        value: function getWidthFromHeight(dimensions, height) {
            return height * (dimensions.width / dimensions.height);
        }
    }, {
        key: "isPercent",
        value: function isPercent(str) {
            if (str.endsWith("%")) {
                return true;
            }
            return false;
        }
    }, {
        key: "isPixel",
        value: function isPixel(str) {
            if (str.endsWith("px")) {
                return true;
            }
            return false;
        }
    }, {
        key: "computeSizeInPixels",
        value: function computeSizeInPixels(size, axis) {
            var isPercent = false;

            if (this.isPercent(size)) {
                isPercent = true;
                size = parseFloat(size.replace("%", ""));
            } else if (size.endsWith("px")) {
                size = parseFloat(size.replace("px", ""));
            }

            var width = this.image.offsetWidth;
            var height = this.image.offsetHeight;

            if (isPercent) {
                if (axis == "x") {
                    size = width;
                } else if (axis == "y") {
                    size = height;
                }
            }
            return size;
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                elementIsInView = _props.elementIsInView,
                elementHasBeenInView = _props.elementHasBeenInView,
                boundingBox = _props.boundingBox,
                viewPortBox = _props.viewPortBox,
                elementIsHasBeenInView = _props.elementIsHasBeenInView,
                update = _props.update,
                width = _props.width,
                height = _props.height,
                src = _props.src,
                style = _props.style,
                type = _props.type,
                centered = _props.centered,
                children = _props.children,
                screen = _props.screen,
                settings = _props.settings,
                blurLowQuality = _props.blurLowQuality,
                rest = _objectWithoutProperties(_props, ["elementIsInView", "elementHasBeenInView", "boundingBox", "viewPortBox", "elementIsHasBeenInView", "update", "width", "height", "src", "style", "type", "centered", "children", "screen", "settings", "blurLowQuality"]);

            var _state = this.state,
                lqSrc = _state.lqSrc,
                hqSrc = _state.hqSrc;


            var rwidth = void 0,
                rheight = void 0;

            if (width && (this.isPercent(width) || this.isPixel(width))) {
                rwidth = width;
            } else {
                rwidth = this.state.width;
            }

            if (height && (this.isPercent(height) || this.isPixel(height))) {
                rheight = height;
            } else {
                rheight = this.state.height;
            }

            var rstyle = _defineProperty({
                backgroundImage: src != "none" ? "url(" + this.state.src + ")" : "none",
                width: "" + rwidth,
                height: "" + rheight,
                backgroundSize: "cover",
                backgroundPositon: "center",
                transition: "all 0.5s ease-in-out",
                transitionProperty: "filter, background-image",
                overflow: "hidden"
            }, screen, true);

            if (this.state.src == this.state.lqSrc && blurLowQuality) {
                rstyle.filter = "blur(5px)";
            }

            if (style) {
                delete style.width;
                delete style.height;
                rstyle = _extends({}, rstyle, style);
            }

            var classes = {
                image: true,
                centered: centered
            };

            classes = (0, _classnames2.default)(classes);

            return _react2.default.createElement(
                "div",
                _extends({}, rest, {
                    className: classes,
                    style: rstyle,
                    ref: function ref(c) {
                        _this3.image = c;
                    }
                }),
                lqSrc && hqSrc ? [_react2.default.createElement("img", { style: { display: "none" }, src: lqSrc, key: "0"
                }), elementIsInView || elementHasBeenInView ? _react2.default.createElement("img", {
                    style: { display: "none" },
                    src: hqSrc,
                    onLoad: this.onHQLoad,
                    key: "1"
                }) : null] : null,
                children
            );
        }
    }]);

    return Image;
}(_react2.default.Component)) || _class) || _class);


Image.Vail = _imageVail2.default;

exports.default = Image;