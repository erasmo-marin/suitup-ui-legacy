import React from "react";
import Box from '../box/box';

class Tabs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {children, ...rest} = this.props;

        return <div className="tabs">
                    <div className="tabs-buttons">
                        <Box horizontal gutter="0">
                            {
                                children.map((child, index) => {
                                    return (
                                        <Box.Child key={index}>
                                            {child}
                                        </Box.Child>
                                    )
                                })
                            }
                        </Box>
                        <div className="active-tab-indicator"/>
                    </div>
                </div>
    }

}

export default Tabs;