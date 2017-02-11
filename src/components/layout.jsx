import React from "react";
import { isArray } from "lodash";
import classnames from "classnames";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    findHeader(children) {
        if (isArray(children)) {
            for (let i in children) {
                let child = children[i];
                if (child.type.name == "Header") {
                    return child;
                }
            }
        } else if (isObject(children)) {
            if (children.type.name == "Header") return children;
        }
        return null;
    }

    render() {
        let { children, ...rest } = this.props;

        let header = this.findHeader(children);
        let classes = classnames({
            layout: true,
            "fixed-header": header && header.props.fixed ? true : false
        });

        return (
            <div>
                <div {...rest} className={classes} id="layout">
                    {children}
                </div>
                <div className="modal-mount-point" id="modalMountPoint" />
            </div>
        );
    }
}

export default Layout;