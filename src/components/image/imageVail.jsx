import React from "react";
import classnames from "classnames";

class ImageVail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classnames({
      "image-vail": true
    });

    let style = {
      width: "100%",
      height: "100%"
    };

    return (
      <div className={classes} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default ImageVail;