import React from "react";
import classnames from 'classnames';
import suitupable from "../component";

@suitupable(true, true)
class CardFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = {
      "card-footer": true
    };

    classes = classnames(classes);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default CardFooter;