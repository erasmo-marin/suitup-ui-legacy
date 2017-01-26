import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class BoxChild extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
  	let classes = {
      "box-child": true
  	};

    let style = {};

    if(this.props.rows && !this.props.wide) {
      classes["c-" + this.props.rows] = true;
    }

    if(this.props.wide) {
      classes["c-" + this.props.wide] = true;
    }

    if(this.props.width) {
      style.width = this.props.width;
    }

    classes = classnames(classes);

    return (
              <div className={classes} style={style}>
                { this.props.children }
              </div>
           );
  }
}

export default BoxChild;