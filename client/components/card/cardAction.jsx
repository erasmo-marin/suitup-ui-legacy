import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Button from '../button';

class CardAction extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
  	
  	let classes = {
      "card-action": true,
      start: this.props.start,
      end: this.props.end
  	};

    classes = classnames(classes);

    return (<div className={classes}>
              <Button text={this.props.text} onClick={this.props.onClick}/>
            </div>);
  }
}

export default CardAction;