"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _random2 = require("lodash/fp/random");

var _random3 = _interopRequireDefault(_random2);

var _times2 = require("lodash/fp/times");

var _times3 = _interopRequireDefault(_times2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Placeholder = function Placeholder(_ref) {
    var rows = _ref.rows,
        animated = _ref.animated,
        justify = _ref.justify,
        lineSpacing = _ref.lineSpacing,
        fontSize = _ref.fontSize,
        color = _ref.color,
        rounded = _ref.rounded;

    var classes = (0, _classnames2.default)({
        "text-placeholder": true,
        animated: animated
    });

    var randomWidth = function randomWidth() {
        return (0, _random3.default)(90, 99, true) + "%";
    };

    return _react2.default.createElement(
        "div",
        { className: classes },
        _react2.default.createElement(
            "div",
            { className: "text-placeholder-animation-wrapper" },
            (0, _times3.default)(function () {
                var style = {
                    width: justify ? "100%" : randomWidth(),
                    height: fontSize ? fontSize + "px" : '16px',
                    marginTop: lineSpacing ? lineSpaciing / 2 + "px" : '15px',
                    marginBottom: lineSpacing ? lineSpaciing / 2 + "px" : '15px',
                    borderRadius: rounded ? '5px' : '0px'
                };
                style.backgroundColor = color ? color : undefined;
                return _react2.default.createElement("div", { style: style, className: "text-placeholder-row" });
            }, rows ? rows : 1)
        )
    );
};

exports.default = Placeholder;