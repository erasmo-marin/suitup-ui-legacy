import React from 'react';
import classnames from 'classnames';

class ImageVail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { opacity, style, children, ...rest } = this.props;

        let classes = classnames({
            'image-vail': true,
        });

        let cstyle = {
            width: '100%',
            height: '100%',
            backgroundColor: opacity ? `rgba(0,0,0,${opacity})` : undefined,
        };

        return (
            <div {...rest} className={classes} style={{ ...style, ...cstyle }}>
                {children}
            </div>
        );
    }
}

export default ImageVail;
