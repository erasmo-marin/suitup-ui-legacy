import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Modal, Image, Slider } from '../../../src/components';

class Landing extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        return (
                <Image width="100%" type="backdrop" src="/img/landing.jpg">
                    <Image.Vail>
                        <Container>
                            <Box horizontal columns={12}>
                                <Box.Child wide={4} key={1}>
                                    <Image width="100%" type="square" src="/img/logo-big.png"/>
                                </Box.Child>
                                <Box.Child wide={8}  key={2}>
                                    <h1>Suitup UI</h1>
                                    <h3>It suits to your needs like a custom made suit</h3>
                                </Box.Child>
                            </Box>
                        </Container>
                    </Image.Vail>
                </Image>
            );
    }
} 

export default Landing;