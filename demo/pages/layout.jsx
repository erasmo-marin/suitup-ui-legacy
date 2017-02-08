import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Modal, Image, Slider } from '../../src/components';

const Logo = (props) => {

    let style = {
        backgroundImage: `url(${props.url})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: `${props.width}px`,
        height: `${props.height}px`
    }

    return (
        <div className="logo" style={style}>
        </div>
    );
}

class WebLayout extends React.Component {

    constructor (props) {
        super(props);
        this.toggleMenu = ::this.toggleMenu;
        this.onMenuHide = ::this.onMenuHide;
        this.state = {
            menuVisible: false
        }
    }

    toggleMenu(){
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    }

    onMenuHide(){
        this.setState({
            menuVisible: false
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
                    <Menu left visible={this.state.menuVisible} onHide={this.onMenuHide}>
                        <Menu.Header title="Suitup UI" icon={logo} style={{backgroundColor: 'rgb(35,35,35)', color: 'rgb(50, 186, 141)', border: 'none'}}/>
                        <Menu.Item href="/" text="Inicio"/>
                        <Menu.Item text="Containers">
                            <Menu.SubItem text="Layout" href="/containers/layout"/>
                            <Menu.SubItem text="Container" href="/containers/container"/>
                            <Menu.SubItem text="Box" href="/containers/box"/>
                        </Menu.Item>
                        <Menu.Item text="Components">
                            <Menu.SubItem text="Card" href="/components/card"/>
                            <Menu.SubItem text="Modal" href="/components/modal"/>
                            <Menu.SubItem text="Slider" href="/components/slider"/>
                        </Menu.Item>
                        <Menu.Item text="Responsive">
                            <Menu.SubItem text="Devices and breakpoints" href="/responsive/devices"/>
                        </Menu.Item>
                        <Menu.Item text="Theming" href="/theming"/>
                    </Menu>
                    {this.props.children}
                    <Footer style={{backgroundColor: 'rgb(35,35,35)', color: 'rgb(50, 186, 141)'}}/>
                </Layout>
            );
    }
} 

export default WebLayout;