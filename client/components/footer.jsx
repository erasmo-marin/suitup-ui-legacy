import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/footer.less';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (<footer>
    			{this.props.children}
    		</footer>);
  }
}

export default Footer;