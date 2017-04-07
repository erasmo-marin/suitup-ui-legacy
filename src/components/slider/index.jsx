import React from "react";
import classnames from "classnames";
import Slide from "./slide";
import Icon from "../icon";
import Box from "../box";
import isArray from "lodash/fp/isArray";
import Draggable, { DraggableCore } from "react-draggable";
import suitupable from "../component";

const Element = React.Element;

@suitupable(true, true)
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.previous = ::this.previous;
        this.next = ::this.next;
        this.goTo = ::this.goTo;

        this.onStartDrag = ::this.onStartDrag;
        this.onEndDrag = ::this.onEndDrag;
        this.onDrag = ::this.onDrag;
        this.onResize = ::this.onResize;

        this.slides = [];

        this.state = {
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
            animation: "translate", //translate - fade - zoom
        };
        this.loadSettings(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadSettings(nextProps.settings);
        this.setState(this.state);
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    loadSettings(settings) {
        if (!settings) return;
        this.state = { ...this.state, ...settings };
    }

    onResize() {
        this.goTo(this.state.activeIndex);
    }

    previous() {
        let active = this.state.activeIndex;

        if (active - 1 < 0) active = this.props.children.length - 1;
        else --active;
        this.goTo(active);
    }

    next() {
        let active = this.state.activeIndex;

        if (active > this.props.children.length - 2) active = 0;
        else ++active;
        this.goTo(active);
    }

    goTo(index) {
        if (index < 0) {
            index = 0;
        }

        if (index > this.props.children.length - 1) {
            index = this.props.children.length - 1;
        }

        this.draggableContent.style.transition = "all 0.5s ease-in-out";
        let dw = this.draggableContent.offsetWidth;
        let sw = dw / this.props.children.length;

        let x = sw * index * (-1);

        this.setState({
            activeIndex: index,
        });
        this.draggableComponent.setState({
            x: x,
        });

        setTimeout(
            () => {
                this.draggableContent.style.transition = "";
            },
            500,
        );
    }

    setupChildStyle(props, style) {
        let res = null;

        if (props.children) {
            if (isArray(props.children)) {
                res = props.children.map(
                    function(element) {
                        return React.cloneElement(element, {
                            style: style,
                        });
                    },
                    this,
                );
            } else {
                res = React.cloneElement(props.children, {
                    style: style,
                });
            }
        }
        return res;
    }

    onStartDrag(event) {
        this.state.positionTrack = this.draggableComponent.state.x;
    }

    onDrag(event) {
        return;
    }

    onEndDrag(event) {
        let x = (-1) * this.draggableComponent.state.x;
        let dw = this.draggableContent.offsetWidth;
        let sw = dw / this.props.children.length;

        let index = parseInt(x / sw);

        //percent of minimal drag is 30% of a slide width
        let minimumDrag = sw * 0.3;

        if (Math.abs(this.state.positionTrack - x * (-1)) < minimumDrag) {
            this.goTo(this.state.activeIndex);
            return;
        }

        if (x * (-1) < this.state.positionTrack) {
            index++;
        }

        this.goTo(index);
    }

    render() {
        let classes = {
            slider: true,
        };

        classes = classnames(classes);
        //let translate = this.state.activeIndex * (100/this.props.children.length) * -1;

        let slideStyle = {
            width: `calc(${100 / this.props.children.length}% - 4rem)`,
            display: "inline-block",
            margin: "1rem 2rem",
            boxSizing: "border-box",
        };

        let style = {
            /*transform: `translateX(${translate}%)`,*/
            width: `${this.props.children.length * 100}%`,
        };

        return (
            <div className={classes}>
                <If condition={this.state.showArrows}>
                    <div
                        className="slider-arrow slider-arrow-left"
                        onClick={this.previous}
                    >
                        <Icon name="chevron_left" size={this.state.arrowSize} />
                    </div>
                    <div
                        className="slider-arrow slider-arrow-right"
                        onClick={this.next}
                    >
                        <Icon
                            name="chevron_right"
                            size={this.state.arrowSize}
                        />
                    </div>
                </If>
                <Draggable
                    axis="x"
                    onStart={this.onStartDrag}
                    onDrag={this.onDrag}
                    onStop={this.onEndDrag}
                    position={this.state.position}
                    ref={c => {
                        this.draggableComponent = c;
                    }}
                >
                    <div
                        className="slider-slide-wrapper"
                        style={style}
                        ref={c => {
                            this.draggableContent = c;
                        }}
                    >
                        {this.props.children.map((child, index) => {
                            //we render the component after and before the current one and the components that was loaded before
                            let shouldRenderChild = !this.state.lazyLoad ||
                                this.state.lazyLoad &&
                                    Math.abs(this.state.activeIndex - index) <
                                        2;

                            if (
                                shouldRenderChild && !this.state.minimalRender
                            ) {
                                this.state.alreadyLoaded[index] = true;
                            }

                            return (
                                <div
                                    style={slideStyle}
                                    key={index}
                                    ref={c => {
                                        this.slides[index] = c;
                                    }}
                                >
                                    <If
                                        condition={
                                            shouldRenderChild ||
                                                this.state.alreadyLoaded[index]
                                        }
                                    >
                                        {child}
                                    </If>
                                </div>
                            );
                        })}
                    </div>
                </Draggable>

                <If condition={this.state.showDots}>
                    <div className="slider-dots-wrapper">
                        <div className="slider-dots">
                            <Box
                                horizontal
                                columns={this.props.children.length}
                                gutter="0"
                            >
                                {this.props.children.map((child, index) => {
                                    let classes = classnames({
                                        dot: true,
                                        active: index == this.state.activeIndex
                                            ? true
                                            : false,
                                    });

                                    return (
                                        <Box.Child
                                            key={index}
                                            onClick={() => this.goTo(index)}
                                            wide={1}
                                        >
                                            <div className={classes} />
                                        </Box.Child>
                                    );
                                })}
                            </Box>
                        </div>
                    </div>
                </If>
            </div>
        );
    }
}

Slider.Slide = Slide;
export default Slider;
