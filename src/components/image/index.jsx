import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import ImageVail from './imageVail';

const sizes = {
  square: {
    width: 600,
    height: 600    
  },
  mediumv: {
    width: 600,
    height: 800
  },
  mediumh: {
    width: 800,
    height: 600
  },
  poster: {
    width: 600,
    height: 900
  },
  backdrop: {
    width: 1600,
    height: 900
  },
  banner: {
    width: 2000,
    height: 400
  }
}

class Image extends React.Component {

  constructor(props) {
    super(props);
    this.recalculeSize = ::this.recalculeSize;
    this.state = {
      width: this.props.width ? this.props.width : 0,
      height: this.props.height ? this.props.height : 0,
    }
  }

  componentDidMount() {
      setTimeout(() => {
        this.recalculeSize();
      }, 200);
      window.addEventListener('resize', this.recalculeSize);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.recalculeSize);
  }

  recalculeSize() {
    let width, height = 0;
    let dimensions;

    if(this.props.type) {
      dimensions = sizes[this.props.type];
    }

    if (this.props.width && !this.props.height) {
      width = this.computeSizeInPixels(this.props.width, "x");
      height = this.getHeightFromWidth(dimensions, width);
    } else if (this.props.height && !this.props.width) {
      height = this.computeSizeInPixels(this.props.height, "y");
      width = this.getWidthFromHeight(dimensions, height);
    } else {
      width = this.computeSizeInPixels(this.props.width, "x");
      height = this.computeSizeInPixels(this.props.height, "y");
    }

    this.setState({
      width: `${width}px`,
      height: `${height}px`
    });
  }

  getHeightFromWidth(dimensions, width) {
    return width/(dimensions.width/dimensions.height);
  }

  getWidthFromHeight(dimensions, height) {
    return height*(dimensions.width/dimensions.height);
  }

  isPercent(str) {
    if(str.endsWith("%")) {
      return true;
    }
    return false;
  }

  isPixel(str) {
    if(str.endsWith("px")) {
      return true;
    }
    return false;
  }

  computeSizeInPixels(size, axis) {

    let isPercent = false;

    if (this.isPercent(size)) {
      isPercent = true;
      size = parseFloat(size.replace("%", ""));
    } else if (size.endsWith("px")) {
      size = parseFloat(size.replace("px", ""));
    }

    let width = this.image.offsetWidth;
    let height = this.image.offsetHeight;

    if(isPercent) {
      if (axis == "x") {
        size = (size*width)/100;
      } else if (axis == "y") {
        size = (size*height)/100;
      }
    }
    return size;
  }

  render () {

    let {width, height, src, style, type, centered, children, ...rest} = this.props;

    let rwidth, rheight;

    if(width && (this.isPercent(width) || this.isPixel(width))) {
      rwidth = width;
    } else {
      rwidth = this.state.width;
    }

    if(height && (this.isPercent(height) || this.isPixel(height))) {
      rheight = height;
    } else {
      rheight = this.state.height;
    }


    let rstyle = {
      backgroundImage: src != 'none' ? `url(${src})` : 'none',
      width: `${rwidth}`,
      height: `${rheight}`,
      backgroundSize: "cover",
      backgroundPositon: "center"
    };

    if(style) {
      rstyle = {...style, rstyle}
    }
    
    let classes = {
      "image": true,
      centered: centered
    };

    classes = classnames(classes);

    return (<div {...rest} className={classes} style={rstyle} ref={(c) => {this.image = c}}>
              {children}
            </div>);
  }
}

Image.Vail = ImageVail;

export default Image;