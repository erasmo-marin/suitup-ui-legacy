import React from 'react';

const Tab = ({ children, name, ...rest }) => (
    <div {...rest} className="tab">
        {children}
    </div>
);

export default Tab;
