/*mobile: up to 768px
tablet: from 769px
desktop: from 1000px
widescreen: from 1192px*/

import React from 'react';
import classnames from 'classnames';
import {isArray} from 'lodash';

class Device extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {device, devices} = this.props;

        if (!isArray(devices)) {
            devices = [device];
        }

        let classes = classnames({
            "device": true,
            "mobile": devices.indexOf("mobile") < 0 ? false : true,
            "tablet": devices.indexOf("tablet") < 0 ? false : true,
            "desktop": devices.indexOf("desktop") < 0 ? false : true,
            "widescreen": devices.indexOf("widescreen") < 0 ? false : true
        });

        return (<div className={classes}>
                    {this.props.children}
                </div>)
    }
}

export default Device;