import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Modal, Image, Slider } from '../../../src/components';

class Landing extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        let imageStyle = {
            background: "linear-gradient(161deg, rgba(53,215,187,1) 0%, rgba(0,128,128,1) 100%)",
            color: "#fff"
        }

        let imageChildStyle = {
            backgroundImage: 'url(/img/noise.png)',
            backgroundRepeat: 'repeat'
        }

        return (
                <Image width="100%" type="backdrop" src="none" style={imageStyle}>
                    <div style={imageChildStyle}>
                        <Container>
                            <Box horizontal columns={12}>
                                <Box.Child wide={4} key={1}>
                                    <Image width="100%" type="square" src="/img/logo-big.png"/>
                                </Box.Child>
                                <Box.Child wide={8}  key={2}>
                                    <h1>Suitup UI</h1>
                                    <h3>It suits to your needs like a custom made suit</h3>
                                    <Button flat>Get Started</Button>
                                </Box.Child>
                            </Box>
                        </Container>
                    </div>
                </Image>
            );
    }
} 

export default Landing;