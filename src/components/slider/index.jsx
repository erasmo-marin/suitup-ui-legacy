import React from "react";
import classnames from "classnames";
import Slide from "./slide";
import Icon from "../icon";
import Box from "../box";
import isArray from "lodash/fp/isArray";
import Draggable, { DraggableCore } from "react-draggable";
import suitupable from "../component";
import concat from "lodash/concat";
import reverse from "lodash/reverse";
import cloneDeep from "lodash/cloneDeep";
import merge from "lodash/merge";
import get from "lodash/get";

@suitupable(true, true)
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.slides = [];
        this.dragging = false;
        this.state = {
            alreadyLoaded: [], //save the slides that has been rendered before
            activeIndex: this.props.activeIndex || 0, //index of the current active slider
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

        this.autoPlayInterval = false;
        this.sliderIsLocked = false;

        this.loadSettings(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadSettings(nextProps.settings);
        const { autoPlay, ...rest } = this.props;
        this.setState(rest);
        if (this.props.autoPlay != nextProps.autoPlay) {
            this.autoPlayJob();
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
        this._slider.addEventListener("click", this.checkClickPropagation);
        this.goTo(0, false);
        this.autoPlayJob();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
        this._slider.removeEventListener("click", this.checkClickPropagation);
        if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    }

    autoPlayJob = () => {
        const { autoPlayDuration = 5000 } = this.state;

        if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);

        this.autoPlayInterval = setInterval(() => {
            if (this.state.autoPlay) this.next();
        }, autoPlayDuration);
    };

    loadSettings = settings => {
        if (!settings) return;
        const { screen } = this.props;
        let screenSettings = get(settings, screen, {});
        const preservedIndex = this.state.activeIndex;
        merge(this.state, settings, screenSettings);
        this.state.activeIndex = preservedIndex;
    };

    onResize = () => {
        setTimeout(() => {
            this.goTo(this.state.activeIndex);
        }, 500);
    };

    previous = () => {
        if (this.sliderIsLocked) return;
        const { infinite, slideStep, animationTime } = this.state;
        const { children } = this.props;
        let active = this.state.activeIndex;

        if (infinite) {
            active -= slideStep;
            this.goTo(active);
            setTimeout(() => {
                if (active < 0) this.goTo(children.length - active - 2, false);
            }, animationTime);
        } else {
            if (active - slideStep < 0) {
                if (slideStep === 1) active = children.length - 1;
                else active = 0;
            } else {
                active = active - slideStep;
            }
            this.goTo(active);
        }
    };

    next = () => {
        if (this.sliderIsLocked) return;
        const { infinite, slideStep, animationTime } = this.state;
        const { children } = this.props;
        let active = this.state.activeIndex;
        if (infinite) {
            active += slideStep;
            this.goTo(active);
            setTimeout(() => {
                if (active > children.length - 1) {
                    this.goTo(active - children.length, false);
                }
            }, animationTime);
        } else {
            if (active > children.length - slideStep - 1) {
                if (slideStep === 1) active = 0;
                else active = children.length - 1;
            } else {
                active = active + slideStep;
            }
            this.goTo(active);
        }
    };

    goTo = (index, animate = true) => {
        if (this.sliderIsLocked) return;
        index = index + this.itemsToClone;
        const totalItems = this.props.children.length + 2 * this.itemsToClone;

        const { displayItems, slideStep, animationTime } = this.state;

        if (index < 0) {
            index = 0;
        }

        if (index > totalItems - 1) {
            index = totalItems - 1;
        }

        if (animate)
            this.draggableContent.style.transition = `all ${animationTime /
                1000}s ease-in-out`;
        let dw = this.draggableContent.offsetWidth;
        let sw = dw / totalItems;

        let x = sw * index * -1 / displayItems;

        const maxX =
            (sw * (totalItems - 1) - sw * (displayItems - 1)) / displayItems;

        if (-1 * x > maxX) x = -1 * maxX;

        this.sliderIsLocked = true;

        this.setState({
            activeIndex: index - this.itemsToClone
        }, () => {
            this.draggableComponent.setState({ x });

            setTimeout(() => {
                this.draggableContent.style.transition = "";
                this.sliderIsLocked = false;
            }, animationTime);
            //we return the x variable in order to check if it has changed
            return x;
        });
    };

    setupChildStyle = (props, style) => {
        let res = null;

        if (props.children) {
            if (isArray(props.children)) {
                res = props.children.map(function(element) {
                    return React.cloneElement(element, {
                        style: style
                    });
                }, this);
            } else {
                res = React.cloneElement(props.children, {
                    style: style
                });
            }
        }
        return res;
    };

    onStartDrag = event => {
        event.stopPropagation();
        event.preventDefault();
        this.stopAutoPlay();
        this.state.positionTrack = this.draggableComponent.state.x;
        return true;
    };

    onDrag = event => {
        event.stopPropagation();
        event.preventDefault();
        this.dragging = true;
        return true;
    };

    set dragging(val) {
        this._dragging = !!val;
    }

    get dragging() {
        return !!this._dragging;
    }

    onEndDrag = event => {
        event.stopPropagation();
        event.preventDefault();

        if(this.dragging) {
            setTimeout(() => {
                this.dragging = false;
            }, 500)
        } else {
            this.dragging = false;
        }
        const { displayItems, infinite, slideStep, animationTime } = this.state;
        const { children } = this.props;
        const totalItems = children.length + 2 * this.itemsToClone;
        let x = -1 * this.draggableComponent.state.x;
        let dw = this.draggableContent.offsetWidth;
        let sw = dw / totalItems / displayItems;

        let index = parseInt(x / sw);

        //percent of minimal drag is 30% of a slide width
        let minimumDrag = sw * 0.3;

        if (Math.abs(this.state.positionTrack - x * -1) < minimumDrag) {
            this.goTo(this.state.activeIndex);
            return false;
        }

        if (x * -1 < this.state.positionTrack) {
            index++;
        }

        let active = index - this.itemsToClone;
        this.goTo(active);

        if (infinite) {
            setTimeout(() => {
                if (active < 0) this.goTo(children.length - active - 2, false);
                if (active > children.length - 1)
                    this.goTo(active - children.length, false);
            }, animationTime);
        }
        return false;
    };

    stopAutoPlay = () => {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    };

    onUserNext = e => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.stopAutoPlay();
        this.next();
    };

    onUserPrevious = e => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.stopAutoPlay();
        this.previous();
    };

    get itemsToClone() {
        const {
            displayItems = 1,
            centerMode = false,
            infinite = false
        } = this.state;
        if (!infinite) return 0;
        return displayItems + (centerMode ? 2 : 0);
    }

    get leftClonedItems() {
        const top = this.itemsToClone;
        let result = [];
        let index = 0;
        for (let i = 0; i < top; i++) {
            result.push(this.props.children[index]);
            index++;
            if (index >= this.props.children.length) index = 0;
        }
        return result;
    }

    get rightClonedItems() {
        let result = [];

        const times = this.itemsToClone;
        let index = this.props.children.length - 1;
        for (let i = times; i > 0; i--) {
            result.unshift(this.props.children[index]);
            index--;
            if (index < 0) index = this.props.children.length - 1;
        }
        return result;
    }

    slideIsActive(index) {
        const { displayItems, activeIndex } = this.state;

        if (index >= activeIndex && index < displayItems + activeIndex)
            return true;
        return false;
    }

    shouldRenderSlide = (currentIndex, index) => {
        const {
            activeIndex,
            lazyLoad,
            displayItems,
            itemsToClone
        } = this.state;

        //should be rendered always
        if (!lazyLoad) {
            return true;
        }

        //the component is already mounted, so render it anyways
        if (this.slides[index]) {
            return true;
        }

        let left = activeIndex - 1;
        let right = activeIndex + displayItems + 1;

        if (left <= currentIndex && right > currentIndex) {
            return true;
        }

        return false;
    };

    /*This disable clicks globally while dragging because a bug in react-draggable*/
    checkClickPropagation = e => {
        if(this.dragging === true) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    render() {
        this.loadSettings(this.props);
        const {
            slidesSpacing,
            displayItems,
            centerMode,
            centerModePadding,
            showArrows,
            arrowSize,
            lazyLoad,
            activeIndex,
            minimalRender,
            alreadyLoaded
        } = this.state;

        let { nextArrow, prevArrow } = this.state;

        let classes = {
            slider: true
        };

        classes = classnames(classes);
        const clonedElements = this.itemsToClone;
        const totalItems = this.props.children.length + 2 * clonedElements;
        //let translate = this.state.activeIndex * (100/this.props.children.length) * -1;

        const slideStyle = {
            width: `calc(${100 / (totalItems * displayItems)}% - ${parseInt(
                slidesSpacing
            )}px)`,
            display: "inline-block",
            margin: `1rem ${parseInt(slidesSpacing / 2)}px`,
            boxSizing: "border-box"
        };

        const style = {
            /*transform: `translateX(${translate}%)`,*/
            width: `${totalItems * 100}%`
        };

        const sliderStyle = {
            paddingLeft: centerMode ? `${centerModePadding}px` : "0px",
            paddingRight: centerMode ? `${centerModePadding}px` : "0px",
            boxSizing: "border-box"
        };

        if (nextArrow) {
            nextArrow = React.cloneElement(nextArrow, {
                onClick: this.onUserNext
            });
        }

        if (prevArrow) {
            prevArrow = React.cloneElement(prevArrow, {
                onClick: this.onUserPrevious
            });
        }

        return (
            <div className={classes} style={sliderStyle} ref={c => this._slider = c}>
                <If condition={showArrows}>
                    <Choose>
                        <When condition={prevArrow}>{prevArrow}</When>
                        <Otherwise>
                            <div
                                className="slider-arrow slider-arrow-left"
                                onClick={this.onUserPrevious}
                            >
                                <Icon name="chevron_left" size={arrowSize} />
                            </div>
                        </Otherwise>
                    </Choose>
                    <Choose>
                        <When condition={nextArrow}>{nextArrow}</When>
                        <Otherwise>
                            <div
                                className="slider-arrow slider-arrow-right"
                                onClick={this.onUserNext}
                            >
                                <Icon name="chevron_right" size={arrowSize} />
                            </div>
                        </Otherwise>
                    </Choose>
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
                        <div className="slider-visible-area">
                            {concat(
                                this.rightClonedItems,
                                this.props.children,
                                this.leftClonedItems
                            ).map((child, index) => {
                                const currentIndex = index - clonedElements;
                                const slideIsActive = this.slideIsActive(
                                    currentIndex
                                );
                                const shouldRenderSlide = this.shouldRenderSlide(
                                    currentIndex,
                                    index
                                );

                                return (
                                    <Choose>
                                        <When condition={shouldRenderSlide}>
                                            <div
                                                style={slideStyle}
                                                key={currentIndex}
                                                ref={c => {
                                                    this.slides[index] = c;
                                                }}
                                                className={
                                                    slideIsActive
                                                        ? "slide-active"
                                                        : "slide-inactive"
                                                }
                                                onClick={this.checkClickPropagation}
                                                onMouseUp={this.checkClickPropagation}
                                            >
                                                {child}
                                            </div>
                                        </When>
                                        <Otherwise>
                                            <div
                                                style={slideStyle}
                                                key={currentIndex}
                                            />
                                        </Otherwise>
                                    </Choose>
                                );
                            })}
                        </div>
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
                                        active:
                                            index == activeIndex ? true : false
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
