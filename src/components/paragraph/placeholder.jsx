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
                        let style = {
                            width: justify ? "100%" : randomWidth(),
                            height: fontSize ? `${fontSize}px` : "16px",
                            marginTop: lineSpacing
                                ? `${lineSpacing / 2}px`
                                : "15px",
                            marginBottom: lineSpacing
                                ? `${lineSpacing / 2}px`
                                : "15px",
                            borderRadius: rounded ? "5px" : "0px",
                        };
                        style.backgroundColor = color ? color : undefined;

                        if (index + 1 == rows && index > 1) style.width = "60%";

                        return (
                            <div
                                key={index}
                                style={style}
                                className="text-placeholder-row"
                            />
                        );
                    },
                    rows ? rows : 1,
                )}
            </div>
        </div>
    );
};

export default Placeholder;
