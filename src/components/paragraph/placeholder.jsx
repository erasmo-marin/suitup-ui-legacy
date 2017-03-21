import React from "react";
import classnames from "classnames";
import times from "lodash/times";
import random from "lodash/random";

const Placeholder = ({ rows, animated, justify, lineSpacing, fontSize, color, rounded }) => {
    const classes = classnames({
        "text-placeholder": true,
        animated: animated
    });

    const randomWidth = () => { return `${random(90, 99, true)}%` };

    return (
        <div className={classes}>
            <div className="text-placeholder-animation-wrapper">
                {times(rows ? rows : 1, () => {

                    let style = {
                        width: justify ? "100%" : randomWidth(),
                        height: fontSize ? `${fontSize}px` : '16px',
                        marginTop: lineSpacing ? `${lineSpaciing/2}px` : '15px',
                        marginBottom: lineSpacing ? `${lineSpaciing/2}px` : '15px',
                        borderRadius: rounded ? '5px' : '0px'
                    }

                    style.color = color ? color : undefined;

                    return <div style={style} className="text-placeholder-row" />;
                })}
            </div>
        </div>
    );
};

export default Placeholder;
