"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fbemitter = require("fbemitter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultSettings = {
    Image: {
        aspectRatios: {
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
        }
    },
    Device: {
        Breakpoints: {
            mobile: {
                from: 0,
                to: 768
            },
            tablet: {
                from: 769,
                to: 999
            },
            desktop: {
                from: 1000,
                to: 1191
            },
            widescreen: {
                from: 1192,
                to: Number.MAX_SAFE_INTEGER
            }
        }
    },
    /*If you don't pass gutter or columns props, Box will use this defaults*/
    Box: {
        gutter: "1rem",
        columns: 12
    }
};

var settings = defaultSettings;

var S = function (_EventEmitter) {
    _inherits(S, _EventEmitter);

    function S() {
        _classCallCheck(this, S);

        return _possibleConstructorReturn(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments));
    }

    _createClass(S, [{
        key: "emitChange",
        value: function emitChange(settings) {
            this.emit("settingsChange", settings);
        }
    }, {
        key: "onSettingsChange",
        value: function onSettingsChange(callback) {
            return this.addListener("settingsChange", callback);
        }
    }, {
        key: "setSettings",
        value: function setSettings(userSettings) {
            settings = _extends({}, defaultSettings, userSettings);
            this.emitChange(settings);
        }
    }, {
        key: "getSettings",
        value: function getSettings() {
            return settings;
        }
    }, {
        key: "getDefaultSettings",
        value: function getDefaultSettings() {
            return defaultSettings;
        }
    }, {
        key: "resetToDefault",
        value: function resetToDefault() {
            settings = defaultSettings;
            this.emitChange(settings);
        }
    }]);

    return S;
}(_fbemitter.EventEmitter);

var s = new S();
var _default = s;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(defaultSettings, "defaultSettings", "src/components/settings.js");

    __REACT_HOT_LOADER__.register(settings, "settings", "src/components/settings.js");

    __REACT_HOT_LOADER__.register(S, "S", "src/components/settings.js");

    __REACT_HOT_LOADER__.register(s, "s", "src/components/settings.js");

    __REACT_HOT_LOADER__.register(_default, "default", "src/components/settings.js");
}();

;