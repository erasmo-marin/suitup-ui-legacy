import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import '../styles/header.less';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
  	let classes = classnames({
  		fixed: this.props.fixed,
  		top: this.props.top,
  		bottom: this.props.bottom
  	});

    return (<header className={classes}>
              {this.props.children}
            </header>);
  }
}

export default Header;