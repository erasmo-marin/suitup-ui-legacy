import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { cloneDeep, isArray } from 'lodash';
import Child from './boxChild';
import '../../styles/box.less';

class Box extends React.Component {

  constructor(props) {
    super(props);
  }

  setupChildProps(props) {
    if(props.children && props.rows) {
      if(isArray(props.children)) {
          return props.children.map(function(element) {
            return React.cloneElement(
              element, {
                rows: props.rows
              }
          )}, this);
      } else {
        return React.cloneElement(
          props.children, {
            rows: props.rows
          }
        )
      }
    } else {
      return props.children;
    }
  }

  render () {

    let {horizontal, vertical, autoFill, centered, children, rows, ...rest} = this.props;
    
    let classes = classnames({
      box: true,
      horizontal: horizontal,
      vertical: vertical,
      "fill-space": autoFill,
      centered: centered
    });

    return (
              <div {...rest} className={classes}>
                { this.setupChildProps(this.props) }
              </div>
           );
  }
}

Box.Child = Child;

Box.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      if (child.type !== Child) {
        error = new Error('`' + componentName + '` children should be of type `Box.Child`.');
      }
    })
    return error
  }
}


export default Box;