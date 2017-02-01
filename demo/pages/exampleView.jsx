import React from 'react';
import { Container, Header, Footer, Menu, Content, Layout, Box, Button, Icon, Card, Modal, Image, Slider } from '../../lib';
import Highlight from 'react-highlight';
import jsxToString from 'jsx-to-string';
import { isArray } from 'lodash';

class ExampleView extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
    this.state = {
      showCode: false
    }
  }

  onClick() {
    this.setState({
        showCode: !this.state.showCode
    });
  }

  render() {

    let codeStr = jsxToString(this.props.children);

    let buttonText = "Show code";
    if(this.state.showCode) {
        buttonText = "Hide code";
    }

    let containerStyle = {
        maxHeight: "400px",
        overflow: "scroll"
    }

    return (
        <Container>
            <Box vertical>
                <Box.Child key={1}>
                    <h5>Component:</h5>
                    {this.props.children}
                </Box.Child>
                <Box.Child key={2}>
                    <Button text={buttonText} onClick={this.onClick}/>
                    <If condition={this.state.showCode}>
                        <div style={containerStyle}>
                            <Highlight className='xml'>
                              { codeStr }
                            </Highlight>
                        </div>
                    </If>
                </Box.Child>
            </Box>
        </Container>
        );
    }
}

export default ExampleView;