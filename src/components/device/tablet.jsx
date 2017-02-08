import React from 'react';
import Device from './device';

class Tablet extends React.Component {

    constructor() {
        super(props);
    }

    render() {
        <Device device="tablet">
            {this.props.children}
        </Device>
    }
}

export default Tablet;