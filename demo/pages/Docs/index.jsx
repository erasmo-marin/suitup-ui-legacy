import React from 'react';
import { Container, Content, Layout, Box} from '../../../src/components';
//index
import index from '../../../docs/index.md';

//components
import button from '../../../docs/components/button.md';
import card from '../../../docs/components/card.md';
import header from '../../../docs/components/header.md';
import icon from '../../../docs/components/icon.md';
import image from '../../../docs/components/image.md';
import components from '../../../docs/components/index.md';
import menu from '../../../docs/components/menu.md';
import modal from '../../../docs/components/modal.md';
import slider from '../../../docs/components/slider.md';

//containers
import box from '../../../docs/containers/box.md';
import container from '../../../docs/containers/container.md';
import containers from '../../../docs/containers/index.md';
import layout from '../../../docs/containers/layout.md';

//responsive
import responsive from '../../../docs/responsive/index.md';
import devices from '../../../docs/responsive/devices.md';

//theming
import theming from '../../../docs/theming/index.md';


const docsMap = {
    index: {
        index: index
    },
    components: {
        index: components,
        button: button,
        card: card,
        header: header,
        icon: icon,
        image: image,
        menu: menu,
        modal: modal,
        slider: slider
    },
    containers: {
        index: containers,
        box: box,
        container: container,
        layout: layout
    },
    responsive: {
        index: responsive,
        deivces: devices
    },
    theming: {
        index: theming
    }
}

console.log(docsMap);

class Docs extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        

        let {folder, file} = this.props.params;

        if(!folder) {
            folder = "index";
        }

        if(!file) {
            file = "index";
        }

        let source = docsMap[folder][file];

        return (
                <Container>
                   
                </Container>
            );
    }
} 

export default Docs;