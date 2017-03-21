import React from "react";
import classnames from "classnames";
import Placeholder from "./placeholder";

const Paragraph = ({text, loading, placeholder, children}) => {

    const classes = classnames({
        "paragraph-holder": true,
        "loading": loading
    });

    return (
        <div className={classes}>
            <Choose>
                <When condition={loading}>
                    <Placeholder {...placeholder}/>
                </When>
                <Otherwise>
                    <Choose>
                        <When condition={children != undefined}>
                            <p>{children}</p>
                        </When>
                        <Otherwise>
                            <p>{ text }</p>
                        </Otherwise>
                    </Choose>
                </Otherwise>
            </Choose>
        </div>
    )
}

export default Paragraph;