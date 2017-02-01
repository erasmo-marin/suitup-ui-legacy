import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class BoxChild extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
    let cstyle = {};
    let {rows, wide, width, children, style, gutter, ...rest} = this.props;
    
  	let classes = {
      "box-child": true
  	};

    if(wide && rows) {
      cstyle.width = `${(100/rows)*wide}%`;
      cstyle.padding = gutter;
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