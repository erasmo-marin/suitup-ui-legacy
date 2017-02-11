import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Modal, Image, Slider } from '../../../src/components';

class Landing extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        let imageStyle = {
            background: "linear-gradient(161deg, rgba(53,215,187,1) 0%, rgba(0,128,128,1) 100%)",
            color: "#fff",
            height: "80vh"
        }

        let imageChildStyle = {
            backgroundImage: 'url(/img/noise.png)',
            backgroundRepeat: 'repeat',
            width: '100%',
            height: '100%'
        }

        let featuresSection = {
            height: "80vh"
        }

        let icons = {
            background: "#d23778",
            color: "#fff",
            textAlign: "center"
        }

        let iconWides = {
            tablet: 3,
            mobile: 6
        }

        return (
                <div className="sections">
                    <section style={imageStyle}>
                        <div style={imageChildStyle}>
                            <Container verticalExpand>
                                <Box horizontal columns={12} align="center" verticalExpand>
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
                    </section>
                    <section>
                        <Container>
                            <Box columns={6} justify="center" gutter="5rem">
                                <Box.Child key={1} wide={2} wides={iconWides} style={{textAlign: 'center'}}>
                                    <Icon name="settings" size={48} circle style={icons}/>
                                    <h3>Customizable</h3>
                                    <p>Flexible and configurable in runtime. Create your own themes. Suitup UI adhere to Progressive Truthfulness.</p>
                                </Box.Child>
                                <Box.Child key={2} wide={2} wides={iconWides} style={{textAlign: 'center'}}>
                                    <Icon name="devices" size={48} circle style={icons}/>
                                    <h3>Responsive</h3>
                                    <p>Ready to run in phones, tablets and big screens. Save time with our responsive components.</p>
                                </Box.Child>
                                <Box.Child key={3} wide={2} wides={iconWides} style={{textAlign: 'center'}}>
                                    <Icon name="extension" size={48} circle style={icons}/>
                                    <h3>Extensible</h3>
                                    <p>Build your components with the basic pieces we provide.</p>
                                </Box.Child>
                                <Box.Child key={4} wide={2} wides={iconWides} style={{textAlign: 'center'}}>
                                    <Icon name="code" size={48} circle style={icons}/>
                                    <h3>Fast start</h3>
                                    <p>Start your project with webpack 2, hot reloading and express framework with our boilerplate in seconds.</p>
                                </Box.Child>
                                <Box.Child key={5} wide={2} wides={iconWides} style={{textAlign: 'center'}}>
                                    <Icon name="autorenew" size={48} circle style={icons}/>
                                    <h3>Up to date</h3>
                                    <p>We are always experimenting with the last tools available.</p>
                                </Box.Child>
                                <Box.Child key={6} wide={2} wides={iconWides} style={{textAlign: 'center'}}>
                                    <Icon name="favorite" size={48} circle style={icons}/>
                                    <h3>Made with love</h3>
                                    <p>From a front-web developer to others front-end developers.</p>
                                </Box.Child>
                            </Box>
                        </Container>
                    </section>
                </div>
            );
    }
} 

export default Landing;