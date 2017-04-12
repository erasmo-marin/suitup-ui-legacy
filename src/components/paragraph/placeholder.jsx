import React from "react";
import classnames from "classnames";
import { times, random } from "lodash/fp";

const Placeholder = (
    { rows, animated, justify, lineSpacing, fontSize, color, rounded },
) => {
    const classes = classnames({
        "text-placeholder": true,
        animated: animated,
    });

    const randomWidth = () => {
        return `${random(90, 99, true)}%`;
    };

    return (
        <div className={classes}>
            <div className="text-placeholder-animation-wrapper">
                {times(
                    index => {

                        let wrapperStyle = {
                            width: "100%",
                            paddingTop: lineSpacing
                                ? `${lineSpacing / 2}px`
                                : "10px",
                            paddingBottom: lineSpacing
                                ? `${lineSpacing / 2}px`
                                : "10px",
                            boxSizing: "border-radius"
                        }

                        let style = {
                            width: justify ? "100%" : randomWidth(),
                            height: fontSize ? `${fontSize}px` : "16px",
                            borderRadius: rounded ? "5px" : "0px",
                            margin: "0",
                            backgroundColor: color ? color : undefined
                        };

                        if (index + 1 == rows && index > 1) style.width = "60%";

                        return (
                            <div style={wrapperStyle} key={index}>
                                <div
                                    style={style}
                                    className="text-placeholder-row"
                                />
                            </div>
                        );
                    },
                    rows ? rows : 1,
                )}
            </div>
        </div>
    );
};

export default Placeholder;
