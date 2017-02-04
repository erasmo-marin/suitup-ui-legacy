import React from 'react';

class Layout extends React.Component {

    constructor (props) {
        super(props);
    }


    render () {
        return (
                <div>
                    <div className="layout" id="layout">
                        {this.props.children}
                    </div>
                    <div className="modal-mount-point" id="modalMountPoint">
                    </div>
                </div>
            );
    }
} 

export default Layout;