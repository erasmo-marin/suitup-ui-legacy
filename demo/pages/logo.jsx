import React from 'react';

const Logo = (props) => {

    let style = {
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: `${props.width}px`,
        height: `${props.height}px`
    }

    return (
        <div className="logo" style={style}>
        </div>
    );
}

export default Logo;