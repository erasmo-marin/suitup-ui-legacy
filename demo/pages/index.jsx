import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Modal, Image, Slider } from '../../src/components';
import Logo from './logo';
import Highlight from 'react-highlight';
import jsxToString from 'jsx-to-string';
import ExampleView from './exampleView';

class Index extends React.Component {

    constructor (props) {
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
                minimalRender: false //when true, the unused slides are not rendered, can cause some lag
            }
        }
    }

    toggleMenu(){
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    }

    openModal() {
        this.setState({
            modalVisible: true,
            modalText: "Hola"
        })
    }

    onMenuHide(){
        this.setState({
            menuVisible: false
        }); 
    }

    onModalChange(visible) {

        if(visible == this.state.modalVisible)
            return;

        this.setState({
            modalVisible: visible
        });
    }



    render () {

        let logo = <Logo url="/img/logo.svg" width={60} height={64}/>

        return (
                <Layout vertical>
                    <Header fixed top style={{backgroundColor: 'rgb(35,35,35)', color: 'rgb(50, 186, 141)'}}>
                        <Box horizontal>
                            <Box.Child>
                                <Button menu type="button" onClick={this.toggleMenu} style={{backgroundColor: 'rgb(35,35,35)'}}>
                                    <Icon name="menu" size={24}/>
                                </Button>
                            </Box.Child>
                        </Box>
                    </Header>
                    <Modal visible={this.state.modalVisible} onChange={this.onModalChange}>
                        <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumh" width="100%"/>
                        <Modal.Content>
                            <p>
                                Hola, soy un modal, y me usan mucho para mostrar contenido
                                bloqueando la interacción con la vista principal de la web app.
                            </p>
                        </Modal.Content>
                        <Modal.Footer>
                            <Modal.Action key={1} start text="Entendido" onClick={() => {console.log("Modal Ok")}}/>
                            <Modal.Action key={2} end text="Cancelar" onClick={() => {console.log("Modal Cancel")}}/>
                        </Modal.Footer>
                    </Modal>
                    <Menu left visible={this.state.menuVisible} onHide={this.onMenuHide}>
                        <Menu.Header title="Suitup UI" icon={logo} style={{backgroundColor: 'rgb(35,35,35)', color: 'rgb(50, 186, 141)', border: 'none'}}/>
                        <Menu.Item href="/" text="Inicio"/>
                        <Menu.Item text="Containers">
                            <Menu.SubItem text="Layout"/>
                            <Menu.SubItem text="Container"/>
                            <Menu.SubItem text="Box"/>
                        </Menu.Item>
                    </Menu>
                    <Container>
                        <h1 style={{textAlign: 'center'}}>Bienvenido al demo de Suitup</h1>
                        <p>Suitup UI es un conjunto de componentes de React diseñado para construir atractivas
                           interfaces webs en poco tiempo. La filosofía de Suitup es mantener los componentes minimalistas y
                           elegantes, pero no por ello menos customizables. Como un traje a medida, Suitup se acomodará a tus
                           necesidades, ya que ofrece la posibilidad de escribir temas de manera rápida y modular, pero a la vez
                           manteniendo un orden lógico y sencillo que hará tu código mucho más mantenible.</p>
                        <p>Con Suitup, el uso de elementos se reduce al mínimo, con los componentes que te ofrecemos
                           debería ser suficiente para construir tus layouts e interfaces. Desde componentes complejos,
                           como un Modal o un Slider, hasta componentes más sencillos, como Container, Suitup cubrirá
                           la mayoría de las necesidades típicas en la construcción de aplicaciones web.</p>
                    </Container>
                    <Container>
                        <h3>Grilla</h3>
                        <p>La grilla de Suitup UI es dinámica, puedes cambiar el número de columnas y el gutter a gusto. El gutter por default es de 1rem.</p>
                    </Container>
                    <Container>
                        <ExampleView>
                            <Container>
                                <Box columns={6} gutter="15px">
                                    <Box.Child key={1} wide={1}>
                                        <div style={{backgroundColor: '#3273dc', color: '#fff', textAlign: 'center', minHeight: '5rem', lineHeight: '5rem', borderRadius: '4px'}}>Hola</div>
                                    </Box.Child>
                                    <Box.Child key={2} wide={2}>
                                        <div style={{backgroundColor: '#546e7a', color: '#fff', textAlign: 'center', minHeight: '5rem', lineHeight: '5rem', borderRadius: '4px'}}>Soy</div>
                                    </Box.Child>
                                    <Box.Child key={3} wide={1}>
                                        <div style={{backgroundColor: '#23d160', color: '#fff', textAlign: 'center', minHeight: '5rem', lineHeight: '5rem', borderRadius: '4px'}}>una</div>
                                    </Box.Child>
                                    <Box.Child key={4} wide={2}>
                                        <div style={{backgroundColor: '#ffdd57', color: '#fff', textAlign: 'center', minHeight: '5rem', lineHeight: '5rem', borderRadius: '4px'}}>grilla</div>
                                    </Box.Child>
                                    <Box.Child key={5} wide={3}>
                                        <div style={{backgroundColor: '#f57f17', color: '#fff', textAlign: 'center', minHeight: '5rem', lineHeight: '5rem', borderRadius: '4px'}}>con 6 columnas</div>
                                    </Box.Child>
                                    <Box.Child key={6} wide={3}>
                                        <div style={{backgroundColor: '#ff3860', color: '#fff', textAlign: 'center', minHeight: '5rem', lineHeight: '5rem', borderRadius: '4px'}}>y 6 Box.Child</div>
                                    </Box.Child>
                                </Box>
                            </Container>
                        </ExampleView>
                    </Container>

                    <Container>
                        <h3>Slider</h3>
                        <p>El componente de Slider te permite mostrar mucha información de forma segmentada
                            y visualmente agradable al usuario. Puedes agregar cualquier cosa que se te ocurra
                            dentro. ¿Una foto? ¿Un action call?</p>
                        <p>El slider de Suitup UI implementa lazyload, que renderiza tus slides en el momento de
                            necesitarse, y minimalRender, que sólo renderiza los slides que se están ocupando, para casos
                            donde la cantidad de slides es muy grande.</p>
                        <ExampleView>
                            <Slider settings={this.state.sliderSettings}>
                                <Slider.Slide key={1}>
                                    <Image src="http://materializecss.com/images/sample-1.jpg" type="backdrop" width="100%">
                                        <Image.Vail>
                                            <Container>
                                                <h1>Hola, bienvenido a Suitup</h1>
                                                <h4>Los sliders pueden contener cualquier componente</h4>
                                                <Button type="button" style={{marginTop: "50px"}} onClick={this.openModal}>
                                                    Abrir Modal
                                                </Button>
                                            </Container>
                                        </Image.Vail>
                                    </Image>
                                </Slider.Slide>
                                <Slider.Slide key={2}>
                                    <Image src="http://f.fwallpapers.com/images/forest-canada.png" type="backdrop" width="100%">
                                        <Image.Vail>
                                            <Container>
                                                <h3 style={{color: '#fff'}}>Lazy load</h3>
                                                <h5 style={{color: '#fff'}}>El componente de Slider incluye la opción de
                                                                            Lazyload. En este modo, los slides se renderizan 
                                                                            r primera vez cuando se van a necesitar. Ideal para 
                                                                            galerías fotográficas.</h5>
                                            </Container>
                                        </Image.Vail>
                                    </Image>
                                </Slider.Slide>
                                <Slider.Slide key={3}>
                                    <Image src="https://c1.staticflickr.com/4/3081/2916344739_917dbbe51e_b.jpg" type="backdrop" width="100%">
                                        <Image.Vail>
                                            <Container>
                                                <h3 style={{color: '#fff'}}>Personalizable</h3>
                                                <h5 style={{color: '#fff'}}>El slider te permite mostrar o esconder los puntos,
                                                                            las flechas y cambiar el padding.</h5>
                                            </Container>
                                        </Image.Vail>
                                    </Image>
                                </Slider.Slide>
                                <Slider.Slide key={4}>
                                    <Image src="https://s-media-cache-ak0.pinimg.com/originals/5f/0c/66/5f0c66ebcfa9639e92e646ce6f8660a7.jpg" type="backdrop" width="100%">
                                        <Image.Vail>
                                            <Container>
                                                <h3 style={{color: '#fff'}}>Draggable</h3>
                                                <h5 style={{color: '#fff'}}>Arrastra el slide a la izquierda o a la derecha para pasar al slide siguiente o anterior.</h5>
                                            </Container>
                                        </Image.Vail>
                                    </Image>
                                </Slider.Slide>
                                <Slider.Slide key={5}>
                                    <Image src="http://www.beautiful-views.net/views/banff-canada-mountains-river-forest.jpg" type="backdrop" width="100%">
                                        <Image.Vail>
                                            <Container>
                                                <h3 style={{color: '#fff'}}>Miniaturas</h3>
                                                <h5 style={{color: '#fff'}}>Muestra miniaturas en lugar de puntos para cambiar el slide (esto desactiva el lazy load)</h5>
                                                <Button>Activar miniaturas</Button>
                                            </Container>
                                        </Image.Vail>
                                    </Image>
                                </Slider.Slide>
                                <Slider.Slide key={6}>
                                    <Image src='none' type="backdrop" width="100%">
                                        <Image.Vail>
                                            <Box vertical columns={2}>
                                                <Box.Child key={1}>
                                                    <Container>
                                                        <h3 style={{color: '#fff'}}>Más de un item por slide</h3>
                                                        <h5 style={{color: '#fff'}}>No es necesario como opción, la flexibilidad de Box
                                                            te permite construir este tipo de layouts con el mínimo
                                                            esfuerzo.</h5>
                                                    </Container>
                                                </Box.Child>
                                                <Box.Child key={2}>
                                                    <Box horizontal centered columns={2}>
                                                        <Box.Child key={1} wide={1}>
                                                            <Container>
                                                                <Image centered src="https://aos.iacpublishinglabs.com/question/aq/700px-394px/names-forests-canada_dac556c221c80d83.jpg?domain=cx.aos.ask.com" type="mediumh" width="80%"/>
                                                            </Container>
                                                        </Box.Child>
                                                        <Box.Child key={2} wide={1}>
                                                            <Container>
                                                                <Image centered src="http://materializecss.com/images/sample-1.jpg" type="mediumh" width="80%"/>
                                                            </Container>
                                                        </Box.Child>
                                                    </Box>
                                                </Box.Child>
                                            </Box>
                                        </Image.Vail>
                                    </Image>
                                </Slider.Slide>
                            </Slider>
                        </ExampleView>
                    </Container>
                    <Container>
                        <h3>Modales</h3>
                        <p>Los modales sirven para mostrar información bloqueando la interacción del usuario con 
                        la vista principal. El modal de SuitUp UI incluye animación y blur.</p>
                        <Button type="button" onClick={this.openModal}>
                            Abrir Modal
                        </Button>
                    </Container>
                    <Container>
                        <h3>Cards</h3>
                        <p>Las tarjetas sirven como punto de entrada para información detallada.</p>
                        <Container>
                            <ExampleView>
                                <Container>
                                    <Box horizontal columns={3}>
                                        <Box.Child key={1} wide={1}>
                                            <Card>
                                                <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumh" width="100%"/>
                                                <Card.Content>
                                                    <p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
                                                </Card.Content>
                                                <Card.Footer>
                                                    <Card.Action start onClick={()=>{ console.log("Ok card") }} text="Ok"/>
                                                    <Card.Action end onClick={()=>{ console.log("Cancel card") }} text="Cancel"/>
                                                </Card.Footer>
                                            </Card>
                                        </Box.Child>
                                        <Box.Child key={2} wide={1}>
                                            <Card>
                                                <Box vertical>
                                                    <Box.Child>
                                                        <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumh" width="100%"/>
                                                    </Box.Child>
                                                </Box>
                                            </Card>
                                        </Box.Child>
                                        <Box.Child key={3} wide={1}>
                                            <Card>
                                                <Box vertical>
                                                    <Box.Child>
                                                        <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumh" width="100%"/>
                                                    </Box.Child>
                                                </Box>
                                            </Card>
                                        </Box.Child>
                                    </Box>
                                </Container>
                            </ExampleView>
                        </Container>
                        <h3>Tarjetas con distintos layouts</h3>
                        <p>Puedes construir tu tarjeta de la manera que se te de la gana. Utiliza el componente
                            Box para mostrar el contenido con distintas orientaciones y proporciones. No te imponemos
                            una forma única de hacer las cosas.</p>
                        <Container>
                            <ExampleView>
                                <Container>
                                    <Box horizontal columns={2}>
                                        <Box.Child key={1} wide={1}>
                                            <Card>
                                                <Box horizontal columns={3} gutter="0">
                                                    <Box.Child wide={1} key={1}>
                                                        <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumv" width="100%"/>
                                                    </Box.Child>
                                                    <Box.Child wide={2} key={2}>
                                                        <Card.Content>
                                                            <p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
                                                        </Card.Content>
                                                    </Box.Child>
                                                </Box>
                                            </Card>
                                        </Box.Child>
                                        <Box.Child key={2} wide={1}>
                                            <Card>
                                                <Box horizontal columns={3} gutter="0">
                                                    <Box.Child wide={1} key={1}>
                                                        <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumv" width="100%"/>
                                                    </Box.Child>
                                                    <Box.Child wide={2} key={2}>
                                                        <Card.Content>
                                                            <p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
                                                        </Card.Content>
                                                    </Box.Child>
                                                </Box>
                                            </Card>
                                        </Box.Child>
                                        <Box.Child key={3} wide={1}>
                                            <Card>
                                                <Box horizontal columns={3} gutter="0">
                                                    <Box.Child wide={1} key={1}>
                                                        <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumv" width="100%"/>
                                                    </Box.Child>
                                                    <Box.Child wide={2} key={2}>
                                                        <Card.Content>
                                                            <p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
                                                        </Card.Content>
                                                    </Box.Child>
                                                </Box>
                                            </Card>
                                        </Box.Child>
                                        <Box.Child key={4} wide={1}>
                                            <Card>
                                                <Box horizontal columns={3} gutter="0">
                                                    <Box.Child wide={1} key={1}>
                                                        <Image src="http://materializecss.com/images/sample-1.jpg" type="mediumv" width="100%"/>
                                                    </Box.Child>
                                                    <Box.Child wide={2} key={2}>
                                                        <Card.Content>
                                                            <p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
                                                        </Card.Content>
                                                    </Box.Child>
                                                </Box>
                                            </Card>
                                        </Box.Child>
                                    </Box>
                                </Container>
                            </ExampleView>
                        </Container>
                        <h3>Imágenes</h3>
                        <p>El componente de imagen mantiene el aspect ratio deseado aunque tu imagen 
                           no los tenga (aunque idealmente debería tenerlo). Si deseas un contenedor 
                           que mantenga el aspect ratio, puedes usar el componente de imagen junto a
                           el prop src='none'.</p>
                        <p>Suitup incluye un conjunto de aspect ratio por defecto recomendados los cuales
                        pueden cambiarse desde el archivo de configuración, estos son:</p>
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
                            <ExampleView>
                                <Container>
                                    <Box horizontal columns={3}>
                                        <Box.Child key={1} wide={1}>
                                            <Image src="http://pngimg.com/upload/cat_PNG106.png" type="square" width="100%"/>
                                        </Box.Child>
                                        <Box.Child key={2} wide={1}>
                                            <Image src="http://pngimg.com/upload/cat_PNG106.png" type="square" width="100%"/>
                                        </Box.Child>
                                        <Box.Child key={3} wide={1}>
                                            <Image src="http://pngimg.com/upload/cat_PNG106.png" type="square" width="100%"/>
                                        </Box.Child>
                                    </Box>
                                </Container>
                            </ExampleView>
                        </Container>
                    </Container>
                    <Footer style={{backgroundColor: 'rgb(35,35,35)', color: 'rgb(50, 186, 141)'}}/>
                </Layout>
            );
    }
} 

export default Index;