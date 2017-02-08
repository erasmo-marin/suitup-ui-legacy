import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class Container extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let classes = {
      "container": true
    };

    classes = classnames(classes);

    return React.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
}

export default Container;
module.exports = exports['default'];