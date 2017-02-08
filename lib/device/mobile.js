import React from 'react';
import Device from './device';

class Mobile extends React.Component {

    constructor() {
        super(props);
    }

    render() {
        React.createElement(
            Device,
            { device: 'mobile' },
            this.props.children
        );
    }
}

export default Mobile;
module.exports = exports['default'];