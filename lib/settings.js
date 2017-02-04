"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    /*If you don't pass gutter or columns props, Box will use this defaults*/
    Box: {
        gutter: "1rem",
        columns: 12
    }
};

var settings = {};

var S = function () {
    function S() {
        _classCallCheck(this, S);
    }

    _createClass(S, [{
        key: "setSettings",
        value: function setSettings(userSettings) {
            settings = _extends({}, defaultSettings, settings);
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
        }
    }]);

    return S;
}();

var s = new S();
exports.default = s;
module.exports = exports["default"];