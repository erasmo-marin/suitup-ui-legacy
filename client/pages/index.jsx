import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Image } from '../components';

class Index extends React.Component {

	constructor (props) {
		super(props);
		this.toggleMenu = ::this.toggleMenu;
		this.onMenuHide = ::this.onMenuHide;
		this.state = {
			menuVisible: false,
			menus: [{
						text: "Home",
						href: "/home"
				    },
				    {
						text: "Profile",
						href: "/profile"
				    },
				    {
						text: "Contact",
						href: "/contact"
				    }]
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
		return (
				<Layout vertical>
					<Menu right visible={this.state.menuVisible} items={this.state.menus} onHide={this.onMenuHide}/>
					<Header top>
						<Box horizontal>
							<Box.Child>
								<Button menu type="button" onClick={this.toggleMenu}>
									<Icon name="menu" size={48}/>
								</Button>
							</Box.Child>
						</Box>
					</Header>
					<Container>
						<Container>
							<Box horizontal rows={3}>
								<Box.Child key={1}>
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
								<Box.Child key={2}>
									<Card>
										<Box vertical>
											<Box.Child>
												<Image src="http://materializecss.com/images/sample-1.jpg" type="mediumh" width="100%"/>
											</Box.Child>
										</Box>
									</Card>
								</Box.Child>
								<Box.Child key={3}>
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
						<Container>
							<Box horizontal rows={3}>
								<Box.Child key={1}>
									<Image src="http://pngimg.com/upload/cat_PNG106.png" type="square" width="100%"/>
								</Box.Child>
								<Box.Child key={2}>
									<Image src="http://pngimg.com/upload/cat_PNG106.png" type="square" width="100%"/>
								</Box.Child>
								<Box.Child key={3}>
									<Image src="http://pngimg.com/upload/cat_PNG106.png" type="square" width="100%"/>
								</Box.Child>
							</Box>
						</Container>
						<Container>
							<Box horizontal rows={2}>
								<Box.Child key={1}>
									<Card>
										<Box horizontal rows={3}>
											<Box.Child wide={2} key={1}>
												<Image src="http://materializecss.com/images/sample-1.jpg" type="poster" width="100%"/>
											</Box.Child>
											<Box.Child wide={1} key={2}>
												<Card.Content>
													<p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
												</Card.Content>
											</Box.Child>
										</Box>
									</Card>
								</Box.Child>
								<Box.Child key={2}>
									<Card>
										<Box horizontal>
											<Box.Child wide={2} key={1}>
												<Image src="http://materializecss.com/images/sample-1.jpg" type="poster" width="100%"/>
											</Box.Child>
											<Box.Child wide={1} key={2}>
												<Card.Content>
													<p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
												</Card.Content>
											</Box.Child>
										</Box>
									</Card>
								</Box.Child>
							</Box>
						</Container>
						<Container>
							<Box horizontal rows={2}>
								<Box.Child key={1}>
									<Card>
										<Box horizontal rows={3}>
											<Box.Child wide={2} key={1}>
												<Image src="http://materializecss.com/images/sample-1.jpg" type="mediumv" width="100%"/>
											</Box.Child>
											<Box.Child wide={1} key={2}>
												<Card.Content>
													<p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
												</Card.Content>
											</Box.Child>
										</Box>
									</Card>
								</Box.Child>
								<Box.Child key={2}>
									<Card>
										<Box horizontal>
											<Box.Child wide={2} key={1}>
												<Image src="http://materializecss.com/images/sample-1.jpg" type="mediumv" width="100%"/>
											</Box.Child>
											<Box.Child wide={1} key={2}>
												<Card.Content>
													<p>Soy una tarjeta muy simple. Soy buena mostrando pequeños trozos de información. Soy conveniente porque requiero pocas etiquetas para usarme efectivamente.</p>
												</Card.Content>
											</Box.Child>
										</Box>
									</Card>
								</Box.Child>
							</Box>
						</Container>
					</Container>
					<Footer/>
				</Layout>
			);
	}
} 

export default Index;