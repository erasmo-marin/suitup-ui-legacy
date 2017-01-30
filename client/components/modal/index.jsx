import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { NotifyResize } from 'react-notify-resize';
import ModalAction from './modalAction';
import ModalContent from './modalContent';
import ModalFooter from './modalFooter';
import shallowCompare from 'react-addons-shallow-compare';
import '../../styles/modal.less';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.show = ::this.show;
    this.hide = ::this.hide;
    this.centerVertically = ::this.centerVertically;
    window.cv = this.centerVertically;
  }

  componentDidMount() {
    let c = this.renderModal(this.props);
    ReactDOM.render(c, document.getElementById('modalMountPoint'));
    if(this.props.visible) {
      setTimeout(() => {
        this.modal.classList.add("visible");
      }, 500);
    }
    window.addEventListener('resize', this.centerVertically);
  }

  shouldComponentUpdate(nextProps) {
    return shallowCompare(this, nextProps);
  }

  componentWillReceiveProps(nextProps) {

    if(!shallowCompare(this, nextProps)) {
      return;
    }

    let c = this.renderModal(nextProps);
    ReactDOM.render(c, document.getElementById('modalMountPoint'));

    if(nextProps.visible) {
      this.show();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.centerVertically);
  }

  show() {
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';
    document.body.style.overflow = 'hidden';
    this.centerVertically();
    this.modal.classList.add("visible");
    document.getElementById("layout").style.filter = "blur(5px)";

    if(this.props.onShow) {
      this.props.onShow();
    }

    if(this.props.onChange) {
      this.props.onChange(true);
    }

  }

  hide() {
    this.modal.classList.remove("visible");
    document.body.style.margin = '';
    document.body.style.overflow = '';
    document.getElementById("layout").style.filter = "none";

    if(this.props.onHide) {
      this.props.onHide();
    }

    if(this.props.onChange) {
      this.props.onChange(false);
    }

  }

  centerVertically() {
    let diff = window.innerHeight - this.modalInner.offsetHeight;
    if(diff > 0) {
      this.modalInner.style.marginTop = diff/2 + "px";
    }
  }

  preventPropagation(e) {
    if(!e)
      return;
    e.preventDefault();
    e.stopPropagation();
  }

  renderModal(props) {

    let {children, onHide, onShow, onChange, visible, ...rest} = this.props;


    let classes = classnames({
                    "modal-container": true,
                  });


    return( <div {...rest} className={classes} ref={(c) => this.modal = c} onClick={this.hide}>
              <div className="modal" ref={(c) => this.modalInner = c} style={{position: "relative"}} onClick={this.preventPropagation}>
                <NotifyResize onResize={this.centerVertically} />
                  {children}
              </div>
            </div>);
  }

  render () {
    return null;
  }
}

Modal.Action = ModalAction;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;