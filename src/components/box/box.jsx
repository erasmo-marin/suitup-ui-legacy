import React from "react";
import classnames from "classnames";
import isArray from "lodash/fp/isArray";
import Child from "./boxChild";
import suitupable from "../component";

@suitupable(true, true)
class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    setupChildProps(props) {
        if (props.children && props.columns) {
            let gutter = this.parseGutter(props.gutter);
            if (gutter && gutter.number) {
                gutter = gutter.number / 2 + gutter.measure;
            }

            if (isArray(props.children)) {
                return props.children.map(
                    element => {
                        let wides = element.props.wides;
                        let wide;

                        if (wides && wides[this.props.screen]) {
                            wide = wides[this.props.screen];
                        } else {
                            wide = element.props.wide ? element.props.wide : 1;
                        }

                        return React.cloneElement(element, {
                            columns: props.columns,
                            gutter: gutter ? gutter : "0.5rem",
                            wide: wide
                        });
                    },
                    this
                );
            } else {
                return React.cloneElement(props.children, {
                    columns: props.columns,
                    gutter: gutter ? gutter : "0.5rem"
                });
            }
        } else {
            return props.children;
        }
    }

    parseGutter(gutter) {
        if (!gutter) return;

        let number = parseFloat(gutter);

        return {
            number: number,
            measure: gutter.replace(number, "")
        };
    }

    render() {
        let {
            verticalExpand,
            horizontal,
            vertical,
            autoFill,
            centered,
            justify,
            align,
            children,
            columns,
            gutter,
            screen,
            settings,
            ...rest
        } = this.props;

        if (!gutter) {
            gutter = "0.5rem";
        }

        let classes = classnames({
            box: true,
            horizontal: vertical == null ? true : false,
            vertical: vertical,
            "fill-space": autoFill,
            centered: justify == "center",
            left: justify == "left",
            right: justify == "right",
            "align-start": align == "start",
            "align-end": align == "end",
            "align-center": align == "center",
            "align-stretch": align == "stretch",
            "align-baseline": align == "baseline",
            "full-height": verticalExpand,
            [screen]: true
        });

        gutter = this.parseGutter(gutter);

        if (gutter && gutter.number) {
            gutter = gutter.number / 2 * -1 + gutter.measure;
        }

        let cstyle = {
            marginLeft: gutter,
            marginRight: gutter
        };

        return (
            <div {...rest} style={cstyle} className={classes}>
                {this.setupChildProps(this.props)}
            </div>
        );
    }
}

Box.Child = Child;

Box.propTypes = {
    children: function(props, propName, componentName) {
        const prop = props[propName];

        let error = null;
        React.Children.forEach(prop, function(child) {
            if (
                child.type.name != "Box.Child" && child.type.name != "BoxChild"
            ) {
                error = new Error(
                    "`" +
                        componentName +
                        "` children should be of type `Box.Child`, instead it was of type " +
                        child.type.name
                );
            }
        });
        return error;
    }
};

export default Box;
