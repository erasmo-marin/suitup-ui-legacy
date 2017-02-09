# Slider

The Slider component allows you to show information separated in slides, like a presentation. Suitup Slider is **draggable**, making it ready for mobile, and also it supports **lazy load** to load the slides just when they are going to be needed, and **minimal rendering**, that just render the slides that are going to be needed in the moment.


```jsx
<Slider settings={this.state.sliderSettings}>
    <Slider.Slide key={1}>
        <Image src="http://f.fwallpapers.com/images/forest-canada.png" type="backdrop" width="100%">
            <Image.Vail>
                <Container>
                    <h1>Hi! welcome to Suitup</h1>
                    <h4>Sliders can have anything inside</h4>
                    <Button type="button" style={{marginTop: "50px"}}>
                        Like buttons
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
                    <h5 style={{color: '#fff'}}>Use this feature in the case that you have slides with heavy content, like big images.</h5>
                </Container>
            </Image.Vail>
        </Image>
    </Slider.Slide>
<Slider>
```