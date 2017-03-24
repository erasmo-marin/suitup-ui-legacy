"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _findKey = require("lodash/fp/findKey");

var _findKey2 = _interopRequireDefault(_findKey);

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

        _this.between = function (val) {
            return function (interval) {
                return interval.from <= val && interval.to >= val;
            };
        };

        _this.getScreen = function () {
            return (0, _findKey2.default)(_this.between(window.innerWidth), breakpoints);
        };

        _this.emitChange = function (screen) {
            return _this.emit("screenChange", screen);
        };

        _this.onScreenChange = function (callback) {
            return _this.addListener("screenChange", callback);
        };

        _this.screen = _this.getScreen();

        window.addEventListener("resize", function () {
            var newScreen = _this.getScreen();
            if (newScreen == _this.screen) return;

            _this.screen = newScreen;
            _this.emitChange(_this.screen);
        });
        return _this;
    }

    return ScreenClass;
}(_fbemitter.EventEmitter);

var Screen = new ScreenClass();
exports.default = Screen;