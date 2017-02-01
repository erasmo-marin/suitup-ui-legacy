import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class BoxChild extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
    let style = {};
    let {rows, wide, width, children, ...rest} = this.props;
    
  	let classes = {
      "box-child": true
  	};

    if(rows && !wide) {
      classes["c-" + rows] = true;
    }

    if(wide) {
      classes["c-" + wide] = true;
    }

    if(width) {
      style.width = width;
    }

    classes = classnames(classes);

    return (
              <div {...rest} className={classes} style={style}>
                { children }
              </div>
           );
  }
}

export default BoxChild;