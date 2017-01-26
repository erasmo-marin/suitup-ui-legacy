import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import '../../styles/image.less';

const sizes = {
  icon: {
    width: 240,
    height: 240
  },
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
      console.log("1");
      width = this.computeSizeInPixels(this.props.width, "x");
      height = this.getHeightFromWidth(dimensions, width);
    } else if (this.props.height && !this.props.width) {
      console.log("2");
      height = this.computeSizeInPixels(this.props.height, "y");
      width = this.getWidthFromHeight(dimensions, height);
    } else {
      console.log("3");
      width = this.computeSizeInPixels(this.props.width, "x");
      height = this.computeSizeInPixels(this.props.height, "y");
    }

    console.log("dm", width, height);

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

    console.log("size 1", size);

    let width = this.image.offsetWidth;
    let height = this.image.offsetHeight;
    console.log(this.image, width, height);

    if(isPercent) {
      if (axis == "x") {
        size = (size*width)/100;
        console.log("size 2", size);
      } else if (axis == "y") {
        size = (size*height)/100;
        console.log("size 3", size);
      }
    }
    console.log("computeSizeInPixels", size, axis);
    return size;
  }

  render () {

    let width, height;

    if(this.props.width && (this.isPercent(this.props.width) || this.isPixel(this.props.width))) {
      width = this.props.width;
    } else {
      width = this.state.width;
    }

    if(this.props.height && (this.isPercent(this.props.height) || this.isPixel(this.props.height))) {
      height = this.props.height;
    } else {
      height = this.state.height;
    }


    let style = {
      backgroundImage: `url(${this.props.src})`,
      width: `${width}`,
      height: `${height}`,
      backgroundSize: "cover",
      backgroundPositon: "center"
    };
  	
  	let classes = {
      "image": true
  	};

    classes = classnames(classes);

    return (<div className={classes} style={style} ref={(c) => {this.image = c}}>
              {this.props.children}
            </div>);
  }
}

export default Image;