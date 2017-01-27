import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class ModalFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
  	let classes = {
      "modal-footer": true
  	};

    classes = classnames(classes);

    return (<div {...this.props} className={classes}>
              {this.props.children}
            </div>);
  }
}

export default ModalFooter;