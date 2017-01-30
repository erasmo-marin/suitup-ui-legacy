import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/footer.less';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

  	let {children, ...rest} = this.props;

    return (<footer {...rest}>
    			{children}
    		</footer>);
  }
}

export default Footer;