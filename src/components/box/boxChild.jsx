import React from "react";
import classnames from "classnames";

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

        classes = classnames(classes);

        return (
            <div {...rest} className={classes} style={{ ...style, ...cstyle }}>
                {children}
            </div>
        );
    }
}

export default BoxChild;