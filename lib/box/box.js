"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _isArray = require("lodash/fp/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _boxChild = require("./boxChild");

var _boxChild2 = _interopRequireDefault(_boxChild);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Box = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(Box, _React$Component);

    function Box(props) {
        _classCallCheck(this, Box);

        return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));
    }

    _createClass(Box, [{
        key: "setupChildProps",
        value: function setupChildProps(props) {
            var _this2 = this;

            if (props.children && props.columns) {

                var gutter = this.parseGutter(props.gutter);
                if (gutter && gutter.number) {
                    gutter = gutter.number / 2 + gutter.measure;
                }

                if ((0, _isArray2.default)(props.children)) {
                    return props.children.map(function (element) {
                        var wides = element.props.wides;
                        var wide = void 0;

                        if (wides && wides[_this2.props.screen]) {
                            wide = wides[_this2.props.screen];
                        } else {
                            wide = element.props.wide ? element.props.wide : 1;
                        }

                        return _react2.default.cloneElement(element, {
                            columns: props.columns,
                            gutter: gutter ? gutter : "0.5rem",
                            wide: wide
                        });
                    }, this);
                } else {
                    return _react2.default.cloneElement(props.children, {
                        columns: props.columns,
                        gutter: gutter ? gutter : "0.5rem"
                    });
                }
            } else {
                return props.children;
            }
        }
    }, {
        key: "parseGutter",
        value: function parseGutter(gutter) {
            if (!gutter) return;

            var number = parseFloat(gutter);

            return {
                number: number,
                measure: gutter.replace(number, "")
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                verticalExpand = _props.verticalExpand,
                horizontal = _props.horizontal,
                vertical = _props.vertical,
                autoFill = _props.autoFill,
                centered = _props.centered,
                justify = _props.justify,
                align = _props.align,
                children = _props.children,
                columns = _props.columns,
                gutter = _props.gutter,
                screen = _props.screen,
                rest = _objectWithoutProperties(_props, ["verticalExpand", "horizontal", "vertical", "autoFill", "centered", "justify", "align", "children", "columns", "gutter", "screen"]);

            if (!gutter) {
                gutter = "0.5rem";
            }

            var classes = (0, _classnames2.default)({
                "box": true,
                "horizontal": vertical == null ? true : false,
                "vertical": vertical,
                "fill-space": autoFill,
                "centered": justify == "center",
                "left": justify == "left",
                "right": justify == "right",
                "align-start": align == "start",
                "align-end": align == "end",
                "align-center": align == "center",
                "align-stretch": align == "stretch",
                "align-baseline": align == "baseline",
                "full-height": verticalExpand
            });

            gutter = this.parseGutter(gutter);

            if (gutter && gutter.number) {
                gutter = gutter.number / 2 * -1 + gutter.measure;
            }

            var cstyle = {
                marginLeft: gutter,
                marginRight: gutter
            };

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { style: cstyle, className: classes }),
                this.setupChildProps(this.props)
            );
        }
    }]);

    return Box;
}(_react2.default.Component)) || _class);


Box.Child = _boxChild2.default;

Box.propTypes = {
    children: function children(props, propName, componentName) {
        var prop = props[propName];

        var error = null;
        _react2.default.Children.forEach(prop, function (child) {
            if (child.type.name != "Box.Child" && child.type.name != "BoxChild") {
                error = new Error("`" + componentName + "` children should be of type `Box.Child`, instead it was of type " + child.type.name);
            }
        });
        return error;
    }
};

exports.default = Box;