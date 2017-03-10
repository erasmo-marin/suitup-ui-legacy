import React from 'react';
import { Container, Content, Layout, Box} from '../../../src/components';
//index
import index from '../../../docs/index';

//components
import button from '../../../docs/components/button';
import card from '../../../docs/components/card';
import header from '../../../docs/components/header';
import icon from '../../../docs/components/icon';
import image from '../../../docs/components/image';
import components from '../../../docs/components/index';
import menu from '../../../docs/components/menu';
import modal from '../../../docs/components/modal';
import slider from '../../../docs/components/slider';

//containers
import box from '../../../docs/containers/box';
import container from '../../../docs/containers/container';
import containers from '../../../docs/containers/index';
import layout from '../../../docs/containers/layout';

//responsive
import responsive from '../../../docs/responsive/index';
import devices from '../../../docs/responsive/devices';

//theming
import theming from '../../../docs/theming/index';

import Markdown from './markdown';


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
        devices: devices
    },
    theming: {
        index: theming
    }
}

class Docs extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        
        let {folder, file} = this.props.match.params;

        if(!folder) {
            folder = "index";
        }

        if(!file) {
            file = "index";
        }

        let source = docsMap[folder] ? docsMap[folder][file] : "";

        return (
                <Container>
                    <Markdown source={source}/>
                </Container>
            );
    }
} 

export default Docs;