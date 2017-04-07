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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = _react2.default.Element;

var Slider = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.previous = _this.previous.bind(_this);
        _this.next = _this.next.bind(_this);
        _this.goTo = _this.goTo.bind(_this);

        _this.onStartDrag = _this.onStartDrag.bind(_this);
        _this.onEndDrag = _this.onEndDrag.bind(_this);
        _this.onDrag = _this.onDrag.bind(_this);
        _this.onResize = _this.onResize.bind(_this);

        _this.slides = [];

        _this.state = {
            alreadyLoaded: [], //save the slides that has been rendered before
            activeIndex: 0, //index of the current active slider
            position: null, //the position object for the slider
            positionTrack: null, //the position used to track the drag event
            autoPlay: false,
            autoPlayDuration: 0,
            activeSlideWidth: 100,
            dragging: false,
            showArrows: true,
            showDots: true,
            centerMode: false, //show the other sliders and the current slider in the middle
            displayItems: 1, //the number of items to display
            arrowSize: 36, //the arrow font size, should be 16, 24, 36 or 48
            lazyLoad: false, //when true, the slider only loads the slides when needed
            minimalRender: false, //when true, the unused slides are not rendered, can cause some lag
            animation: "translate" };
        _this.loadSettings(_this.props);
        return _this;
    }

    _createClass(Slider, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.loadSettings(nextProps.settings);
            this.setState(this.state);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener("resize", this.onResize);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.onResize);
        }
    }, {
        key: "loadSettings",
        value: function loadSettings(settings) {
            if (!settings) return;
            this.state = _extends({}, this.state, settings);
        }
    }, {
        key: "onResize",
        value: function onResize() {
            this.goTo(this.state.activeIndex);
        }
    }, {
        key: "previous",
        value: function previous() {
            var active = this.state.activeIndex;

            if (active - 1 < 0) active = this.props.children.length - 1;else --active;
            this.goTo(active);
        }
    }, {
        key: "next",
        value: function next() {
            var active = this.state.activeIndex;

            if (active > this.props.children.length - 2) active = 0;else ++active;
            this.goTo(active);
        }
    }, {
        key: "goTo",
        value: function goTo(index) {
            var _this2 = this;

            if (index < 0) {
                index = 0;
            }

            if (index > this.props.children.length - 1) {
                index = this.props.children.length - 1;
            }

            this.draggableContent.style.transition = "all 0.5s ease-in-out";
            var dw = this.draggableContent.offsetWidth;
            var sw = dw / this.props.children.length;

            var x = sw * index * -1;

            this.setState({
                activeIndex: index
            });
            this.draggableComponent.setState({
                x: x
            });

            setTimeout(function () {
                _this2.draggableContent.style.transition = "";
            }, 500);
        }
    }, {
        key: "setupChildStyle",
        value: function setupChildStyle(props, style) {
            var res = null;

            if (props.children) {
                if ((0, _isArray2.default)(props.children)) {
                    res = props.children.map(function (element) {
                        return _react2.default.cloneElement(element, {
                            style: style
                        });
                    }, this);
                } else {
                    res = _react2.default.cloneElement(props.children, {
                        style: style
                    });
                }
            }
            return res;
        }
    }, {
        key: "onStartDrag",
        value: function onStartDrag(event) {
            this.state.positionTrack = this.draggableComponent.state.x;
        }
    }, {
        key: "onDrag",
        value: function onDrag(event) {
            return;
        }
    }, {
        key: "onEndDrag",
        value: function onEndDrag(event) {
            var x = -1 * this.draggableComponent.state.x;
            var dw = this.draggableContent.offsetWidth;
            var sw = dw / this.props.children.length;

            var index = parseInt(x / sw);

            //percent of minimal drag is 30% of a slide width
            var minimumDrag = sw * 0.3;

            if (Math.abs(this.state.positionTrack - x * -1) < minimumDrag) {
                this.goTo(this.state.activeIndex);
                return;
            }

            if (x * -1 < this.state.positionTrack) {
                index++;
            }

            this.goTo(index);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var classes = {
                slider: true
            };

            classes = (0, _classnames2.default)(classes);
            //let translate = this.state.activeIndex * (100/this.props.children.length) * -1;

            var slideStyle = {
                width: "calc(" + 100 / this.props.children.length + "% - 4rem)",
                display: "inline-block",
                margin: "1rem 2rem",
                boxSizing: "border-box"
            };

            var style = {
                /*transform: `translateX(${translate}%)`,*/
                width: this.props.children.length * 100 + "%"
            };

            return _react2.default.createElement(
                "div",
                { className: classes },
                this.state.showArrows ? [_react2.default.createElement(
                    "div",
                    {
                        className: "slider-arrow slider-arrow-left",
                        onClick: this.previous,
                        key: "0"
                    },
                    _react2.default.createElement(_icon2.default, { name: "chevron_left", size: this.state.arrowSize })
                ), _react2.default.createElement(
                    "div",
                    {
                        className: "slider-arrow slider-arrow-right",
                        onClick: this.next,
                        key: "1"
                    },
                    _react2.default.createElement(_icon2.default, {
                        name: "chevron_right",
                        size: this.state.arrowSize
                    })
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
                            _this3.draggableComponent = c;
                        }
                    },
                    _react2.default.createElement(
                        "div",
                        {
                            className: "slider-slide-wrapper",
                            style: style,
                            ref: function ref(c) {
                                _this3.draggableContent = c;
                            }
                        },
                        this.props.children.map(function (child, index) {
                            //we render the component after and before the current one and the components that was loaded before
                            var shouldRenderChild = !_this3.state.lazyLoad || _this3.state.lazyLoad && Math.abs(_this3.state.activeIndex - index) < 2;

                            if (shouldRenderChild && !_this3.state.minimalRender) {
                                _this3.state.alreadyLoaded[index] = true;
                            }

                            return _react2.default.createElement(
                                "div",
                                {
                                    style: slideStyle,
                                    key: index,
                                    ref: function ref(c) {
                                        _this3.slides[index] = c;
                                    }
                                },
                                shouldRenderChild || _this3.state.alreadyLoaded[index] ? child : null
                            );
                        })
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
                                    active: index == _this3.state.activeIndex ? true : false
                                });

                                return _react2.default.createElement(
                                    _box2.default.Child,
                                    {
                                        key: index,
                                        onClick: function onClick() {
                                            return _this3.goTo(index);
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
    }]);

    return Slider;
}(_react2.default.Component)) || _class);


Slider.Slide = _slide2.default;
exports.default = Slider;