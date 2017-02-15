import Device from './device';

const Desktop = ({ children }) => React.createElement(
    Device,
    { device: "desktop" },
    children
);

export default Desktop;