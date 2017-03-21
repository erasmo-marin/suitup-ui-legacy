"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _placeholder = require("./placeholder");

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = function Paragraph(_ref) {
    var text = _ref.text,
        loading = _ref.loading,
        placeholder = _ref.placeholder,
        children = _ref.children;


    var classes = (0, _classnames2.default)({
        "paragraph-holder": true,
        "loading": loading
    });

    return _react2.default.createElement(
        "div",
        { className: classes },
        loading ? _react2.default.createElement(_placeholder2.default, placeholder) : children != undefined ? _react2.default.createElement(
            "p",
            null,
            children
        ) : _react2.default.createElement(
            "p",
            null,
            text
        )
    );
};

exports.default = Paragraph;