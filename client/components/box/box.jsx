import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { cloneDeep, isArray } from 'lodash';
import Child from './boxChild';
import '../../styles/box.less';

class Box extends React.Component {

  constructor(props) {
    super(props);
    this.setupChildProps();
  }

  setupChildProps() {
    if(this.props.children && this.props.rows) {
      if(isArray(this.props.children)) {
          this.children = this.props.children.map(function(element) {
            return React.cloneElement(
              element, {
                rows: this.props.rows
              }
          )}, this);
      } else {
        this.children = React.cloneElement(
          this.props.children, {
            rows: this.props.rows
          }
        )
      }
    } else {
      this.children = this.props.children;
    }
  }

  render () {
    
    let classes = classnames({
      box: true,
      horizontal: this.props.horiontal,
      vertical: this.props.vertical,
      "fill-space": this.props.autoFill
    });

    return (
              <div className={classes}>
                { this.children }
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