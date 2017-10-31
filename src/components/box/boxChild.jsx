import React from "react";
import classnames from "classnames";
import forEach from "lodash/forEach";

class BoxChild extends React.Component {
    constructor(props) {
        super(props);
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
        let cstyle = {};
        let {
            verticalExpand,
            columns,
            wide,
            wides,
            width,
            children,
            style,
            gutter,
            className,
            ...rest
        } = this.props;

        let classes = {
            "box-child": true,
            "full-height": verticalExpand
        };

        if (wide && columns) {
            cstyle.width = `${100 / columns * wide}%`;
            cstyle.padding = gutter;
        }


        if(className) {
            let propClasses = className.split(" ");
            forEach(propClasses, theClass => {
                classes[theClass] = true;
            });
        }

        classes = classnames(classes);

        return (
            <div {...rest} className={classes} style={{...cstyle, ...style}}>
                {children}
            </div>
        );
    }
}

export default BoxChild;