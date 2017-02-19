"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = require("lodash/map");

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fbemitter = require("fbemitter");

var _settings = require("../settings");

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var breakpoints = _settings2.default.getSettings().Device.Breakpoints;

var ScreenClass = function (_EventEmitter) {
    _inherits(ScreenClass, _EventEmitter);

    function ScreenClass(args) {
        _classCallCheck(this, ScreenClass);

        var _this = _possibleConstructorReturn(this, (ScreenClass.__proto__ || Object.getPrototypeOf(ScreenClass)).call(this, args));

        _this.screen = _this.getScreen();

        window.addEventListener("resize", function () {
            var newScreen = _this.getScreen();
            if (newScreen == _this.screen) return;

            _this.screen = newScreen;
            _this.emitChange(_this.screen);
        });
        return _this;
    }

    _createClass(ScreenClass, [{
        key: "getScreen",
        value: function getScreen() {
            var width = window.innerWidth;
            var screen = window.screen;

            //default breakpoint
            var breakpoint = "desktop";

            (0, _map3.default)(breakpoints, function (size, type) {
                if (size.from <= width && size.to >= width) {
                    breakpoint = type;
                }
            });
            return breakpoint;
        }
    }, {
        key: "emitChange",
        value: function emitChange(screen) {
            this.emit("screenChange", screen);
        }
    }, {
        key: "onScreenChange",
        value: function onScreenChange(callback) {
            return this.addListener("screenChange", callback);
        }
    }]);

    return ScreenClass;
}(_fbemitter.EventEmitter);

var Screen = new ScreenClass();
var _default = Screen;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(breakpoints, "breakpoints", "src/components/device/screen.js");

    __REACT_HOT_LOADER__.register(ScreenClass, "ScreenClass", "src/components/device/screen.js");

    __REACT_HOT_LOADER__.register(Screen, "Screen", "src/components/device/screen.js");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/device/screen.js");
}();

;