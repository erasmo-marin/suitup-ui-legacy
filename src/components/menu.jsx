import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import classnames from 'classnames';


class Item extends React.Component {

    constructor(props) {
        super(props);
        this.toggleItems = ::this.toggleItems;
        this.state = {
            subItems: false
        }
    }

    toggleItems() {
        this.setState({
            subItems: !this.state.subItems
        });
    }

    render() {
        let {href, text, ...rest} = this.props;

        let subItemsClasses = classnames({
            "menu-sub-items": true,
            "visible": this.state.subItems
        })


        return  (<div {...rest} className="menu-item">
                    <Choose>
                        <When condition={href}>
                            <Link to={href}>{text}</Link>
                        </When>
                        <Otherwise>
                            <span onClick={this.toggleItems}>{text}</span>
                        </Otherwise>
                    </Choose>
                    <If condition={this.props.children}>
                        <div className={subItemsClasses}>
                            <div className="menu-sub-items-wrapper">
                                {this.props.children}
                            </div>
                        </div>
                    </If>
                 </div>)
    }
}

class SubItem extends React.Component {
    render() {
        let {text, href, ...rest} = this.props;
        return (<div {...rest} className="menu-sub-item">
                    <Choose>
                        <When condition={href}>
                            <Link to={href}>{text}</Link>
                        </When>
                        <Otherwise>
                            <span>{text}</span>
                        </Otherwise>
                    </Choose>
                </div>
                )
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

    let {children, left, right, visible, onShow, onHide, style, ...rest} = this.props;

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
Menu.SubItem = SubItem;
export default Menu;