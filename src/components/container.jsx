import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class Container extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
  	let classes = {
      "container": true
  	};

    classes = classnames(classes);

    return (
              <div className={classes}>
                { this.props.children }
              </div>
           );
  }
}

export default Container;