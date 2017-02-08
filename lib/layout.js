import _isArray from 'lodash/isArray';
import React from 'react';

import classnames from 'classnames';

class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    findHeader(children) {
        if (_isArray(children)) {
            for (let i in children) {
                let child = children[i];
                if (child.type.name == 'Header') {
                    console.log("es el header");
                    return child;
                }
            }
        } else if (isObject(children)) {
            console.log(children.type.name);
            if (children.type.name == 'Header') return children;
        }
        return null;
    }

    render() {

        let header = this.findHeader(this.props.children);
        console.log(header);

        let classes = classnames({
            "layout": true,
            "fixed-header": header && header.props.fixed ? true : false
        });

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: classes, id: 'layout' },
                this.props.children
            ),
            React.createElement('div', { className: 'modal-mount-point', id: 'modalMountPoint' })
        );
    }
}

export default Layout;
module.exports = exports['default'];