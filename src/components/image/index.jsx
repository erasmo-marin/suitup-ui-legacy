import React from "react";
import classnames from "classnames";
import ImageVail from "./imageVail";
import suitupable from "../component";
import { isObject, isString } from "lodash/fp";
import ReactInview from 'react-inview-js';

const sizes = {
    square: {
        width: 600,
        height: 600,
    },
    mediumv: {
        width: 600,
        height: 800,
    },
    mediumh: {
        width: 800,
        height: 600,
    },
    poster: {
        width: 600,
        height: 900,
    },
    backdrop: {
        width: 1600,
        height: 900,
    },
    banner: {
        width: 2000,
        height: 400,
    },
};

@ReactInview({fullElementInView: false})
@suitupable(true, true)
class Image extends React.Component {
    constructor(props) {
        super(props);
        this.recalculeSize = ::this.recalculeSize;

        let { src } = props;

        let lqSrc, hqSrc;

        if (isObject(src)) {
            lqSrc = src.lq;
            hqSrc = src.hq;
            src = lqSrc;
        }

        this.state = {
            width: this.props.width ? this.props.width : 0,
            height: this.props.height ? this.props.height : 0,
            lqSrc: lqSrc,
            hqSrc: hqSrc,
            src: src,
            hqSrcLoaded: false,
        };
    }

    componentDidMount() {
        setTimeout(
            () => {
                this.recalculeSize();
            },
            1,
        );
        window.addEventListener("resize", this.recalculeSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.recalculeSize);
    }

    componentWillReceiveProps(props) {
        let { src } = props;

        if (src == this.state.src) return;

        const { hqSrcLoaded } = this.state;
        let lqSrc, hqSrc;

        if (isObject(src)) {
            if (this.state.lqSrc == src.lq && this.state.hqSrc == src.hq)
                return;

            if (hqSrcLoaded && this.state.hqSrc == src.hq) return;
            lqSrc = src.lq;
            hqSrc = src.hq;
            src = lqSrc;
        }

        this.setState({
            lqSrc: lqSrc,
            hqSrc: hqSrc,
            src: src,
            hqSrcLoaded: false,
        });
    }

    recalculeSize() {
        let width, height = 0;
        let dimensions;

        if (this.props.type) {
            dimensions = sizes[this.props.type];
        }

        if (this.props.width && !this.props.height) {
            width = this.computeSizeInPixels(this.props.width, "x");
            height = this.getHeightFromWidth(dimensions, width);
        } else if (this.props.height && !this.props.width) {
            height = this.computeSizeInPixels(this.props.height, "y");
            width = this.getWidthFromHeight(dimensions, height);
        } else {
            width = this.computeSizeInPixels(this.props.width, "x");
            height = this.computeSizeInPixels(this.props.height, "y");
        }

        this.setState({
            width: `${width}px`,
            height: `${height}px`,
        });
    }

    getHeightFromWidth(dimensions, width) {
        return width / (dimensions.width / dimensions.height);
    }

    getWidthFromHeight(dimensions, height) {
        return height * (dimensions.width / dimensions.height);
    }

    isPercent(str) {
        if (str.endsWith("%")) {
            return true;
        }
        return false;
    }

    isPixel(str) {
        if (str.endsWith("px")) {
            return true;
        }
        return false;
    }

    computeSizeInPixels(size, axis) {
        let isPercent = false;

        if (this.isPercent(size)) {
            isPercent = true;
            size = parseFloat(size.replace("%", ""));
        } else if (size.endsWith("px")) {
            size = parseFloat(size.replace("px", ""));
        }

        let width = this.image.offsetWidth;
        let height = this.image.offsetHeight;

        if (isPercent) {
            if (axis == "x") {
                size = width;
            } else if (axis == "y") {
                size = height;
            }
        }
        return size;
    }

    onHQLoad = () =>
        this.setState({
            src: this.state.hqSrc ? this.state.hqSrc : this.state.lqSrc,
            hqSrcLoaded: true,
        });

    render() {

        let {
            elementIsInView,
            elementHasBeenInView,
            boundingBox,
            viewPortBox,
            elementIsHasBeenInView,
            update,
            width,
            height,
            src,
            style,
            type,
            centered,
            children,
            screen,
            blurLowQuality,
            ...rest
        } = this.props;

        let { lqSrc, hqSrc } = this.state;

        let rwidth, rheight;

        if (width && (this.isPercent(width) || this.isPixel(width))) {
            rwidth = width;
        } else {
            rwidth = this.state.width;
        }

        if (height && (this.isPercent(height) || this.isPixel(height))) {
            rheight = height;
        } else {
            rheight = this.state.height;
        }

        let rstyle = {
            backgroundImage: src != "none" ? `url(${this.state.src})` : "none",
            width: `${rwidth}`,
            height: `${rheight}`,
            backgroundSize: "cover",
            backgroundPositon: "center",
            transition: "all 0.5s ease-in-out",
            transitionProperty: "filter, background-image",
            overflow: "hidden"
        };

        if (this.state.src == this.state.lqSrc && blurLowQuality) {
            rstyle.filter = "blur(5px)";
        }

        if (style) {
            delete style.width;
            delete style.height;
            rstyle = { ...rstyle, ...style };
        }

        let classes = {
            image: true,
            centered: centered,
        };

        classes = classnames(classes);

        return (
            <div
                {...rest}
                className={classes}
                style={rstyle}
                ref={c => {
                    this.image = c;
                }}
            >
                <If condition={lqSrc && hqSrc}>
                    <img
                        style={{ display: "none" }}
                        src={lqSrc}
                    />
                    <If condition={elementIsInView || elementHasBeenInView}>
                        <img
                            style={{ display: "none" }}
                            src={hqSrc}
                            onLoad={this.onHQLoad}
                        />
                    </If>
                </If>
                {children}
            </div>
        );
    }
}

Image.Vail = ImageVail;

export default Image;
