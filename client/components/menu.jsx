import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import classnames from 'classnames';
import '../styles/menu.less';


class Item extends React.Component {
	render() {
		return	(<div className="menu-item">
    				    <Link to={this.props.href}>{this.props.text}</Link>
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
  	let classes = classnames({
  		menu: true,
  		fixed: true,
  		left: this.props.left,
  		right: this.props.right,
  		visible: this.state.visible
  	});

    let veilClasses = classnames({
      "menu-veil": true,
       visible: this.state.visible
    });

    return (<div>
              <div className={veilClasses} onClick={this.hide}/>
              <nav className={classes}>
          			<If condition={this.props.header}>
          				<div className='menu-header'>
          					{this.props.header}
          				</div>
          			</If>
          			<If condition={this.props.items}>
          				{
          					this.props.items.map((link, index) => {
          						return (<Item href={link.href} text={link.text} key={index}/>);
          					})
          				}
          			</If>
      		    </nav>
            </div>);
  }
}

export default Menu;