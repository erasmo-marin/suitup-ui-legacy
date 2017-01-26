import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import '../styles/button.less';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = ::this.onClick;
    this.onMouseDown = ::this.onMouseDown;
    this.onMouseUp = ::this.onMouseUp;
    this.state = {
      pressed: false
    }
  }

  onClick(e) {
    if(this.props.onClick) {
      this.props.onClick(e);
    }
  }

  onMouseDown(e) {
    this.setState({
      pressed: true
    });
    if(this.props.onMouseDown) {
      this.props.onMouseDown(e);
    }
  }

  onMouseUp(e) {
    this.setState({
      pressed: false
    });
    if(this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }

  render () {
  	
  	let classes = {
      transparent: this.props.transparent,
      circular: this.props.circular,
      rounded: this.props.rounded,
      "menu-button": this.props.menu,
      pressed: this.state.pressed
  	};

    classes = classnames(classes);

    return (<button type={this.props.type} className={classes} onClick={this.onClick} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
              {this.props.children}
              <If condition={this.props.text}>
                <span>{this.props.text}</span>
              </If>
            </button>);
  }
}

export default Button;