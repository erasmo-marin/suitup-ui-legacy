import React from 'react';
import Device from './device';

class Desktop extends React.Component {

    constructor() {
        super(props);
    }

    render() {
        <Device device="desktop">
            {this.props.children}
        </Device>
    }
}

export default Desktop;