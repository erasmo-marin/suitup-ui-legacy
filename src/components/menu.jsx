import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import classnames from 'classnames';


class Item extends React.Component {
	render() {

    let {href, text, ...rest} = this.props;

		return	(<div {...rest} className="menu-item">
    				    <Link to={href}>{text}</Link>
    				 </div>)
	}
}

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.hide = ::this.hide;
    this.state = {
      visible: this.props.visible
    }
  }

  hide() {
    this.setState({
      visible: false
    })
    if(this.props.onHide) {
      this.props.onHide();
    }
  }

  show() {
    this.setState({
      visible: true
    });
    if(this.props.onShow) {
      this.props.onShow();
    }    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible != null ? nextProps.visible : this.state.visible
    });
  }

  render () {

    let {children, left, right, visible, onShow, onHide, ...rest} = this.props;

  	let classes = classnames({
  		menu: true,
  		fixed: true,
  		left: left,
  		right: right,
  		visible: visible
  	});

    let veilClasses = classnames({
      "menu-veil": true,
       visible: this.state.visible
    });

    return (<div {...rest}>
              <div className={veilClasses} onClick={this.hide}/>
              <nav className={classes}>
                {children}
      		    </nav>
            </div>);
  }
}

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    
    let classes = classnames({
      "menu-header": true
    });

    let {icon, title, ...rest} = this.props;


    return (<div {...rest} className={classes}>
              <If condition={this.props.icon}>
                <div className="menu-header-icon">
                  {icon}
                </div>
              </If>
              <span className="menu-header-title">{title}</span>
            </div>);
  }
}

Menu.Header = Header;
Menu.Item = Item;
export default Menu;