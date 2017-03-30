import React from "react";
import {
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
    Tabs,
    Mobile,
    Tablet,
    Desktop,
    Widescreen,
    Device,
    P,
} from "../../src/components";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = ::this.toggleMenu;
        this.onMenuHide = ::this.onMenuHide;
        this.openModal = ::this.openModal;
        this.onModalChange = ::this.onModalChange;
        this.state = {
            modalText: "chao",
            menuVisible: false,
            modalVisible: false,
            sliderSettings: {
                autoPlay: false,
                autoPlayDuration: 0,
                showArrows: true,
                showDots: true,
                centerMode: false, //show the other sliders and the current slider in the middle
                displayItems: 1, //the number of items to display
                arrowSize: 36, //the arrow font size, should be 16, 24, 36 or 48
                lazyLoad: true, //when true, the slider only loads the slides when needed
                minimalRender: false, //when true, the unused slides are not rendered, can cause some lag
            },
        };
    }

    toggleMenu() {
        this.setState({
            menuVisible: !this.state.menuVisible,
        });
    }

    openModal() {
        this.setState({
            modalVisible: true,
            modalText: "Hola",
        });
    }

    onMenuHide() {
        this.setState({
            menuVisible: false,
        });
    }

    onModalChange(visible) {
        if (visible == this.state.modalVisible) return;
        this.state.modalVisible = visible;
    }

    render() {
        let horizontalCardWides = {
            mobile: 12,
            tablet: 6,
            desktop: 6,
            widescreen: 6,
        };

        let responsiveStyles = {
            mobile: {
                color: "red",
            },
            tablet: {
                color: "blue",
            },
            desktop: {
                color: "green",
            },
            widescreen: {
                color: "purple",
            },
        };

        return (
            <div>
                <Modal
                    visible={this.state.modalVisible}
                    onChange={this.onModalChange}
                >
                    <Image
                        src="/img/stock-1-hq.jpg"
                        type="mediumh"
                        width="100%"
                    />
                    <Modal.Content>
                        <p>
                            {
                                `Hi, I'm a modal, and you should use me to show content and
                           the same time block the interaction with your app main view`
                            }
                        </p>
                    </Modal.Content>
                    <Modal.Footer>
                        <Modal.Action
                            key={1}
                            start
                            text="Entendido"
                            onClick={() => {
                                console.log("Modal Ok");
                            }}
                        />
                        <Modal.Action
                            key={2}
                            end
                            text="Cancelar"
                            onClick={() => {
                                console.log("Modal Cancel");
                            }}
                        />
                    </Modal.Footer>
                </Modal>
                <Container>
                    <h1 style={{ textAlign: "center" }}>
                        This is Suitup UI full demo
                    </h1>
                    <p>
                        Clone the github repo to see the source code at demo/pages/index.jsx
                    </p>
                </Container>
                <Container>
                    <h3>Grid (Box component)</h3>
                    <p>
                        {
                            `The grid is dynamic, you can change the columns number and the gutter. Default gutter is 1rem.`
                        }
                    </p>
                </Container>
                <Container>
                    <Box columns={6} gutter="15px">
                        <Box.Child key={1} wide={1}>
                            <div
                                style={{
                                    backgroundColor: "#3273dc",
                                    color: "#fff",
                                    textAlign: "center",
                                    minHeight: "5rem",
                                    lineHeight: "5rem",
                                    borderRadius: "4px",
                                }}
                            >
                                Hola
                            </div>
                        </Box.Child>
                        <Box.Child key={2} wide={2}>
                            <div
                                style={{
                                    backgroundColor: "#546e7a",
                                    color: "#fff",
                                    textAlign: "center",
                                    minHeight: "5rem",
                                    lineHeight: "5rem",
                                    borderRadius: "4px",
                                }}
                            >
                                Soy
                            </div>
                        </Box.Child>
                        <Box.Child key={3} wide={1}>
                            <div
                                style={{
                                    backgroundColor: "#23d160",
                                    color: "#fff",
                                    textAlign: "center",
                                    minHeight: "5rem",
                                    lineHeight: "5rem",
                                    borderRadius: "4px",
                                }}
                            >
                                una
                            </div>
                        </Box.Child>
                        <Box.Child key={4} wide={2}>
                            <div
                                style={{
                                    backgroundColor: "#ffdd57",
                                    color: "#fff",
                                    textAlign: "center",
                                    minHeight: "5rem",
                                    lineHeight: "5rem",
                                    borderRadius: "4px",
                                }}
                            >
                                grilla
                            </div>
                        </Box.Child>
                        <Box.Child key={5} wide={3}>
                            <div
                                style={{
                                    backgroundColor: "#f57f17",
                                    color: "#fff",
                                    textAlign: "center",
                                    minHeight: "5rem",
                                    lineHeight: "5rem",
                                    borderRadius: "4px",
                                }}
                            >
                                con 6 columnas
                            </div>
                        </Box.Child>
                        <Box.Child key={6} wide={3}>
                            <div
                                style={{
                                    backgroundColor: "#ff3860",
                                    color: "#fff",
                                    textAlign: "center",
                                    minHeight: "5rem",
                                    lineHeight: "5rem",
                                    borderRadius: "4px",
                                }}
                            >
                                y 6 Box.Child
                            </div>
                        </Box.Child>
                    </Box>
                </Container>
                <Container>
                    <h3>Slider</h3>
                    <p>
                        {
                            `The Slider component allows you to show information in a segmented way
                        like a presentation. You can add any children inside a Slide.
                        A photo? An action call? you choose.`
                        }
                    </p>
                    <p>
                        El slider de Suitup UI implementa lazyload, que renderiza tus slides en el momento de

                        necesitarse, y minimalRender, que sólo renderiza los slides que se están ocupando, para casos

                        donde la cantidad de slides es muy grande.
                    </p>
                    <Slider settings={this.state.sliderSettings}>
                        <Slider.Slide key={1}>
                            <Image
                                src={{
                                    hq: "/img/stock-1-hq.jpg",
                                    lq: "/img/stock-1-lq.jpg",
                                }}
                                type="backdrop"
                                width="100%"
                            >
                                <Image.Vail>
                                    <Container>
                                        <h1>Hola, bienvenido a Suitup</h1>
                                        <h4>
                                            Los sliders pueden contener cualquier componente
                                        </h4>
                                        <Button
                                            type="button"
                                            style={{ marginTop: "50px" }}
                                            onClick={this.openModal}
                                        >
                                            Abrir Modal
                                        </Button>
                                    </Container>
                                </Image.Vail>
                            </Image>
                        </Slider.Slide>
                        <Slider.Slide key={2}>
                            <Image
                                src={{
                                    hq: "/img/stock-2-hq.jpg",
                                    lq: "/img/stock-2-lq.jpg",
                                }}
                                type="backdrop"
                                width="100%"
                            >
                                <Image.Vail>
                                    <Container>
                                        <h3 style={{ color: "#fff" }}>
                                            Lazy load
                                        </h3>
                                        <h5 style={{ color: "#fff" }}>
                                            El componente de Slider incluye la opción de

                                            Lazyload. En este modo, los slides se renderizan

                                            {" "}

                                            r primera vez cuando se van a necesitar. Ideal para

                                            {" "}

                                            galerías fotográficas.
                                        </h5>
                                    </Container>
                                </Image.Vail>
                            </Image>
                        </Slider.Slide>
                        <Slider.Slide key={3}>
                            <Image
                                src={{
                                    hq: "/img/stock-3-hq.jpg",
                                    lq: "/img/stock-3-lq.jpg",
                                }}
                                type="backdrop"
                                width="100%"
                            >
                                <Image.Vail>
                                    <Container>
                                        <h3 style={{ color: "#fff" }}>
                                            Personalizable
                                        </h3>
                                        <h5 style={{ color: "#fff" }}>
                                            El slider te permite mostrar o esconder los puntos,

                                            las flechas y cambiar el padding.
                                        </h5>
                                    </Container>
                                </Image.Vail>
                            </Image>
                        </Slider.Slide>
                        <Slider.Slide key={4}>
                            <Image
                                src={{
                                    hq: "/img/stock-4-hq.jpg",
                                    lq: "/img/stock-4-lq.jpg",
                                }}
                                type="backdrop"
                                width="100%"
                            >
                                <Image.Vail>
                                    <Container>
                                        <h3 style={{ color: "#fff" }}>
                                            Draggable
                                        </h3>
                                        <h5 style={{ color: "#fff" }}>
                                            Arrastra el slide a la izquierda o a la derecha para pasar al slide siguiente o anterior.
                                        </h5>
                                    </Container>
                                </Image.Vail>
                            </Image>
                        </Slider.Slide>
                        <Slider.Slide key={5}>
                            <Image
                                src={{
                                    hq: "/img/stock-5-hq.jpg",
                                    lq: "/img/stock-5-lq.jpg",
                                }}
                                type="backdrop"
                                width="100%"
                            >
                                <Image.Vail>
                                    <Container>
                                        <h3 style={{ color: "#fff" }}>
                                            Miniaturas
                                        </h3>
                                        <h5 style={{ color: "#fff" }}>
                                            Muestra miniaturas en lugar de puntos para cambiar el slide (esto desactiva el lazy load)
                                        </h5>
                                        <Button>Activar miniaturas</Button>
                                    </Container>
                                </Image.Vail>
                            </Image>
                        </Slider.Slide>
                        <Slider.Slide key={6}>
                            <Image src="none" type="backdrop" width="100%">
                                <Image.Vail>
                                    <Box vertical columns={2}>
                                        <Box.Child key={1}>
                                            <Container>
                                                <h3 style={{ color: "#fff" }}>
                                                    Más de un item por slide
                                                </h3>
                                                <h5 style={{ color: "#fff" }}>
                                                    No es necesario como opción, la flexibilidad de Box

                                                    te permite construir este tipo de layouts con el mínimo

                                                    esfuerzo.
                                                </h5>
                                            </Container>
                                        </Box.Child>
                                        <Box.Child key={2}>
                                            <Box
                                                horizontal
                                                centered
                                                columns={2}
                                            >
                                                <Box.Child key={1} wide={1}>
                                                    <Container>
                                                        <Image
                                                            centered
                                                            src={{
                                                                hq: "/img/stock-6-hq.jpg",
                                                                lq: "/img/stock-6-lq.jpg",
                                                            }}
                                                            type="mediumh"
                                                            width="80%"
                                                        />
                                                    </Container>
                                                </Box.Child>
                                                <Box.Child key={2} wide={1}>
                                                    <Container>
                                                        <Image
                                                            centered
                                                            src={{
                                                                hq: "/img/stock-1-hq.jpg",
                                                                lq: "/img/stock-1-lq.jpg",
                                                            }}
                                                            type="mediumh"
                                                            width="80%"
                                                        />
                                                    </Container>
                                                </Box.Child>
                                            </Box>
                                        </Box.Child>
                                    </Box>
                                </Image.Vail>
                            </Image>
                        </Slider.Slide>
                    </Slider>
                </Container>
                <Container>
                    <h3>Modales</h3>
                    <p>
                        Los modales sirven para mostrar información bloqueando la interacción del usuario con

                        {" "}

                        la vista principal. El modal de SuitUp UI incluye animación y blur.
                    </p>
                    <Button type="button" onClick={this.openModal}>
                        Abrir Modal
                    </Button>
                </Container>
                <Container>
                    <h3>Cards</h3>
                    <p>
                        Las tarjetas sirven como punto de entrada para información detallada.
                    </p>
                    <Container>
                        <Container>
                            <Box horizontal columns={3}>
                                <Box.Child key={1} wide={1}>
                                    <Card>
                                        <Image
                                            src={{
                                                hq: "/img/stock-1-hq.jpg",
                                                lq: "/img/stock-1-lq.jpg",
                                            }}
                                            blurLowQuality
                                            type="mediumh"
                                            width="100%"
                                        />
                                        <Card.Content>
                                            <P
                                                loading
                                                placeholder={{ rows: 2 }}
                                            />
                                        </Card.Content>
                                        <Card.Footer>
                                            <Card.Action
                                                start
                                                onClick={() => {
                                                    console.log("Ok card");
                                                }}
                                                text="Ok"
                                            />
                                            <Card.Action
                                                end
                                                onClick={() => {
                                                    console.log("Cancel card");
                                                }}
                                                text="Cancel"
                                            />
                                        </Card.Footer>
                                    </Card>
                                </Box.Child>
                                <Box.Child key={2} wide={1}>
                                    <Card>
                                        <Box vertical>
                                            <Box.Child>
                                                <Image
                                                    src={{
                                                        hq: "/img/stock-2-hq.jpg",
                                                        lq: "/img/stock-2-lq.jpg",
                                                    }}
                                                    blurLowQuality
                                                    type="mediumh"
                                                    width="100%"
                                                />
                                            </Box.Child>
                                        </Box>
                                    </Card>
                                </Box.Child>
                                <Box.Child key={3} wide={1}>
                                    <Card>
                                        <Box vertical>
                                            <Box.Child>
                                                <Image
                                                    src={{
                                                        hq: "/img/stock-3-hq.jpg",
                                                        lq: "/img/stock-3-lq.jpg",
                                                    }}
                                                    blurLowQuality
                                                    type="mediumh"
                                                    width="100%"
                                                />
                                            </Box.Child>
                                        </Box>
                                    </Card>
                                </Box.Child>
                            </Box>
                        </Container>
                    </Container>
                    <h3>Tarjetas con distintos layouts</h3>
                    <p>
                        Puedes construir tu tarjeta de la manera que se te de la gana. Utiliza el componente

                        Box para mostrar el contenido con distintas orientaciones y proporciones. No te imponemos

                        una forma única de hacer las cosas.
                    </p>
                    <Container>
                        <Container>
                            <Box horizontal columns={12}>
                                <Box.Child
                                    key={1}
                                    wide={6}
                                    wides={horizontalCardWides}
                                >
                                    <Card>
                                        <Box horizontal columns={3} gutter="0">
                                            <Box.Child wide={1} key={1}>
                                                <Image
                                                    src={{
                                                        hq: "/img/stock-4-hq.jpg",
                                                        lq: "/img/stock-4-lq.jpg",
                                                    }}
                                                    blurLowQuality
                                                    type="mediumv"
                                                    width="100%"
                                                />
                                            </Box.Child>
                                            <Box.Child wide={2} key={2}>
                                                <Card.Content>
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 1,
                                                            color: "rgba(0,0,0,0.5)",
                                                        }}
                                                    />
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 4,
                                                        }}
                                                    />
                                                </Card.Content>
                                            </Box.Child>
                                        </Box>
                                    </Card>
                                </Box.Child>
                                <Box.Child
                                    key={2}
                                    wide={6}
                                    wides={horizontalCardWides}
                                >
                                    <Card>
                                        <Box horizontal columns={3} gutter="0">
                                            <Box.Child wide={1} key={1}>
                                                <Image
                                                    src={{
                                                        hq: "/img/stock-5-hq.jpg",
                                                        lq: "/img/stock-5-lq.jpg",
                                                    }}
                                                    blurLowQuality
                                                    type="mediumv"
                                                    width="100%"
                                                />
                                            </Box.Child>
                                            <Box.Child wide={2} key={2}>
                                                <Card.Content>
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 1,
                                                            color: "rgba(0,0,0,0.5)",
                                                        }}
                                                    />
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 4,
                                                        }}
                                                    />
                                                </Card.Content>
                                            </Box.Child>
                                        </Box>
                                    </Card>
                                </Box.Child>
                                <Box.Child
                                    key={3}
                                    wide={6}
                                    wides={horizontalCardWides}
                                >
                                    <Card>
                                        <Box horizontal columns={3} gutter="0">
                                            <Box.Child wide={1} key={1}>
                                                <Image
                                                    src={{
                                                        hq: "/img/stock-6-hq.jpg",
                                                        lq: "/img/stock-6-lq.jpg",
                                                    }}
                                                    blurLowQuality
                                                    type="mediumv"
                                                    width="100%"
                                                />
                                            </Box.Child>
                                            <Box.Child wide={2} key={2}>
                                                <Card.Content>
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 1,
                                                            color: "rgba(0,0,0,0.5)",
                                                        }}
                                                    />
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 4,
                                                        }}
                                                    />
                                                </Card.Content>
                                            </Box.Child>
                                        </Box>
                                    </Card>
                                </Box.Child>
                                <Box.Child
                                    key={4}
                                    wide={6}
                                    wides={horizontalCardWides}
                                >
                                    <Card>
                                        <Box horizontal columns={3} gutter="0">
                                            <Box.Child wide={1} key={1}>
                                                <Image
                                                    src={{
                                                        hq: "/img/stock-1-hq.jpg",
                                                        lq: "/img/stock-1-lq.jpg",
                                                    }}
                                                    blurLowQuality
                                                    type="mediumv"
                                                    width="100%"
                                                />
                                            </Box.Child>
                                            <Box.Child wide={2} key={2}>
                                                <Card.Content>
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 1,
                                                            color: "rgba(0,0,0,0.5)",
                                                        }}
                                                    />
                                                    <P
                                                        loading
                                                        placeholder={{
                                                            rows: 4,
                                                        }}
                                                    />
                                                </Card.Content>
                                            </Box.Child>
                                        </Box>
                                    </Card>
                                </Box.Child>
                            </Box>
                        </Container>
                    </Container>
                    <h3>Imágenes</h3>
                    <p>
                        El componente de imagen mantiene el aspect ratio deseado aunque tu imagen

                        {" "}

                        no los tenga (aunque idealmente debería tenerlo). Si deseas un contenedor

                        {" "}

                        que mantenga el aspect ratio, puedes usar el componente de imagen junto a

                        el prop src='none'.
                    </p>
                    <p>
                        Suitup incluye un conjunto de aspect ratio por defecto recomendados los cuales

                        pueden cambiarse desde el archivo de configuración, estos son:
                    </p>
                    <ul>
                        <li>Square (1:1)</li>
                        <li>Poster (2:3)</li>
                        <li>Mediumv (3:4)</li>
                        <li>Mediumh (4:3)</li>
                        <li>Backdrop (16:9)</li>
                        <li>Backdrop (16:9)</li>
                        <li>Banner (5:1)</li>
                    </ul>
                    <Container>
                        <h3>mala</h3>
                        <Box horizontal columns={3}>
                            <Box.Child key={1} wide={1}>
                                <Image
                                    src={{
                                        lq: "/img/cat-lq.jpg",
                                        hq: "/img/cat-hq.jpg",
                                    }}
                                    blurLowQuality
                                    type="square"
                                    width="100%"
                                />
                            </Box.Child>
                            <Box.Child key={2} wide={1}>
                                <Image
                                    src={{
                                        lq: "/img/cat-lq.jpg",
                                        hq: "/img/cat-hq.jpg",
                                    }}
                                    blurLowQuality
                                    type="square"
                                    width="100%"
                                />
                            </Box.Child>
                            <Box.Child key={3} wide={1}>
                                <Image
                                    src={{
                                        lq: "/img/cat-lq.jpg",
                                        hq: "/img/cat-hq.jpg",
                                    }}
                                    blurLowQuality
                                    type="square"
                                    width="100%"
                                />
                            </Box.Child>
                        </Box>
                    </Container>
                </Container>
                <Container>
                    <h3>Tabs</h3>
                    <Tabs>
                        <Tabs.Tab title="Tab 1">
                            <p style={{ color: "red" }}>
                                {"Hello, I'm the first tab content"}
                            </p>
                        </Tabs.Tab>
                        <Tabs.Tab title="Tab 2">
                            <p style={{ color: "green" }}>
                                {"Hello, I'm the second tab content"}
                            </p>
                        </Tabs.Tab>
                        <Tabs.Tab title="Tab 3">
                            <p style={{ color: "blue" }}>
                                {"Hello, I'm the third tab content"}
                            </p>
                        </Tabs.Tab>
                    </Tabs>
                </Container>

                <Container>
                    <h3>Responsive</h3>
                    <p>
                        Resize the browser to see the changes!!. The Device component only accepts one children. Wrap your components in a div.
                    </p>
                    <Mobile>
                        <p style={{ textAlign: "center", color: "red" }}>
                            {"Hi, I'm just visible on Mobile!"}
                        </p>
                    </Mobile>
                    <Tablet>
                        <p style={{ textAlign: "center", color: "blue" }}>
                            {"Hi, I'm just visible on Tablet!"}
                        </p>
                    </Tablet>
                    <Desktop>
                        <p style={{ textAlign: "center", color: "green" }}>
                            {"Hi, I'm just visible on Desktop!"}
                        </p>
                    </Desktop>
                    <Widescreen>
                        <p style={{ textAlign: "center", color: "gray" }}>
                            {"Hi, I'm just visible on Widescreen!"}
                        </p>
                    </Widescreen>
                    <Container style={responsiveStyles}>
                        {
                            `This text is red in mobile, blue in tablet, green in
                           desktop and purple in widescreen. That's because this
                           container is using responsive styles`
                        }
                    </Container>
                </Container>
                <Container>
                    <h3>Buttons</h3>
                    <Box columns={5} centered justify="center" align="center">
                        <Box.Child wide="5" key={1}>
                            <b>Raised</b>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={2}>
                            <Button raised primary>primary</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={3}>
                            <Button raised primaryDark>primary dark</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={4}>
                            <Button raised primaryLight>primary light</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={5}>
                            <Button raised accent>accent</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={6}>
                            <Button raised disabled>disabled</Button>
                        </Box.Child>
                        <Box.Child wide="5" key={7}>
                            <b>Inverted</b>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={8}>
                            <Button inverted primary>primary</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={9}>
                            <Button inverted primaryDark>primary dark</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={10}>
                            <Button inverted primaryLight>primary light</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={11}>
                            <Button inverted accent>accent</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={12}>
                            <Button inverted disabled>disabled</Button>
                        </Box.Child>
                        <Box.Child wide="5" key={13}>
                            <b>Flat</b>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={14}>
                            <Button flat primary>primary</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={15}>
                            <Button flat primaryDark>primary dark</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={16}>
                            <Button flat primaryLight>primary light</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={17}>
                            <Button flat accent>accent</Button>
                        </Box.Child>
                        <Box.Child wide="1" wides={{ mobile: 2 }} key={18}>
                            <Button flat disabled>disabled</Button>
                        </Box.Child>
                        <Box.Child wide="5" key={19}>
                            <b>Full Width</b>
                        </Box.Child>
                        <Box.Child wide="5" key={20}>
                            <Button fullWidth primary>
                                full width primary
                            </Button>
                        </Box.Child>
                        <Box.Child wide="5" key={21}>
                            <Button fullWidth accent>full width accent</Button>
                        </Box.Child>
                        <Box.Child wide="5" key={22}>
                            <Button fullWidth primary inverted>
                                full width inverted
                            </Button>
                        </Box.Child>
                        <Box.Child wide="5" key={23}>
                            <Button fullWidth disabled>
                                full width disabled
                            </Button>
                        </Box.Child>
                    </Box>
                </Container>
                <Container>
                    <h3>Paragraph</h3>
                    <P loading placeholder={{ rows: 5, animated: true }}>
                        Hi, this text is not visible because the loading state is true
                    </P>
                    <P>
                        Hi, this text is visible because the loading state is false
                    </P>
                </Container>
            </div>
        );
    }
}

export default Index;
