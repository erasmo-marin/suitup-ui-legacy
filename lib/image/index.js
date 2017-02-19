"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _imageVail = require("./imageVail");

var _imageVail2 = _interopRequireDefault(_imageVail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizes = {
    square: {
        width: 600,
        height: 600
    },
    mediumv: {
        width: 600,
        height: 800
    },
    mediumh: {
        width: 800,
        height: 600
    },
    poster: {
        width: 600,
        height: 900
    },
    backdrop: {
        width: 1600,
        height: 900
    },
    banner: {
        width: 2000,
        height: 400
    }
};

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.recalculeSize = _this.recalculeSize.bind(_this);
        _this.state = {
            width: _this.props.width ? _this.props.width : 0,
            height: _this.props.height ? _this.props.height : 0
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
        key: "recalculeSize",
        value: function recalculeSize() {
            var width = void 0,
                height = 0;
            var dimensions = void 0;

            if (this.props.type) {
                dimensions = sizes[this.props.type];
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
                    size = size * width / 100;
                } else if (axis == "y") {
                    size = size * height / 100;
                }
            }
            return size;
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                width = _props.width,
                height = _props.height,
                src = _props.src,
                style = _props.style,
                type = _props.type,
                centered = _props.centered,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ["width", "height", "src", "style", "type", "centered", "children"]);

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

            var rstyle = {
                backgroundImage: src != "none" ? "url(" + src + ")" : "none",
                width: "" + rwidth,
                height: "" + rheight,
                backgroundSize: "cover",
                backgroundPositon: "center"
            };

            if (style) {
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
                children
            );
        }
    }]);

    return Image;
}(_react2.default.Component);

Image.Vail = _imageVail2.default;

var _default = Image;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(sizes, "sizes", "src/components/image/index.jsx");

    __REACT_HOT_LOADER__.register(Image, "Image", "src/components/image/index.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/image/index.jsx");
}();

;