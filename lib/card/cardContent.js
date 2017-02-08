import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class CardContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let classes = {
      "card-content": true
    };

    classes = classnames(classes);

    return React.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
}

export default CardContent;
module.exports = exports['default'];