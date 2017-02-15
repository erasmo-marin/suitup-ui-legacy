import React from "react";
import classnames from 'classnames';

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = {
      "card-footer": true
    };

    classes = classnames(classes);

    return React.createElement(
      "div",
      { className: classes },
      this.props.children
    );
  }
}

export default CardFooter;