var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.state = {
      pressed: false
    };
  }

  onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  onMouseDown(e) {
    this.setState({
      pressed: true
    });
    if (this.props.onMouseDown) {
      this.props.onMouseDown(e);
    }
  }

  onMouseUp(e) {
    this.setState({
      pressed: false
    });
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }

  render() {

    let _props = this.props,
        { text, children, transparent, circular, rounded, menu, pressed, type, onClick, onMouseUp, onMouseDown } = _props,
        rest = _objectWithoutProperties(_props, ['text', 'children', 'transparent', 'circular', 'rounded', 'menu', 'pressed', 'type', 'onClick', 'onMouseUp', 'onMouseDown']);

    let classes = {
      transparent: this.props.transparent,
      circular: this.props.circular,
      rounded: this.props.rounded,
      "menu-button": this.props.menu,
      pressed: this.state.pressed
    };

    classes = classnames(classes);

    return React.createElement(
      'button',
      _extends({}, rest, { type: type, className: classes, onClick: this.onClick, onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp }),
      children,
      text ? React.createElement(
        'span',
        null,
        text
      ) : null
    );
  }
}

export default Button;
module.exports = exports['default'];