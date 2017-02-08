import React from 'react';
import Device from './device';

class Desktop extends React.Component {

    constructor() {
        super(props);
    }

    render() {
        React.createElement(
            Device,
            { device: 'desktop' },
            this.props.children
        );
    }
}

export default Desktop;
module.exports = exports['default'];