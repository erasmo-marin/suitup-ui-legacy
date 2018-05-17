"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _slide = require("./slide");

var _slide2 = _interopRequireDefault(_slide);

var _icon = require("../icon");

var _icon2 = _interopRequireDefault(_icon);

var _box = require("../box");

var _box2 = _interopRequireDefault(_box);

var _isArray = require("lodash/fp/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _reactDraggable = require("react-draggable");

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

var _concat = require("lodash/concat");

var _concat2 = _interopRequireDefault(_concat);

var _reverse = require("lodash/reverse");

var _reverse2 = _interopRequireDefault(_reverse);

var _cloneDeep = require("lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _merge = require("lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = (_dec = (0, _component2.default)(true, true), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _initialiseProps.call(_this);

        _this.slides = [];
        _this.dragging = false;
        _this.state = {
            alreadyLoaded: [], //save the slides that has been rendered before
            activeIndex: _this.props.activeIndex || 0, //index of the current active slider
            position: null, //the position object for the slider
            positionTrack: null, //the position used to track the drag event
            autoPlay: false,
            autoPlayDuration: 5000,
            activeSlideWidth: 100,
            dragging: false,
            showArrows: true,
            showDots: true,
            centerMode: false, //show the other sliders and the current slider in the middle
            displayItems: 1, //the number of items to display
            arrowSize: 36, //the arrow font size, should be 16, 24, 36 or 48
            lazyLoad: false, //when true, the slider only loads the slides when needed
            minimalRender: false, //when true, the unused slides are not rendered, can cause some lag
            animation: "translate", //translate - fade - zoom
            centerModePadding: 100,
            slidesSpacing: 50,
            slideStep: 1,
            infinite: false,
            animationTime: 500,
            nextArrow: false,
            prevArrow: false
        };

        _this.autoPlayInterval = false;
        _this.sliderIsLocked = false;

        _this.loadSettings(_this.props);
        return _this;
    }

    _createClass(Slider, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.loadSettings(nextProps.settings);

            var _props = this.props,
                autoPlay = _props.autoPlay,
                rest = _objectWithoutProperties(_props, ["autoPlay"]);

            this.setState(rest);
            if (this.props.autoPlay != nextProps.autoPlay) {
                this.autoPlayJob();
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener("resize", this.onResize);
            this._slider.addEventListener("click", this.checkClickPropagation);
            this.goTo(0, false);
            this.autoPlayJob();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.onResize);
            this._slider.removeEventListener("click", this.checkClickPropagation);
            if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
        }
    }, {
        key: "slideIsActive",
        value: function slideIsActive(index) {
            var _state = this.state,
                displayItems = _state.displayItems,
                activeIndex = _state.activeIndex;


            if (index >= activeIndex && index < displayItems + activeIndex) return true;
            return false;
        }

        /*This disable clicks globally while dragging because a bug in react-draggable*/

    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            this.loadSettings(this.props);

            var _state2 = this.state,
                slidesSpacing = _state2.slidesSpacing,
                displayItems = _state2.displayItems,
                centerMode = _state2.centerMode,
                centerModePadding = _state2.centerModePadding,
                showArrows = _state2.showArrows,
                arrowSize = _state2.arrowSize,
                lazyLoad = _state2.lazyLoad,
                activeIndex = _state2.activeIndex,
                minimalRender = _state2.minimalRender,
                alreadyLoaded = _state2.alreadyLoaded;
            var _props2 = this.props,
                nextArrow = _props2.nextArrow,
                prevArrow = _props2.prevArrow;


            var classes = {
                slider: true
            };

            classes = (0, _classnames2.default)(classes);
            var clonedElements = this.itemsToClone;
            var totalItems = this.props.children.length + 2 * clonedElements;
            //let translate = this.state.activeIndex * (100/this.props.children.length) * -1;

            var slideStyle = {
                width: "calc(" + 100 / (totalItems * displayItems) + "% - " + parseInt(slidesSpacing) + "px)",
                display: "inline-block",
                margin: "1rem " + parseInt(slidesSpacing / 2) + "px",
                boxSizing: "border-box"
            };

            var style = {
                /*transform: `translateX(${translate}%)`,*/
                width: totalItems * 100 + "%"
            };

            var sliderStyle = {
                paddingLeft: centerMode ? centerModePadding + "px" : "0px",
                paddingRight: centerMode ? centerModePadding + "px" : "0px",
                boxSizing: "border-box"
            };

            if (nextArrow) {
                nextArrow = _react2.default.cloneElement(nextArrow, {
                    onClick: this.onUserNext
                });
            }

            if (prevArrow) {
                prevArrow = _react2.default.cloneElement(prevArrow, {
                    onClick: this.onUserPrevious
                });
            }

            return _react2.default.createElement(
                "div",
                { className: classes, style: sliderStyle, ref: function ref(c) {
                        return _this2._slider = c;
                    } },
                showArrows ? [prevArrow ? prevArrow : _react2.default.createElement(
                    "div",
                    {
                        className: "slider-arrow slider-arrow-left",
                        onClick: this.onUserPrevious,
                        key: "0"
                    },
                    _react2.default.createElement(_icon2.default, { name: "chevron_left", size: arrowSize })
                ), nextArrow ? nextArrow : _react2.default.createElement(
                    "div",
                    {
                        className: "slider-arrow slider-arrow-right",
                        onClick: this.onUserNext,
                        key: "1"
                    },
                    _react2.default.createElement(_icon2.default, { name: "chevron_right", size: arrowSize })
                )] : null,
                _react2.default.createElement(
                    _reactDraggable2.default,
                    {
                        axis: "x",
                        onStart: this.onStartDrag,
                        onDrag: this.onDrag,
                        onStop: this.onEndDrag,
                        position: this.state.position,
                        ref: function ref(c) {
                            _this2.draggableComponent = c;
                        }
                    },
                    _react2.default.createElement(
                        "div",
                        {
                            className: "slider-slide-wrapper",
                            style: style,
                            ref: function ref(c) {
                                _this2.draggableContent = c;
                            }
                        },
                        _react2.default.createElement(
                            "div",
                            { className: "slider-visible-area" },
                            (0, _concat2.default)(this.rightClonedItems, this.props.children, this.leftClonedItems).map(function (child, index) {
                                var currentIndex = index - clonedElements;
                                var slideIsActive = _this2.slideIsActive(currentIndex);
                                var shouldRenderSlide = _this2.shouldRenderSlide(currentIndex, index);

                                return shouldRenderSlide ? _react2.default.createElement(
                                    "div",
                                    {
                                        style: slideStyle,
                                        key: currentIndex,
                                        ref: function ref(c) {
                                            _this2.slides[index] = c;
                                        },
                                        className: slideIsActive ? "slide-active" : "slide-inactive",
                                        onClick: _this2.checkClickPropagation,
                                        onMouseUp: _this2.checkClickPropagation
                                    },
                                    child
                                ) : _react2.default.createElement("div", {
                                    style: slideStyle,
                                    key: currentIndex
                                });
                            })
                        )
                    )
                ),
                this.state.showDots ? _react2.default.createElement(
                    "div",
                    { className: "slider-dots-wrapper" },
                    _react2.default.createElement(
                        "div",
                        { className: "slider-dots" },
                        _react2.default.createElement(
                            _box2.default,
                            {
                                horizontal: true,
                                columns: this.props.children.length,
                                gutter: "0"
                            },
                            this.props.children.map(function (child, index) {
                                var classes = (0, _classnames2.default)({
                                    dot: true,
                                    active: index == activeIndex ? true : false
                                });

                                return _react2.default.createElement(
                                    _box2.default.Child,
                                    {
                                        key: index,
                                        onClick: function onClick() {
                                            return _this2.goTo(index);
                                        },
                                        wide: 1
                                    },
                                    _react2.default.createElement("div", { className: classes })
                                );
                            })
                        )
                    )
                ) : null
            );
        }
    }, {
        key: "dragging",
        set: function set(val) {
            console.log("set dragging", !!val);
            this._dragging = !!val;
        },
        get: function get() {
            return !!this._dragging;
        }
    }, {
        key: "itemsToClone",
        get: function get() {
            var _state3 = this.state,
                _state3$displayItems = _state3.displayItems,
                displayItems = _state3$displayItems === undefined ? 1 : _state3$displayItems,
                _state3$centerMode = _state3.centerMode,
                centerMode = _state3$centerMode === undefined ? false : _state3$centerMode,
                _state3$infinite = _state3.infinite,
                infinite = _state3$infinite === undefined ? false : _state3$infinite;

            if (!infinite) return 0;
            return displayItems + (centerMode ? 2 : 0);
        }
    }, {
        key: "leftClonedItems",
        get: function get() {
            var top = this.itemsToClone;
            var result = [];
            var index = 0;
            for (var i = 0; i < top; i++) {
                result.push(this.props.children[index]);
                index++;
                if (index >= this.props.children.length) index = 0;
            }
            return result;
        }
    }, {
        key: "rightClonedItems",
        get: function get() {
            var result = [];

            var times = this.itemsToClone;
            var index = this.props.children.length - 1;
            for (var i = times; i > 0; i--) {
                result.unshift(this.props.children[index]);
                index--;
                if (index < 0) index = this.props.children.length - 1;
            }
            return result;
        }
    }]);

    return Slider;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.autoPlayJob = function () {
        var _state$autoPlayDurati = _this3.state.autoPlayDuration,
            autoPlayDuration = _state$autoPlayDurati === undefined ? 5000 : _state$autoPlayDurati;


        if (_this3.autoPlayInterval) clearInterval(_this3.autoPlayInterval);

        _this3.autoPlayInterval = setInterval(function () {
            if (_this3.state.autoPlay) _this3.next();
        }, autoPlayDuration);
    };

    this.loadSettings = function (settings) {
        if (!settings) return;
        var screen = _this3.props.screen;

        var screenSettings = (0, _get2.default)(settings, screen, {});
        var preservedIndex = _this3.state.activeIndex;
        (0, _merge2.default)(_this3.state, settings, screenSettings);
        _this3.state.activeIndex = preservedIndex;
    };

    this.onResize = function () {
        setTimeout(function () {
            _this3.goTo(_this3.state.activeIndex);
        }, 500);
    };

    this.previous = function () {
        if (_this3.sliderIsLocked) return;
        var _state4 = _this3.state,
            infinite = _state4.infinite,
            slideStep = _state4.slideStep,
            animationTime = _state4.animationTime;
        var children = _this3.props.children;

        var active = _this3.state.activeIndex;

        if (infinite) {
            active -= slideStep;
            _this3.goTo(active);
            setTimeout(function () {
                if (active < 0) _this3.goTo(children.length - active - 2, false);
            }, animationTime);
        } else {
            if (active - slideStep < 0) {
                if (slideStep === 1) active = children.length - 1;else active = 0;
            } else {
                active = active - slideStep;
            }
            _this3.goTo(active);
        }
    };

    this.next = function () {
        if (_this3.sliderIsLocked) return;
        var _state5 = _this3.state,
            infinite = _state5.infinite,
            slideStep = _state5.slideStep,
            animationTime = _state5.animationTime;
        var children = _this3.props.children;

        var active = _this3.state.activeIndex;
        if (infinite) {
            active += slideStep;
            _this3.goTo(active);
            setTimeout(function () {
                if (active > children.length - 1) {
                    _this3.goTo(active - children.length, false);
                }
            }, animationTime);
        } else {
            if (active > children.length - slideStep - 1) {
                if (slideStep === 1) active = 0;else active = children.length - 1;
            } else {
                active = active + slideStep;
            }
            _this3.goTo(active);
        }
    };

    this.goTo = function (index) {
        var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (_this3.sliderIsLocked) return;
        index = index + _this3.itemsToClone;
        var totalItems = _this3.props.children.length + 2 * _this3.itemsToClone;

        var _state6 = _this3.state,
            displayItems = _state6.displayItems,
            slideStep = _state6.slideStep,
            animationTime = _state6.animationTime;


        if (index < 0) {
            index = 0;
        }

        if (index > totalItems - 1) {
            index = totalItems - 1;
        }

        if (animate) _this3.draggableContent.style.transition = "all " + animationTime / 1000 + "s ease-in-out";
        var dw = _this3.draggableContent.offsetWidth;
        var sw = dw / totalItems;

        var x = sw * index * -1 / displayItems;

        var maxX = (sw * (totalItems - 1) - sw * (displayItems - 1)) / displayItems;

        if (-1 * x > maxX) x = -1 * maxX;

        _this3.sliderIsLocked = true;

        _this3.setState({
            activeIndex: index - _this3.itemsToClone
        }, function () {
            _this3.draggableComponent.setState({ x: x });

            setTimeout(function () {
                _this3.draggableContent.style.transition = "";
                _this3.sliderIsLocked = false;
            }, animationTime);
            //we return the x variable in order to check if it has changed
            return x;
        });
    };

    this.setupChildStyle = function (props, style) {
        var res = null;

        if (props.children) {
            if ((0, _isArray2.default)(props.children)) {
                res = props.children.map(function (element) {
                    return _react2.default.cloneElement(element, {
                        style: style
                    });
                }, _this3);
            } else {
                res = _react2.default.cloneElement(props.children, {
                    style: style
                });
            }
        }
        return res;
    };

    this.onStartDrag = function (event) {
        event.stopPropagation();
        event.preventDefault();
        _this3.stopAutoPlay();
        _this3.state.positionTrack = _this3.draggableComponent.state.x;
        return true;
    };

    this.onDrag = function (event) {
        event.stopPropagation();
        event.preventDefault();
        console.log("on drag");
        _this3.dragging = true;
        return true;
    };

    this.onEndDrag = function (event) {
        event.stopPropagation();
        event.preventDefault();

        if (_this3.dragging) {
            setTimeout(function () {
                _this3.dragging = false;
            }, 500);
        } else {
            _this3.dragging = false;
        }
        console.log("end drag");
        var _state7 = _this3.state,
            displayItems = _state7.displayItems,
            infinite = _state7.infinite,
            slideStep = _state7.slideStep,
            animationTime = _state7.animationTime;
        var children = _this3.props.children;

        var totalItems = children.length + 2 * _this3.itemsToClone;
        var x = -1 * _this3.draggableComponent.state.x;
        var dw = _this3.draggableContent.offsetWidth;
        var sw = dw / totalItems / displayItems;

        var index = parseInt(x / sw);

        //percent of minimal drag is 30% of a slide width
        var minimumDrag = sw * 0.3;

        if (Math.abs(_this3.state.positionTrack - x * -1) < minimumDrag) {
            _this3.goTo(_this3.state.activeIndex);
            return false;
        }

        if (x * -1 < _this3.state.positionTrack) {
            index++;
        }

        var active = index - _this3.itemsToClone;
        _this3.goTo(active);

        if (infinite) {
            setTimeout(function () {
                if (active < 0) _this3.goTo(children.length - active - 2, false);
                if (active > children.length - 1) _this3.goTo(active - children.length, false);
            }, animationTime);
        }
        return false;
    };

    this.stopAutoPlay = function () {
        if (_this3.autoPlayInterval) {
            clearInterval(_this3.autoPlayInterval);
        }
    };

    this.onUserNext = function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        _this3.stopAutoPlay();
        _this3.next();
    };

    this.onUserPrevious = function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        _this3.stopAutoPlay();
        _this3.previous();
    };

    this.shouldRenderSlide = function (currentIndex, index) {
        var _state8 = _this3.state,
            activeIndex = _state8.activeIndex,
            lazyLoad = _state8.lazyLoad,
            displayItems = _state8.displayItems,
            itemsToClone = _state8.itemsToClone;

        //should be rendered always

        if (!lazyLoad) {
            return true;
        }

        //the component is already mounted, so render it anyways
        if (_this3.slides[index]) {
            return true;
        }

        var left = activeIndex - 1;
        var right = activeIndex + displayItems + 1;

        if (left <= currentIndex && right > currentIndex) {
            return true;
        }

        return false;
    };

    this.checkClickPropagation = function (e) {
        if (_this3.dragging === true) {
            e.preventDefault();
            e.stopPropagation();
        }
        console.log("check click propagation", _this3.dragging);
    };
}, _temp)) || _class);


Slider.Slide = _slide2.default;
exports.default = Slider;