import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class Icon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let classes = {
      "material-icons": true,
      "md-18": this.props.size == 18,
      "md-24": this.props.size == 24,
      "md-36": this.props.size == 36,
      "md-48": this.props.size == 48
    };

    classes = classnames(classes);

    return React.createElement(
      'i',
      { className: classes },
      this.props.name
    );
  }
}

export default Icon;
module.exports = exports['default'];