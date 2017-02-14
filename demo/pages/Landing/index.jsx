import React from "react";
import {
    Device,
    Container,
    Header,
    Footer,
    Menu,
    Content,
    Layout,
    Box,
    Button,
    Icon,
    Card,
    Modal,
    Image,
    Slider,
    Tabs
} from "../../../src/components";
import { PrismCode } from "react-prism";

class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let heroStyle = {
            background: "linear-gradient(161deg, rgba(53,215,187,1) 0%, rgba(0,128,128,1) 100%)",
            color: "#fff",
            height: "80vh",
            minHeight: "600px"
        };

        let heroChildStyle = {
            backgroundImage: "url(/img/noise.png)",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%"
        };

        let featuresSection = {
            background: "#f7f7f7"
        };

        let gettingStartedSection = {
            borderTop: "1px solid #dedede",
            background: "#fdfdfd"
        };

        let icons = {
            background: "#d23778",
            color: "#fff",
            textAlign: "center"
        };

        let iconWides = {
            tablet: 3,
            mobile: 6
        };

        return (
            <div className="sections">
                <section style={heroStyle}>
                    <div style={heroChildStyle}>
                        <Container verticalExpand>
                            <Box
                                horizontal
                                columns={12}
                                align="center"
                                verticalExpand
                            >
                                <Box.Child wide={4} key={1}>
                                    <Image
                                        width="100%"
                                        type="square"
                                        src="/img/logo-big.png"
                                    />
                                </Box.Child>
                                <Box.Child wide={8} key={2}>
                                    <h1>SuitUp UI</h1>
                                    <h3>
                                        It suits to your needs like a custom made suit
                                    </h3>
                                    <Button flat>Get Started</Button>
                                </Box.Child>
                            </Box>
                        </Container>
                    </div>
                </section>
                <section style={featuresSection}>
                    <Container>
                        <Box columns={6} justify="center" gutter="5rem">
                            <Box.Child
                                key={1}
                                wide={2}
                                wides={iconWides}
                                style={{ textAlign: "center" }}
                            >
                                <Icon
                                    name="settings"
                                    size={48}
                                    circle
                                    style={icons}
                                />
                                <h3>Customizable</h3>
                                <p>
                                    Flexible and configurable in runtime. Create your own themes. Suitup UI adhere to Progressive Truthfulness.
                                </p>
                            </Box.Child>
                            <Box.Child
                                key={2}
                                wide={2}
                                wides={iconWides}
                                style={{ textAlign: "center" }}
                            >
                                <Icon
                                    name="devices"
                                    size={48}
                                    circle
                                    style={icons}
                                />
                                <h3>Responsive</h3>
                                <p>
                                    Ready to run in phones, tablets and big screens. Save time with our responsive components.
                                </p>
                            </Box.Child>
                            <Box.Child
                                key={3}
                                wide={2}
                                wides={iconWides}
                                style={{ textAlign: "center" }}
                            >
                                <Icon
                                    name="extension"
                                    size={48}
                                    circle
                                    style={icons}
                                />
                                <h3>Extensible</h3>
                                <p>
                                    Build your components with the basic pieces we provide.
                                </p>
                            </Box.Child>
                            <Box.Child
                                key={4}
                                wide={2}
                                wides={iconWides}
                                style={{ textAlign: "center" }}
                            >
                                <Icon
                                    name="code"
                                    size={48}
                                    circle
                                    style={icons}
                                />
                                <h3>Fast start</h3>
                                <p>
                                    Start your project with webpack 2, hot reloading and express framework with our boilerplate in seconds.
                                </p>
                            </Box.Child>
                            <Box.Child
                                key={5}
                                wide={2}
                                wides={iconWides}
                                style={{ textAlign: "center" }}
                            >
                                <Icon
                                    name="autorenew"
                                    size={48}
                                    circle
                                    style={icons}
                                />
                                <h3>Up to date</h3>
                                <p>
                                    We are always experimenting with the last tools available.
                                </p>
                            </Box.Child>
                            <Box.Child
                                key={6}
                                wide={2}
                                wides={iconWides}
                                style={{ textAlign: "center" }}
                            >
                                <Icon
                                    name="favorite"
                                    size={48}
                                    circle
                                    style={icons}
                                />
                                <h3>Made with love</h3>
                                <p>
                                    From a front-end developer to others front-end developers.
                                </p>
                            </Box.Child>
                        </Box>
                    </Container>
                </section>
                <section style={gettingStartedSection}>
                    <Container>
                        <h2 style={{ textAlign: "center" }}>Getting started</h2>
                        <Device devices={["mobile", "tablet", "desktop"]}>
                            <Tabs>
                                <Tabs.Tab title="Install Suitup UI from npm:">
                                    <Container>
                                        <p>Install Suitup UI from npm:</p>
                                        <pre className="lang-bash">
                                            <PrismCode className="lang-bash">
                                                {"$ npm install --save suitup-ui\n"}
                                            </PrismCode>
                                        </pre>
                                        <p>
                                            Import the styles and the components you need:
                                        </p>
                                        <pre className="lang-jsx">
                                            <PrismCode className="lang-jsx">
                                                {
                                                    "import \"../node_modules/suitup-ui/dist/suitup-toolkit.min.css\";\nimport { Layout, Container, Box, Button } from 'suitup-ui';"
                                                }
                                            </PrismCode>
                                        </pre>
                                    </Container>
                                </Tabs.Tab>
                                <Tabs.Tab title="Running the included demo">
                                </Tabs.Tab>
                            </Tabs>
                        </Device>
                        <Device devices={["widescreen"]}>
                            <Box columns={12}>
                                <Box.Child wide={6}>
                                    <h4 style={{ textAlign: "center" }}>
                                        Adding it to your project
                                    </h4>
                                    <p>Install Suitup UI from npm:</p>
                                    <pre className="lang-jsx">
                                        <PrismCode className="lang-jsx">
                                            {"$ npm install --save suitup-ui\n"}
                                        </PrismCode>
                                    </pre>
                                    <p>
                                        Import the styles and the components you need:
                                    </p>
                                    <pre className="lang-jsx">
                                        <PrismCode className="lang-jsx">
                                            {
                                                "import \"../node_modules/suitup-ui/dist/suitup-toolkit.min.css\";\nimport { Layout, Container, Box, Button } from 'suitup-ui';"
                                            }
                                        </PrismCode>
                                    </pre>
                                </Box.Child>
                                <Box.Child wide={6}>
                                    <h4 style={{ textAlign: "center" }}>
                                        Running the included demo
                                    </h4>
                                    <p>
                                        Import the styles and the components you need:
                                    </p>
                                    <pre className="lang-jsx">
                                        <PrismCode className="lang-jsx">
                                            {
                                                "import \"../node_modules/suitup-ui/dist/suitup-toolkit.min.css\";\nimport { Layout, Container, Box, Button } from 'suitup-ui';"
                                            }
                                        </PrismCode>
                                    </pre>
                                </Box.Child>
                            </Box>
                        </Device>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Landing;