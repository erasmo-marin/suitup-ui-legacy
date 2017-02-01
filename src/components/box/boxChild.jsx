import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class BoxChild extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
    let cstyle = {};
    let {rows, wide, width, children, style, ...rest} = this.props;
    
  	let classes = {
      "box-child": true
  	};

    if(wide && rows) {
      cstyle.width = `calc(${(100/rows)*wide}% - 1rem)`;
    }

    classes = classnames(classes);

    return (
              <div {...rest} className={classes} style={{...style, ...cstyle}}>
                { children }
              </div>
           );
  }
}

export default BoxChild;