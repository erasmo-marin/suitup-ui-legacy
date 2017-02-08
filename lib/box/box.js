var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';
import Child from './boxChild';

class Box extends React.Component {

  constructor(props) {
    super(props);
  }

  setupChildProps(props) {
    if (props.children && props.columns) {

      let gutter = this.parseGutter(props.gutter);
      if (gutter && gutter.number) {
        gutter = gutter.number / 2 + gutter.measure;
      }

      if (isArray(props.children)) {
        return props.children.map(function (element) {

          let wide = element.props.wide ? element.props.wide : 1;

          return React.cloneElement(element, {
            columns: props.columns,
            gutter: gutter ? gutter : "0.5rem"
          });
        }, this);
      } else {
        return React.cloneElement(props.children, {
          columns: props.columns,
          gutter: gutter ? gutter : "0.5rem"
        });
      }
    } else {
      return props.children;
    }
  }

  parseGutter(gutter) {

    if (!gutter) return;

    let number = parseFloat(gutter);

    return {
      number: number,
      measure: gutter.replace(number, "")
    };
  }

  render() {

    let _props = this.props,
        { horizontal, vertical, autoFill, centered, justify, children, columns, gutter } = _props,
        rest = _objectWithoutProperties(_props, ['horizontal', 'vertical', 'autoFill', 'centered', 'justify', 'children', 'columns', 'gutter']);

    if (!gutter) {
      gutter = '0.5rem';
    }

    let classes = classnames({
      box: true,
      horizontal: vertical == null ? true : false,
      vertical: vertical,
      "fill-space": autoFill,
      centered: justify == 'center',
      left: justify == 'left',
      right: justify == 'right'
    });

    gutter = this.parseGutter(gutter);

    if (gutter && gutter.number) {
      gutter = gutter.number / 2 * -1 + gutter.measure;
    }

    let cstyle = {
      marginLeft: gutter,
      marginRight: gutter
    };

    return React.createElement(
      'div',
      _extends({}, rest, { style: cstyle, className: classes }),
      this.setupChildProps(this.props)
    );
  }
}

Box.Child = Child;

Box.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type.name != 'Box.Child' && child.type.name != 'BoxChild') {
        error = new Error('`' + componentName + '` children should be of type `Box.Child`, instead it was of type ' + child.type.name);
      }
    });
    return error;
  }
};

export default Box;
module.exports = exports['default'];