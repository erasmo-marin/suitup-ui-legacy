import React from 'react';
import Device from './device';

class Mobile extends React.Component {

    constructor() {
        super(props);
    }

    render() {
        <Device device="mobile">
            {this.props.children}
        </Device>
    }
}

export default Mobile;