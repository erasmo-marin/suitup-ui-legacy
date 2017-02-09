import React from 'react';
import MarkdownJsx from 'markdown-to-jsx';
import {PrismCode} from "react-prism";
import { Box } from '../../../src/components';

const CodeBlock = ({children, ...props}) => (
      <PrismCode {...props}>
        { children }
      </PrismCode>
);



let h1Wrap = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    textAlign: 'center',
    height: '100px',
    lineHeight: '100px',
    margin: '0',
    background: "linear-gradient(161deg, rgba(53,215,187,1) 0%, rgba(0,128,128,1) 100%)",
    color: '#fff',
    borderBottom: '1px solid #35d2c8'
}

let h1Style = {
    backgroundImage: 'url(/img/noise.png)',
    backgroundRepeat: 'repeat',
    margin: '0',
    height: '100px',
    lineHeight: '100px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
}

const H1 = ({children, ...props}) => (
    <div className="h1-wrapper" style={h1Wrap}>
        <h1 style={h1Style}>{children}</h1>
    </div>
);

class Markdown extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        let style = {
            marginTop: '100px'
        }

        return (
                <Box columns={12}>
                    <Box.Child wide={12}>
                        <div className="suitup-docs-markdown" style={style}>
                            <MarkdownJsx
                                    options={{
                                        overrides: {
                                            pre: {
                                                props: {
                                                    className: 'line-numbers'
                                                }
                                            },
                                            code: {
                                                component: CodeBlock
                                            },
                                            h1: {
                                                component: H1
                                            }
                                        },
                                    }}>
                                {this.props.source}
                            </MarkdownJsx>
                        </div>
                    </Box.Child>
                </Box>
        );
    }
}

export default Markdown;