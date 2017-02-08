import React from 'react';
import MarkdownJsx from 'markdown-to-jsx';
import {PrismCode} from "react-prism";

const CodeBlock = ({children, ...props}) => (
      <PrismCode {...props}>
        { children }
      </PrismCode>
);

class Markdown extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
                <MarkdownJsx
                        options={{
                            overrides: {
                                code: {
                                    component: CodeBlock,
                                    props: {
                                        className: 'language-jsx'
                                    },
                                },
                            },
                        }}>
                    {this.props.source}
                </MarkdownJsx>
        );
    }
}

export default Markdown;