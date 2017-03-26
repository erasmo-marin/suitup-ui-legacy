'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _documentOffset = require('document-offset');

var _documentOffset2 = _interopRequireDefault(_documentOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollerClass = function ScrollerClass() {
    var _this = this;

    _classCallCheck(this, ScrollerClass);

    this.to = function (to) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

        if (!to) return;
        var start = document.body.scrollTop;
        var change = (0, _documentOffset2.default)(to).top - start - 64;
        var interval = 16; //close to 60fps
        var positionIncrement = change * (interval / duration);
        var iterations = duration / interval;
        var animateScroll = function animateScroll(i) {
            if (i >= iterations) return;
            document.body.scrollTop = _this.easeInOut(2)(i / iterations) * change + start;
            setTimeout(function () {
                return animateScroll(++i);
            }, interval);
        };
        animateScroll(1);
    };

    this.easeIn = function (p) {
        return function (t) {
            return Math.pow(t, p);
        };
    };

    this.easeOut = function (p) {
        return function (t) {
            return 1 - Math.abs(Math.pow(t - 1, p));
        };
    };

    this.easeInOut = function (p) {
        return function (t) {
            return t < .5 ? _this.easeIn(p)(t * 2) / 2 : _this.easeOut(p)(t * 2 - 1) / 2 + 0.5;
        };
    };
};

var Scroller = new ScrollerClass();
exports.default = Scroller;